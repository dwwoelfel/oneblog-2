// @flow

import React from 'react';
import NextHead from 'next/head';
import config from './config';

function Head() {
  return (
    <NextHead>
      <title>{config.title}</title>
      {config.description ? (
        <meta
          key="description"
          name="description"
          content={config.description}
        />
      ) : null}
      {config.description ? (
        <meta
          key="og:description"
          name="og:description"
          content={config.description}
        />
      ) : null}
      <meta charSet="utf-8" />
      <meta key="og:title" property="og:title" content={config.title} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed"
        href="/feed.rss"
      />
      <link
        rel="alternate"
        href="/feed.atom"
        title="Atom feed"
        type="application/atom+xml"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
    </NextHead>
  );
}

export default Head;
