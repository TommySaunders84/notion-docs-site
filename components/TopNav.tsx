import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface TopNavProps {
  children?: React.ReactNode;
}

export function TopNav({children}: TopNavProps) {
  const { theme, setTheme } = useTheme();
  
  return (
    <nav>
      <div className="nav-container">
        <Link href="/" className="logo">
          <span>📚</span> Notion MCP Docs
        </Link>
        <section className="nav-links">
          <Link href="/docs">Documentation</Link>
          <Link href="/docs/api-reference">API</Link>
          <Link href="/docs/examples">Examples</Link>
          <a 
            href="https://github.com/TommySaunders84/notion-docs-site" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </section>
        <section className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          {children}
        </section>
      </div>
      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 100;
            background: var(--bg-primary);
            border-bottom: 1px solid var(--border-color);
            backdrop-filter: blur(8px);
            background: rgba(var(--bg-primary-rgb), 0.95);
          }
          .nav-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            padding: 1rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
          }
          :global(.logo) {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            font-size: 1.25rem;
            text-decoration: none;
            color: var(--text-primary);
          }
          .logo span {
            font-size: 1.5rem;
          }
          .nav-links {
            display: flex;
            gap: 2rem;
            flex: 1;
          }
          .nav-links :global(a) {
            text-decoration: none;
            color: var(--text-secondary);
            font-weight: 500;
            transition: color 0.2s;
          }
          .nav-links :global(a:hover) {
            color: var(--primary-color);
          }
          .nav-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
          }
          .theme-toggle {
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            padding: 0.5rem;
            cursor: pointer;
            font-size: 1.25rem;
            line-height: 1;
            transition: all 0.2s;
          }
          .theme-toggle:hover {
            background: var(--bg-secondary);
          }
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}