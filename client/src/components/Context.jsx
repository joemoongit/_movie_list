import React, { createContext } from 'react';

export const SearchContext = createContext({
  query: '',
});

export const WatchContext = createContext({
  watched: false,
  watch: false,
});
