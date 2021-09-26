module.exports = [
  {
    id: 1,
    name: '/today',
    url: `https://api.themoviedb.org/3/tv/airing_today?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 2,
    name: '/latest',
    url: `https://api.themoviedb.org/3/tv/on_the_air?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 3,
    name: '/popular',
    url: `https://api.themoviedb.org/3/tv/popular?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 4,
    name: '/top',
    url: `https://api.themoviedb.org/3/tv/top_rated?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  }
]
