import { API_KEY } from '../config/config';

const lists = [
  {
    id: 1,
    name: 'Trending today:',
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  },
  {
    id: 2,
    name: 'Trending this week:',
    url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  },
  {
    id: 3,
    name: 'Popular movies:',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    id: 4,
    name: 'Top rated:',
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
];

export default lists;
