import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import { SideNav, TableOfContents, TopNav, Search } from '../components';

import 'prismjs';
// Import other Prism themes here
import 'prismjs/components/prism-bash.min';
import 'prismjs/themes/prism-tomorrow.css';

import '../public/globals.css'

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

const TITLE = 'Notion MCP Documentation';
const DESCRIPTION = 'Complete documentation for Notion Model Context Protocol integrations with Claude Desktop';

interface Heading {
  id: string;
  title: string;
  level: number;
}

function collectHeadings(node: any, sections: Heading[] = []): Heading[] {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export type MyAppProps = MarkdocNextJsPageProps

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = `${markdoc.frontmatter.title} | ${TITLE}`;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  const isDocsPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/docs');

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav>
        <Search />
      </TopNav>
      {isDocsPage ? (
        <div className="page docs-layout">
          <SideNav />
          <main className="flex column">
            <Component {...pageProps} />
          </main>
          <TableOfContents toc={toc} />
        </div>
      ) : (
        <div className="page">
          <main className="landing">
            <Component {...pageProps} />
          </main>
        </div>
      )}
      <style jsx>
        {`
          .page {
            position: fixed; 
            top: var(--top-nav-height);
            display: flex;
            width: 100vw;
            height: calc(100vh - var(--top-nav-height));
            flex-grow: 1;
          }
          .docs-layout {
            display: grid;
            grid-template-columns: auto 1fr auto;
          }
          main {
            overflow: auto;
            flex-grow: 1;
            font-size: 16px;
            padding: 2rem;
            max-width: 100%;
          }
          main.landing {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
          }
          @media (max-width: 1280px) {
            .docs-layout {
              grid-template-columns: auto 1fr;
            }
          }
          @media (max-width: 768px) {
            .docs-layout {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </ThemeProvider>
  );
}
