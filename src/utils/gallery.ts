import { UncleEntry } from '../types/uncle';

/**
 * Generates a session-stable randomized presentation order for the gallery.
 * Canonical data order in the archive is never modified.
 */
export function getSessionRandomizedGallery(uncles: UncleEntry[]): UncleEntry[] {
  if (typeof window === 'undefined') return [...uncles];

  const SESSION_KEY = 'uis_gallery_session_seed_v1';
  let seedOrder: string[] = [];

  try {
    const cached = sessionStorage.getItem(SESSION_KEY);
    if (cached) {
      seedOrder = JSON.parse(cached);
    }
  } catch {
    // Session storage not available or restricted
  }

  // Verify all current uncle IDs are in the cached seed
  const uncleIds = uncles.map((u) => u.id);
  const isValid =
    seedOrder.length === uncleIds.length &&
    uncleIds.every((id) => seedOrder.includes(id));

  if (!isValid) {
    // Perform Fisher-Yates shuffle on IDs for presentation
    const shuffledIds = [...uncleIds];
    for (let i = shuffledIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIds[i], shuffledIds[j]] = [shuffledIds[j], shuffledIds[i]];
    }
    seedOrder = shuffledIds;
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(seedOrder));
    } catch {
      // Ignore session storage errors
    }
  }

  // Map shuffled IDs back to canonical Uncle records
  const idMap = new Map(uncles.map((u) => [u.id, u]));
  return seedOrder.map((id) => idMap.get(id)!).filter(Boolean);
}
