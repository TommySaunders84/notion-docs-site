import * as React from 'react';

export function SecurityWarning({ children }) {
  return (
    <div className="security-warning">
      <div className="icon">⚠️</div>
      <div className="content">
        <strong>Security Notice</strong>
        <div>{children}</div>
      </div>
      <style jsx>{`
        .security-warning {
          display: flex;
          gap: 1rem;
          background: #fff3cd;
          border: 1px solid #ffeeba;
          border-radius: 6px;
          padding: 1rem;
          margin: 1.5rem 0;
        }
        .icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        .content {
          flex: 1;
        }
        .content strong {
          display: block;
          margin-bottom: 0.25rem;
          color: #856404;
        }
        .content :global(p) {
          margin: 0;
          color: #856404;
        }
        [data-theme='dark'] .security-warning {
          background: #78350f;
          border-color: #92400e;
        }
        [data-theme='dark'] .content strong,
        [data-theme='dark'] .content :global(p) {
          color: #fef3c7;
        }
      `}</style>
    </div>
  );
}