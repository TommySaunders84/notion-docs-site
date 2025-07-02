import Prism from 'prismjs';
import React from 'react';

// Import additional languages
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/components/prism-yaml.min';
import 'prismjs/components/prism-toml.min';

interface CodeBlockProps {
  children: string;
  'data-language': string;
}

export function CodeBlock({children, 'data-language': language}: CodeBlockProps) {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="language-label">{language}</span>
        <button 
          className="copy-button"
          onClick={() => navigator.clipboard.writeText(children)}
        >
          Copy
        </button>
      </div>
      <pre className={`language-${language}`}>
        <code ref={ref} className={`language-${language}`}>
          {children}
        </code>
      </pre>
      <style jsx>
        {`
          .code-block {
            position: relative;
            margin: 1.5rem 0;
          }
          .code-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--bg-code);
            padding: 0.5rem 1rem;
            border-radius: 6px 6px 0 0;
            border: 1px solid var(--border-color);
            border-bottom: none;
          }
          .language-label {
            font-size: 0.875rem;
            color: var(--text-secondary);
            text-transform: uppercase;
          }
          .copy-button {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            cursor: pointer;
            transition: opacity 0.2s;
          }
          .copy-button:hover {
            opacity: 0.8;
          }
          .code-block pre {
            margin: 0;
            border-radius: 0 0 6px 6px;
            border: 1px solid var(--border-color);
          }
        `}
      </style>
    </div>
  );
}