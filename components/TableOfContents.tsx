import React from 'react';
import Link from 'next/link';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  toc: TocItem[];
}

export function TableOfContents({toc}: TableOfContentsProps) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );

  if (items.length <= 1) {
    return null;
  }

  return (
    <nav className="toc">
      <h3>On this page</h3>
      <ul className="flex column">
        {items.map((item) => {
          const href = `#${item.id}`;
          const active =
            typeof window !== 'undefined' && window.location.hash === href;
          return (
            <li
              key={item.title}
              className={[
                active ? 'active' : undefined,
                item.level === 3 ? 'nested' : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <Link href={href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          nav {
            position: sticky;
            top: calc(2rem + var(--top-nav-height));
            max-height: calc(100vh - var(--top-nav-height) - 4rem);
            flex: 0 0 auto;
            align-self: flex-start;
            margin-bottom: 1rem;
            padding: 1rem;
            border-left: 2px solid var(--border-color);
            min-width: 200px;
          }
          h3 {
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary);
            margin: 0 0 1rem;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          li {
            margin: 0.5rem 0;
          }
          li :global(a) {
            text-decoration: none;
            color: var(--text-secondary);
            font-size: 0.875rem;
            display: block;
            padding: 0.25rem 0;
            transition: color 0.2s;
          }
          li :global(a:hover),
          li.active :global(a) {
            color: var(--primary-color);
          }
          li.nested {
            padding-left: 1rem;
          }
          @media (max-width: 1280px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}