require('dotenv').config();

module.exports = [
  {
    id: 1,
    name: '/today',
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`,
  },
  {
    id: 2,
    name: '/week',
    url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`,
  },
  {
    id: 3,
    name: '/popular',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
  {
    id: 4,
    name: '/top',
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
  {
    id: 5,
    name: '/now',
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
  {
    id: 6,
    name: '/upcoming',
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  },
  {
    id: 7,
    name: '/trending',
    url: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
  },
];
