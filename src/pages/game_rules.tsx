import { useEffect, useMemo, useRef, useState } from 'react';
import './game_rules.css';
import rulesHtml from '../content/game_rules_source.html?raw';

type Chapter = {
  id: string;
  title: string;
  blocks: string[];
};

type PaginatedChapter = Chapter & {
  pages: string[];
};

type BookPage = {
  chapterId: string;
  chapterTitle: string;
  html: string;
};

const DEFAULT_CHAPTER_TITLE = 'Overview';
const HEADING_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
const KEEP_WITH_NEXT_TAGS = new Set(['ul', 'ol', 'table']);

const getTopLevelTagName = (html: string): string => {
  const match = html.trim().match(/^<([a-z0-9-]+)/i);
  return match ? match[1].toLowerCase() : '';
};

const getAttributesMarkup = (element: Element): string => {
  return Array.from(element.attributes)
    .map((attribute) => ` ${attribute.name}="${attribute.value.replace(/"/g, '&quot;')}"`)
    .join('');
};

const splitOversizedBlock = (blockHtml: string): string[] => {
  if (typeof window === 'undefined') {
    return [blockHtml];
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(blockHtml, 'text/html');
  const root = doc.body.firstElementChild;

  if (!root) {
    return [blockHtml];
  }

  const tagName = root.tagName.toLowerCase();

  if (tagName === 'ul' || tagName === 'ol') {
    const items = Array.from(root.children).filter((child) => child.tagName.toLowerCase() === 'li');
    if (items.length <= 1) {
      return [blockHtml];
    }

    const attrs = getAttributesMarkup(root);
    return items.map((item) => `<${tagName}${attrs}>${item.outerHTML}</${tagName}>`);
  }

  if (tagName === 'table') {
    const tableAttrs = getAttributesMarkup(root);
    const directChildren = Array.from(root.children);
    const thead = directChildren.find((child) => child.tagName.toLowerCase() === 'thead');
    const tbody = directChildren.find((child) => child.tagName.toLowerCase() === 'tbody');
    const rows = tbody
      ? Array.from(tbody.children).filter((child) => child.tagName.toLowerCase() === 'tr')
      : directChildren.filter((child) => child.tagName.toLowerCase() === 'tr');

    if (rows.length <= 1) {
      return [blockHtml];
    }

    const headerHtml = thead ? thead.outerHTML : '';
    const usesTbody = Boolean(tbody);

    return rows.map((row) => {
      const bodyHtml = usesTbody ? `<tbody>${row.outerHTML}</tbody>` : row.outerHTML;
      return `<table${tableAttrs}>${headerHtml}${bodyHtml}</table>`;
    });
  }

  return [blockHtml];
};

const parseChaptersFromHtml = (html: string): Chapter[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  const parser = new DOMParser();
  const documentNode = parser.parseFromString(html, 'text/html');
  const sourceRoot = documentNode.querySelector('article') ?? documentNode.body;
  const rawNodes = Array.from(sourceRoot.children);

  const chapters: Chapter[] = [];
  let chapterCounter = 1;
  let currentChapter: Chapter = {
    id: `chapter-${chapterCounter}`,
    title: DEFAULT_CHAPTER_TITLE,
    blocks: [],
  };

  rawNodes.forEach((node) => {
    const tagName = node.tagName.toLowerCase();
    if (tagName === 'h2') {
      if (currentChapter.blocks.length > 0) {
        chapters.push(currentChapter);
      }

      chapterCounter += 1;
      currentChapter = {
        id: `chapter-${chapterCounter}`,
        title: node.textContent?.trim() || `Chapter ${chapterCounter - 1}`,
        blocks: [],
      };
      return;
    }

    currentChapter.blocks.push(node.outerHTML);
  });

  if (currentChapter.blocks.length > 0) {
    chapters.push(currentChapter);
  }

  if (chapters.length === 0) {
    return [
      {
        id: 'chapter-1',
        title: DEFAULT_CHAPTER_TITLE,
        blocks: ['<p>No rules content found.</p>'],
      },
    ];
  }

  return chapters;
};

const clampPositive = (value: number) => (value > 0 ? value : 0);

const GameRulesPage = () => {
  const measureRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const chapters = useMemo(() => parseChaptersFromHtml(rulesHtml), []);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState({ width: 0, height: 0 });
  const [turnDirection, setTurnDirection] = useState<'next' | 'prev' | 'none'>('none');

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const updateViewportSize = () => {
      setPageSize({
        width: clampPositive(viewport.clientWidth),
        height: clampPositive(viewport.clientHeight),
      });
    };

    updateViewportSize();

    const observer = new ResizeObserver(updateViewportSize);
    observer.observe(viewport);

    return () => {
      observer.disconnect();
    };
  }, []);

  const paginatedChapters = useMemo<PaginatedChapter[]>(() => {
    if (pageSize.width === 0 || pageSize.height === 0 || !measureRef.current) {
      return chapters.map((chapter) => ({ ...chapter, pages: ['<p>Loading pages...</p>'] }));
    }

    const measure = measureRef.current;
    measure.style.width = `${pageSize.width}px`;

    return chapters.map((chapter) => {
      const pages: string[] = [];
      let currentPageHtml = '';
      const tryFit = (html: string) => {
        measure.innerHTML = `<article class="rules-page rules-page-measure-sizer"><div class="rules-page-content">${html}</div></article>`;
        return measure.scrollHeight <= pageSize.height;
      };

      const appendBlock = (blockHtml: string) => {
        const candidateHtml = `${currentPageHtml}${blockHtml}`;
        const fits = tryFit(candidateHtml);

        if (fits) {
          currentPageHtml = candidateHtml;
          return;
        }

        if (currentPageHtml.length > 0) {
          pages.push(currentPageHtml);
          currentPageHtml = '';
          appendBlock(blockHtml);
          return;
        }

        const splitBlocks = splitOversizedBlock(blockHtml);
        if (splitBlocks.length > 1) {
          splitBlocks.forEach((part) => appendBlock(part));
          return;
        }

        currentPageHtml = blockHtml;
      };

      let blockIndex = 0;
      while (blockIndex < chapter.blocks.length) {
        const blockHtml = chapter.blocks[blockIndex];
        const blockTag = getTopLevelTagName(blockHtml);
        const nextBlockHtml = chapter.blocks[blockIndex + 1];
        const nextBlockTag = nextBlockHtml ? getTopLevelTagName(nextBlockHtml) : '';

        if (HEADING_TAGS.has(blockTag) && KEEP_WITH_NEXT_TAGS.has(nextBlockTag)) {
          const combinedHtml = `${blockHtml}${nextBlockHtml}`;
          const combinedFits = tryFit(`${currentPageHtml}${combinedHtml}`);

          if (combinedFits) {
            currentPageHtml = `${currentPageHtml}${combinedHtml}`;
            blockIndex += 2;
            continue;
          }

          if (currentPageHtml.length > 0) {
            pages.push(currentPageHtml);
            currentPageHtml = '';
            continue;
          }

          appendBlock(blockHtml);
          appendBlock(nextBlockHtml);
          blockIndex += 2;
          continue;
        }

        appendBlock(blockHtml);
        blockIndex += 1;
      }

      if (currentPageHtml.trim().length > 0) {
        pages.push(currentPageHtml);
      }

      return {
        ...chapter,
        pages: pages.length > 0 ? pages : ['<p>No content available.</p>'],
      };
    });
  }, [chapters, pageSize.height, pageSize.width]);

  const allPages = useMemo<BookPage[]>(() => {
    const flattened = paginatedChapters.flatMap((chapter) =>
      chapter.pages.map((html) => ({
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        html,
      })),
    );

    if (flattened.length > 0) {
      return flattened;
    }

    return [
      {
        chapterId: 'chapter-1',
        chapterTitle: DEFAULT_CHAPTER_TITLE,
        html: '<p>No page found.</p>',
      },
    ];
  }, [paginatedChapters]);

  const chapterBookmarks = useMemo(
    () =>
      paginatedChapters.map((chapter) => ({
        id: chapter.id,
        title: chapter.title,
        pageIndex: allPages.findIndex((page) => page.chapterId === chapter.id),
      })),
    [allPages, paginatedChapters],
  );

  const safePageIndex = Math.min(currentPage, Math.max(allPages.length - 1, 0));
  const activePage = allPages[safePageIndex];
  const totalPages = allPages.length;
  const activeChapterId = activePage?.chapterId ?? '';

  useEffect(() => {
    if (currentPage !== safePageIndex) {
      setCurrentPage(safePageIndex);
    }
  }, [currentPage, safePageIndex]);

  const goToPage = (targetIndex: number) => {
    const bounded = Math.max(0, Math.min(targetIndex, allPages.length - 1));
    if (bounded === currentPage) {
      return;
    }

    setTurnDirection(bounded > currentPage ? 'next' : 'prev');
    setCurrentPage(bounded);
  };

  const goToNextPage = () => goToPage(currentPage + 1);
  const goToPrevPage = () => goToPage(currentPage - 1);

  return (
    <div className="game-rules-page">
      <div className="game-rules-header">
        <h2>Game Rules</h2>
        <p>The official CryptCrawler Version 5 Core Rulebook for rules, creating characters, combat, and more.</p>
      </div>

      <div className="rules-book-shell">
        <aside className="rules-chapters" aria-label="Rulebook chapters">
          <h3>Chapters</h3>
          <div className="rules-chapters-list">
            {chapterBookmarks.map((chapter) => (
              <button
                key={chapter.id}
                type="button"
                className={`rules-chapter-btn ${chapter.id === activeChapterId ? 'active' : ''}`}
                onClick={() => {
                  if (chapter.pageIndex >= 0) {
                    goToPage(chapter.pageIndex);
                  }
                }}
              >
                {chapter.title}
              </button>
            ))}
          </div>
        </aside>

        <section className="rules-book" aria-label="Rulebook page viewer">
          <div className="rules-book-title">
            <span>{activePage?.chapterTitle ?? 'Rules'}</span>
            <span>{`Page ${safePageIndex + 1} of ${totalPages}`}</span>
          </div>

          <div className="rules-page-window" ref={viewportRef}>
            <article
              key={`${activePage?.chapterId ?? 'chapter'}-${safePageIndex}`}
              className={`rules-page ${
                turnDirection === 'none' ? '' : turnDirection === 'next' ? 'turn-next' : 'turn-prev'
              }`}
            >
              <div className="rules-page-content" dangerouslySetInnerHTML={{ __html: activePage?.html ?? '' }} />
            </article>
          </div>

          <div className="rules-book-controls">
            <button type="button" onClick={goToPrevPage} disabled={safePageIndex === 0}>
              Previous Page
            </button>
            <span>{activePage?.chapterTitle ?? ''}</span>
            <button type="button" onClick={goToNextPage} disabled={safePageIndex >= totalPages - 1}>
              Next Page
            </button>
          </div>
        </section>
      </div>

      <div className="rules-page-measure" ref={measureRef} aria-hidden="true" />
    </div>
  );
};

export default GameRulesPage;
