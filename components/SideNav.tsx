import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Getting Started',
    links: [
      {href: '/docs', children: 'Overview'},
      {href: '/docs/getting-started/setup-guide', children: 'Setup Guide'},
      {href: '/docs/getting-started/prerequisites', children: 'Prerequisites'},
      {href: '/docs/getting-started/quick-start', children: 'Quick Start'},
    ],
  },
  {
    title: 'Configuration',
    links: [
      {href: '/docs/configuration', children: 'Overview'},
      {href: '/docs/configuration/claude-desktop', children: 'Claude Desktop'},
      {href: '/docs/configuration/environment', children: 'Environment Variables'},
      {href: '/docs/configuration/oauth-setup', children: 'OAuth Setup'},
    ],
  },
  {
    title: 'API Reference',
    links: [
      {href: '/docs/api-reference', children: 'Overview'},
      {href: '/docs/api-reference/auth-server', children: 'Auth Server'},
      {href: '/docs/api-reference/client-sdk', children: 'Client SDK'},
      {href: '/docs/api-reference/functions', children: 'Notion Functions'},
    ],
  },
  {
    title: 'Guides',
    links: [
      {href: '/docs/guides', children: 'Overview'},
      {href: '/docs/guides/migration', children: 'Migration Guide'},
      {href: '/docs/guides/mcp-reference', children: 'MCP Reference'},
      {href: '/docs/guides/best-practices', children: 'Best Practices'},
    ],
  },
  {
    title: 'Examples',
    links: [
      {href: '/docs/examples', children: 'Overview'},
      {href: '/docs/examples/test-scripts', children: 'Test Scripts'},
      {href: '/docs/examples/integration-patterns', children: 'Integration Patterns'},
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link href={link.href}>{link.children}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2rem;
            border-right: 1px solid var(--border-color);
            background: var(--bg-secondary);
            min-width: 250px;
          }
          h3 {
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary);
            margin: 1.5rem 0 0.5rem;
          }
          h3:first-child {
            margin-top: 0;
          }
          ul {
            padding: 0;
            margin: 0;
            list-style: none;
          }
          li {
            margin: 0.25rem 0;
          }
          li :global(a) {
            display: block;
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            text-decoration: none;
            color: var(--text-primary);
            transition: background-color 0.2s;
          }
          li :global(a:hover) {
            background-color: var(--bg-primary);
          }
          li.active :global(a) {
            background-color: var(--primary-color);
            color: white;
          }
        `}
      </style>
    </nav>
  );
}