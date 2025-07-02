import React from 'react';

interface HeadingProps {
  id?: string;
  level?: number;
  children?: React.ReactNode;
  className?: string;
}

export function Heading({id = '', level = 1, children, className}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  return (
    <>
      <Tag
        id={id}
        className={['heading', className].filter(Boolean).join(' ')}
      >
        {children}
        {id && (
          <a href={`#${id}`} className="anchor" aria-label="Permalink">
            #
          </a>
        )}
      </Tag>
      <style jsx>{`
        .heading {
          position: relative;
        }
        .anchor {
          position: absolute;
          left: -1.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .heading:hover .anchor {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .anchor {
            display: none;
          }
        }
      `}</style>
    </>
  );
}