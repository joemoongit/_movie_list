require('dotenv').config();

module.exports = [
  {
    id: 1,
    name: '/today',
    url: `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
  {
    id: 2,
    name: '/latest',
    url: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
  {
    id: 3,
    name: '/popular',
    url: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
  {
    id: 4,
    name: '/top',
    url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
];
