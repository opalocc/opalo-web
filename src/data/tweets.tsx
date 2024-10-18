/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Tweet} from '@site/src/components/Tweet';

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};
const TWEETS: TweetItem[] = [
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'daferpi',
    name: 'Abel Fernandez',
    date: 'Oct 26, 2021',
    content: (
      <>
        🌟 I love saying goodbye to subscription fees! This open-source app lets me use my own cloud for free, giving me unlimited space for my knowledge base! #OpenSource #KnowledgeManagement
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'daferpi',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'kmruiz',
    name: 'Kevin Mas Ruiz',
    date: 'Feb 21, 2024',
    content: (
      <>
        📚 This app adapts to my workflow! From notes to full-fledged knowledge bases, I can customize it to fit my needs perfectly. #NotionAlternative #ObsidianCompanion
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'kmruiz',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'aperezm85',
    name: 'Alex Perez',
    date: 'May 17, 2024',
    content: (
      <>
        🔍 Searching for the perfect note-taking solution? I found it! This app empowers me to capture and retrieve knowledge effortlessly. #NoteTaking #KnowledgeManagement
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'aperezm85',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'CrisMoreiras',
    name: 'Cris Moreiras',
    date: 'May 4, 2024',
    content: (
      <>
        💻 My data, my rules! With this app, I choose where to store my knowledge. It feels great to have my own cloud without sacrificing any features. #DataPrivacy #SelfHosted
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'CrisMoreiras',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'aleixmorgadas',
    name: 'Aleix Morgadas',
    date: 'May 28, 2024',
    content: (
      <>
        🌍 I love the flexibility of using my own cloud storage! This app lets me keep my knowledge organized and accessible, no matter where I am. #CloudStorage #KnowledgeManagement
        </>
    ),
    showOnHomepage: true,
    githubUsername: 'aleixmorgadas',
  },
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'miguelarian',
    name: 'Miguel Vela',
    date: 'May 17, 2024',
    content: (
      <>
        🥳 I can finally organize my thoughts without worrying about data locks! This open-source app is everything I needed for my creative projects. #OpenSource #CreativeFreedom
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'miguelarian',
  },
];

export default TWEETS;