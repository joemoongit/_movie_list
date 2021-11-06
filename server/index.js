const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}

const movies = require('./routes/movies');
const tv = require('./routes/tv');

app.use('/movies', movies);
app.use('/tv', tv);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
