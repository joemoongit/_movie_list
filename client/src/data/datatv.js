if (!process.env.url) {
  import { LOCAL } from '../config/config';
}

const tvlists = [
  {
    id: 1,
    name: 'TV Shows Airing Today:',
    url: `${process.env.url || LOCAL}/tv/today`
  },
  {
    id: 2,
    name: 'Latest TV Shows:',
    url: `${process.env.url || LOCAL}/tv/today`,
  },
  {
    id: 3,
    name: 'Popular TV Shows:',
    url: `${process.env.url || LOCAL}/tv/popular`,
  },
  {
    id: 4,
    name: 'Top Rated TV Shows',
    url: `${process.env.url || LOCAL}/tv/top`,
  },
];

export default tvlists;
