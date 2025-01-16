// ===================
// Imports
//====================
import express from 'express';
import ejs from 'ejs';
import expressEjsLayouts from 'express-ejs-layouts';
import { marked } from 'marked';
import { headerData, getMenuLink } from './data/headerData.js';

// ===================
// Setting up the server
//====================
const app = express();

// ===================
// EJS-Configuration
// ===================

app.set('view engine', 'ejs');
app.set('views', './src/views/pages');
app.use(expressEjsLayouts);
app.set('layout', '../template');

// =====================
// Middleware
// =====================

//Static files middleware when using npm run build (vite)
app.use(express.static('dist'));

// Header Middleware
app.use((req, res, next) => {
  res.locals.header = headerData.header;
  res.locals.getMenuLink = getMenuLink;
  next();
});

//=====================
// ROUTES
//=====================
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/kids', (req, res) => {
  res.render('kids');
});
// Movie routes
app.get('/movies', async (req, res) => {
  const response = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
  const moviesResponse = await response.json();

  res.render('movies', { movies: moviesResponse.data });
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`);
  const movieResponse = await response.json();
  console.log('API reponse: ', movieResponse);

  const movie = movieResponse.data.attributes;
  if (movie.intro) {
    movie.introHtml = marked(movie.intro);
  }
  res.render('individualMovie', { movie });
});

// ===================
// ERROR HANDLING
//====================
app.use((req, res) => {
  res.status(404).render('error', {
    title: '404 - Sidan kunde inte hittas',
    message: 'Sidan kunde inte hittas',
  });
});

// ==================
// Starting the server
// ==================
app.listen(5080, () => {
  console.log('Server running on port 5080');
});
