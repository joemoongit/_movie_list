const mongoose = require('mongoose');
const { Schema } = mongoose;

const key = process.env.MONGOURI;
if (key) {
  mongoose.connect(key, {
    useNewUrlParser: true,
  })
    .then(() => console.log('Connected to MongoDB Atlas!'))
    .catch((err) => console.error('Error connecting to MongoDB Atlas', err));
} else {
  mongoose.connect('mongodb://localhost/movies', {
    useNewUrlParser: true,
  })
    .then(() => console.log('Connected to MongoDB local'))
    .catch((err) => console.error('Error connecting to MongoDB', err));
}

let movieSchema = mongoose.Schema({
  name: String,
  movie_id: Number,
  image: String,
});

let Movie = mongoose.model('Movie', movieSchema);

let create = (json, callback) => {

}

let read = () => {

};

let update = () => {

};

let del = () => {

};

module.exports = {
  create,
  read,
  update,
  del,
};
