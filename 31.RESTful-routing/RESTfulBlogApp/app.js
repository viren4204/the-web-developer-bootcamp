/* eslint-disable no-console */
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Configures the Express app.
mongoose.connect('mongodb://localhost:27017/restful_blog_app', { useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Configures Mongoose and model.
const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now },
});
const Blog = mongoose.model('Blog', blogSchema);

// Sets the RESTful routes.

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log('Error!');
    } else {
      res.render('index', { blogs });
    }
  });
});

app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Server is running!');
});
