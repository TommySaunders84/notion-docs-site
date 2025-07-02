import * as React from 'react';

export function Callout({ title, type = 'info', children }) {
  const colors = {
    info: 'callout-info',
    success: 'callout-success',
    warning: 'callout-warning',
    error: 'callout-error',
  };

  return (
    <div className={`callout ${colors[type]}`}>
      {title && <strong>{title}</strong>}
      <div>{children}</div>
      <style jsx>
        {`
          .callout {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 6px;
            border: 1px solid;
          }
          .callout strong {
            margin-bottom: 0.5rem;
          }
          .callout :global(p) {
            margin: 0;
          }
          .callout-info {
            background: #eff6ff;
            border-color: #3b82f6;
            color: #1e40af;
          }
          .callout-success {
            background: #f0fdf4;
            border-color: #10b981;
            color: #065f46;
          }
          .callout-warning {
            background: #fffbeb;
            border-color: #f59e0b;
            color: #92400e;
          }
          .callout-error {
            background: #fef2f2;
            border-color: #ef4444;
            color: #991b1b;
          }
          [data-theme='dark'] .callout-info {
            background: #1e3a8a;
            border-color: #3b82f6;
            color: #dbeafe;
          }
          [data-theme='dark'] .callout-success {
            background: #064e3b;
            border-color: #10b981;
            color: #d1fae5;
          }
          [data-theme='dark'] .callout-warning {
            background: #78350f;
            border-color: #f59e0b;
            color: #fef3c7;
          }
          [data-theme='dark'] .callout-error {
            background: #7f1d1d;
            border-color: #ef4444;
            color: #fee2e2;
          }
        `}
      </style>
    </div>
  );
}