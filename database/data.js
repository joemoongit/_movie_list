module.exports = [
  {
    id: 1,
    name: "/today",
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=ddf7d5d81b6abe118e7acc02334c1619`,
  },
  {
    id: 2,
    name: "/week",
    url: `https://api.themoviedb.org/3/trending/movie/week?api_key=ddf7d5d81b6abe118e7acc02334c1619`,
  },
  {
    id: 3,
    name: "/popular",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 4,
    name: "/top",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 5,
    name: "/now",
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 6,
    name: "/upcoming",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
];
