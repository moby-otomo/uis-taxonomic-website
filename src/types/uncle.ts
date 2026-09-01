/**
 * Canonical Uncle taxonomy record schema.
 * Specification: CORE_UnclesInSpace-Website-ContentData_UIS_v01.md
 */

export interface UncleEntry {
  /** Canonical stable identifier, e.g., 'TAXO_No0013' */
  id: string;
  /** Display number, e.g., '0013' or '11188' */
  number: string;
  /** Uncle identity name */
  name: string;
  /** Essay title */
  entryTitle: string;
  /** Canonical human-readable permalink slug */
  slug: string;
  /** Flag marking the latest published entry */
  isLatest?: boolean;
  /** Asset path for gallery avatar */
  galleryImage: string;
  /** Independent background color swatch for gallery tile */
  galleryBgColor: string;
  /** Asset path for main full-body portrait */
  mainImage: string;
  /** Conceptual phrase (e.g. 'yat-sam-saam-saam-saam → ...') */
  phrase: string;
  /** Chinese character string (e.g. '「三講三回」') */
  chinesePhrase: string;
  /** Translation / phrase explanation */
  translation: string;
  /** Prominent Meaning statement */
  meaning: string;
  /** Essay body split by paragraphs */
  essay: string[];
  /** Publication date string */
  publicationDate: string;
  /** Special notes, e.g. smaller stature */
  notes?: string;
}
