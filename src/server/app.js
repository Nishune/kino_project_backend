// ===================
// Imports
//====================
import express from 'express';
import ejs from 'ejs';
import expressEjsLayouts from 'express-ejs-layouts';
import { marked } from 'marked';
import { headerData, getMenuLink } from './data/headerData.js';
import { footerData } from './data/footerData.js';
import { barnkalasData } from './data/kidsData.js';
import { aboutData } from './data/aboutData.js';
import { infoModalData } from './data/infoModalData.js';
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

// Header & Footer Middleware, this is used here since header and footer are on all sites of the webpage.
app.use((req, res, next) => {
  res.locals.header = headerData.header;
  res.locals.getMenuLink = getMenuLink;
  res.locals.footer = footerData.footer;
  next();
});

//=====================
// ROUTES
//=====================
app.get('/', async (req, res) => {
  const response = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
  const moviesResponse = await response.json();

  const latestMovies = moviesResponse.data
    .sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt))
    .slice(0, 4);

  res.render('index', {
    infoData: infoModalData,
    latestMovies: latestMovies,
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    mainHeadline: aboutData.aboutUs,
    headline: aboutData.headline,
    aboutPage: aboutData.aboutPage,
    faqData: infoModalData.sections[1].modal,
    buttons: infoModalData.buttons,
  });
});

app.get('/kids', (req, res) => {
  res.render('kids', {
    contentData: barnkalasData.content,
    eventData: barnkalasData.events,
  });
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

  if (!response.ok) {
    return res.status(404).render('error', {
      title: '404 - Filmen kunde inte hittas',
      message: 'Filmen du sökte efter finns inte.',
    });
  }

  const movieResponse = await response.json();

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

export default app;
