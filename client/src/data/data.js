import { LOCAL } from '../config/config';

export const lists = [
  {
    id: 1,
    name: 'Trending today:',
    url: `${process.env.url || LOCAL}/movies/today`,
  },
  {
    id: 2,
    name: 'Trending this week:',
    url: `${process.env.url || LOCAL}/movies/week`,
  },
  {
    id: 3,
    name: 'Popular movies:',
    url: `${process.env.url || LOCAL}/movies/popular`,
  },
  {
    id: 4,
    name: 'Top rated:',
    url: `${process.env.url || LOCAL}/movies/top`,
  },
  {
    id: 5,
    name: 'Now playing:',
    url: `${process.env.url || LOCAL}/movies/now`,
  },
  {
    id: 6,
    name: 'Upcoming:',
    url: `${process.env.url || LOCAL}/movies/upcoming`,
  },
];

export default lists;