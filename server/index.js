const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const movies = require('./routes/movies');
const tv = require('./routes/tv');

app.use('/movies', movies);
app.use('/tv', tv);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
