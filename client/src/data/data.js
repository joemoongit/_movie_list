// import { API_KEY } from '../config/config';

const lists = [
  {
    id: 1,
    name: 'Trending today:',
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=ddf7d5d81b6abe118e7acc02334c1619`,
  },
  {
    id: 2,
    name: 'Trending this week:',
    url: `https://api.themoviedb.org/3/trending/movie/week?api_key=ddf7d5d81b6abe118e7acc02334c1619`,
  },
  {
    id: 3,
    name: 'Popular movies:',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 4,
    name: 'Top rated:',
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 5,
    name: 'Now playing:',
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  {
    id: 6,
    name: 'Upcoming:',
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  },
  // {
  //   id: 9,
  //   name: 'Get Latest:',
  //   url: `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.API_KEY}&language=en-US`,
  // },
];

export default lists;
