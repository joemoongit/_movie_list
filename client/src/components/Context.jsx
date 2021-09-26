import React, { createContext } from 'react';

export const SearchContext = createContext({
  query: '',
});

export const MenuContext = createContext({
  watched: false,
  watch: false,
  rec: false,
  sim: false,
  movie: {},
  tv: false,
});

