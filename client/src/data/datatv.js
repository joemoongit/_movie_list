const tvlists = [
  {
    id: 1,
    name: 'TV Shows Airing Today:',
    url: `https://api.themoviedb.org/3/tv/airing_today?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`
  },
  {
    id: 2,
    name: 'Latest TV Shows:',
    url: `
    https://api.themoviedb.org/3/tv/on_the_air?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`
  },
  {
    id: 3,
    name: 'Popular TV Shows:',
    url: `https://api.themoviedb.org/3/tv/popular?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 4,
    name: 'Top Rated TV Shows',
    url: `https://api.themoviedb.org/3/tv/top_rated?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`
  },
];

export default tvlists;
