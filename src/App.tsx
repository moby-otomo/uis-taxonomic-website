import { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/Layout';
import { TaxonomyGallery } from './components/TaxonomyGallery';
import { ContinuousArchive } from './components/ContinuousArchive';
import { PermalinkView } from './components/PermalinkView';
import { SecondaryViews } from './components/SecondaryViews';
import { UNCLES_DATA } from './data/uncles';
import { UncleEntry } from './types/uncle';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('ENTRIES');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [permalinkSlug, setPermalinkSlug] = useState<string | null>(null);
  const [selectedUncleId, setSelectedUncleId] = useState<string>(
    UNCLES_DATA.find((u) => u.isLatest)?.id || UNCLES_DATA[0].id
  );

  // Parse route from window location on mount and history changes
  const parseRoute = useCallback(() => {
    if (typeof window === 'undefined') return;

    const path = window.location.pathname;
    const hash = window.location.hash;

    // Check pathname or hash for entry slug
    const entryMatch = path.match(/^\/entries\/([^/]+)/) || hash.match(/^#\/entries\/([^/]+)/);
    if (entryMatch && entryMatch[1]) {
      const slug = entryMatch[1];
      const foundUncle = UNCLES_DATA.find((u) => u.slug === slug);
      if (foundUncle) {
        setPermalinkSlug(slug);
        setSelectedUncleId(foundUncle.id);
        setActiveTab('ENTRIES');
        return;
      }
    }

    // Check secondary tabs
    if (path.includes('/about-uis') || hash === '#/about-uis') {
      setActiveTab('ABOUT_UIS');
      setPermalinkSlug(null);
    } else if (path.includes('/about-moby') || hash === '#/about-moby') {
      setActiveTab('ABOUT_MOBY');
      setPermalinkSlug(null);
    } else if (path.includes('/future-works') || hash === '#/future-works') {
      setActiveTab('FUTURE_WORKS');
      setPermalinkSlug(null);
    } else {
      setActiveTab('ENTRIES');
      setPermalinkSlug(null);
    }
  }, []);

  useEffect(() => {
    parseRoute();
    const handlePopState = () => parseRoute();
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [parseRoute]);

  // Navigate to permalink
  const handleOpenPermalink = (slug: string) => {
    setPermalinkSlug(slug);
    const uncle = UNCLES_DATA.find((u) => u.slug === slug);
    if (uncle) {
      setSelectedUncleId(uncle.id);
    }
    window.history.pushState(null, '', `/entries/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to continuous stream
  const handleReturnToArchive = (targetSlug?: string) => {
    setPermalinkSlug(null);
    setActiveTab('ENTRIES');
    window.history.pushState(null, '', '/');

    if (targetSlug) {
      setTimeout(() => {
        const el = document.getElementById(`entry-${targetSlug}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  // Handle Tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPermalinkSlug(null);
    if (tab === 'ENTRIES') {
      window.history.pushState(null, '', '/');
    } else if (tab === 'ABOUT_UIS') {
      window.history.pushState(null, '', '/about-uis');
    } else if (tab === 'ABOUT_MOBY') {
      window.history.pushState(null, '', '/about-moby');
    } else if (tab === 'FUTURE_WORKS') {
      window.history.pushState(null, '', '/future-works');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Gallery Uncle selection
  const handleSelectUncle = (uncle: UncleEntry) => {
    setSelectedUncleId(uncle.id);

    if (permalinkSlug || activeTab !== 'ENTRIES') {
      // If currently on a permalink or secondary view, return to archive and scroll to the uncle
      setActiveTab('ENTRIES');
      setPermalinkSlug(null);
      window.history.pushState(null, '', '/');
      setTimeout(() => {
        const el = document.getElementById(`entry-${uncle.slug}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      // Directly scroll to uncle in continuous stream
      const el = document.getElementById(`entry-${uncle.slug}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentPermalinkUncle = permalinkSlug
    ? UNCLES_DATA.find((u) => u.slug === permalinkSlug)
    : null;

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={handleTabChange}
      searchQuery={searchQuery}
      onSearchChange={(q) => {
        setSearchQuery(q);
        if (permalinkSlug || activeTab !== 'ENTRIES') {
          setActiveTab('ENTRIES');
          setPermalinkSlug(null);
        }
      }}
    >
      {/* 1. Gallery always visible at top of content area */}
      <TaxonomyGallery
        uncles={UNCLES_DATA}
        selectedUncleId={selectedUncleId}
        onSelectUncle={handleSelectUncle}
      />

      {/* 2. Content Area */}
      {currentPermalinkUncle ? (
        <PermalinkView
          uncle={currentPermalinkUncle}
          onReturnToArchive={() => handleReturnToArchive(currentPermalinkUncle.slug)}
        />
      ) : activeTab === 'ABOUT_UIS' || activeTab === 'ABOUT_MOBY' || activeTab === 'FUTURE_WORKS' ? (
        <SecondaryViews
          viewId={activeTab as 'ABOUT_UIS' | 'ABOUT_MOBY' | 'FUTURE_WORKS'}
          onReturnToEntries={() => handleReturnToArchive()}
        />
      ) : (
        <div className="p-4 sm:p-6 md:p-8">
          <ContinuousArchive
            uncles={UNCLES_DATA}
            searchQuery={searchQuery}
            onPermalinkClick={handleOpenPermalink}
          />
        </div>
      )}
    </Layout>
  );
}
