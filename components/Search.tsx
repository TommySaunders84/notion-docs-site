import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

// Simple search component - can be enhanced with Algolia or similar
export function Search() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  // Simple search index - in production, use a proper search service
  const searchIndex = [
    { title: 'Setup Guide', path: '/docs/getting-started/setup-guide' },
    { title: 'Claude Desktop Configuration', path: '/docs/configuration/claude-desktop' },
    { title: 'Environment Variables', path: '/docs/configuration/environment' },
    { title: 'OAuth Setup', path: '/docs/configuration/oauth-setup' },
    { title: 'Auth Server API', path: '/docs/api-reference/auth-server' },
    { title: 'Migration Guide', path: '/docs/guides/migration' },
    { title: 'MCP Reference', path: '/docs/guides/mcp-reference' },
  ];
  
  const results = query.length > 2
    ? searchIndex.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  const handleSelect = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setQuery('');
  };
  
  return (
    <div className="search-container">
      <button 
        className="search-trigger"
        onClick={() => {
          setIsOpen(true);
          inputRef.current?.focus();
        }}
      >
        🔍 Search <kbd>⌘K</kbd>
      </button>
      
      {isOpen && (
        <div className="search-modal" onClick={() => setIsOpen(false)}>
          <div className="search-box" onClick={(e) => e.stopPropagation()}>
            <input
              ref={inputRef}
              type="search"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            
            {results.length > 0 && (
              <div className="search-results">
                {results.map((result) => (
                  <button
                    key={result.path}
                    className="search-result"
                    onClick={() => handleSelect(result.path)}
                  >
                    {result.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      <style jsx>{`
        .search-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        .search-trigger kbd {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 3px;
          padding: 0.125rem 0.25rem;
          font-size: 0.75rem;
        }
        .search-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 10vh;
          z-index: 1000;
        }
        .search-box {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .search-input {
          width: 100%;
          padding: 1rem;
          border: none;
          background: transparent;
          font-size: 1rem;
          outline: none;
          color: var(--text-primary);
        }
        .search-results {
          border-top: 1px solid var(--border-color);
          max-height: 400px;
          overflow-y: auto;
        }
        .search-result {
          display: block;
          width: 100%;
          padding: 0.75rem 1rem;
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          transition: background-color 0.2s;
        }
        .search-result:hover {
          background: var(--bg-secondary);
        }
      `}</style>
    </div>
  );
}