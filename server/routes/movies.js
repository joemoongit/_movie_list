const router = require('express').Router();
const axios = require('axios');
const endpoints = require('../../database/data');

endpoints.forEach((endpoint) => {
  router.route(endpoint.name)
    .get((req, res) => {
      const options = {
        method: 'get',
        url: endpoint.url,
      };
      axios(options)
        .then((response) => {
          return res.status(200).send(response.data.results);
        })
        .catch((err) => {
          return console.error(err);
        });
    });
});

router.get('/rec/:id', (req, res) => {
  const options = {
    method: 'get',
    url: `https://api.themoviedb.org/3/movie/${req.params.id}/recommendations?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  };
  axios(options)
    .then((response) => {
      return res.status(200).send(response.data.results);
    })
    .catch((err) => {
      console.error(err);
    })
});

router.get('/sim/:id', (req, res) => {
  const options = {
    method: 'get',
    url: `https://api.themoviedb.org/3/movie/${req.params.id}/similar?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&page=1`,
  };
  axios(options)
    .then((response) => {
      return res.status(200).send(response.data.results);
    })
    .catch((err) => {
      console.error(err);
    })
});

router.get('/search', (req, res) => {
  const options = {
    method: 'get',
    url: `https://api.themoviedb.org/3/search/movie?api_key=ddf7d5d81b6abe118e7acc02334c1619&language=en-US&query=${req.query.query}&page=1&include_adult=false`,
  };
  axios(options)
    .then((response) => {
      return res.status(200).send(response.data.results);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
