// ========================================
// Imports
//=========================================

import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import { marked } from 'marked';
import { readJsonFile } from './utils/filehandler.js';
import { getMenuLink } from './utils/menuLinks.js';

// ========================================
// Setting up the server
//=========================================
const app = express();

// ========================================
// EJS-Configuration
// ========================================

app.set('view engine', 'ejs');
app.set('views', './src/views/pages');
app.use(expressEjsLayouts);
app.set('layout', '../template');

// ==========================================
// Middleware
// ==========================================

// =====================
// Statoc files middleware
// =====================

app.use(express.static('dist'));

// =====================
// Header & Footer Middleware, this is used here since header and footer are on all sites of the webpage.
// =====================

app.use(async (req, res, next) => {
  const headerData = await readJsonFile('./src/server/data/header.json');
  const footerData = await readJsonFile('./src/server/data/footer.json');
  res.locals.header = headerData.header;
  res.locals.getMenuLink = getMenuLink;
  res.locals.footer = footerData.footer;
  next();
});

//==========================================
// ROUTES
//==========================================

//=====================
// HOMEPAGE ROUTE
//=====================

app.get('/', async (req, res) => {
  const response = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
  const moviesResponse = await response.json();
  const infoModalData = await readJsonFile('./src/server/data/infoModal.json');
  const latestMovies = moviesResponse.data
    .sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)) //Convert the movies by pubbvlished dates to date objects with newst first.
    .slice(0, 4); // Only takes the 4 newst movies.

  res.render('index', {
    infoData: infoModalData,
    latestMovies: latestMovies,
  });
});

//=====================
// ABOUT PAGE ROUTE
//=====================

app.get('/about', async (req, res) => {
  const aboutData = await readJsonFile('./src/server/data/about.json');
  const infoModalData = await readJsonFile('./src/server/data/infoModal.json');
  res.render('about', {
    mainHeadline: aboutData.aboutUs,
    headline: aboutData.headline,
    aboutPage: aboutData.aboutPage,
    faqData: infoModalData.sections[1].modal,
    buttons: infoModalData.buttons,
  });
});

//=====================
// KIDS PAGE ROUTE
//=====================

app.get('/kids', async (req, res) => {
  const kidsData = await readJsonFile('./src/server/data/kids.json');
  res.render('kids', {
    contentData: kidsData.content,
    eventData: kidsData.events,
  });
});

//=====================
// MOVIES PAGE ROUTE
//=====================

app.get('/movies', async (req, res) => {
  const response = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
  const moviesResponse = await response.json();
  const moviesData = await readJsonFile('./src/server/data/movies.json');

  res.render('movies', {
    movies: moviesResponse.data,
    moviesText: moviesData.movies,
  });
});

//=====================
// INDIVIDUAL MOVIES PAGE ROUTE
//=====================

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`);
  const moviesData = await readJsonFile('./src/server/data/movies.json');
  const errorData = await readJsonFile('./src/server/data/error.json');

  if (!response.ok) {
    return res.status(404).render('error', {
      title: errorData.error.movieNotFound.title,
      message: errorData.error.movieNotFound.message,
      backLink: errorData.error.pageNotFound.backLink,
    });
  }

  const movieResponse = await response.json();
  const movie = movieResponse.data.attributes;

  if (movie.intro) {
    movie.introHtml = marked(movie.intro);
  }
  res.render('individualMovie', {
    movie,
    moviesText: moviesData.movies,
  });
});

// ===================
// ERROR HANDLING MIDDLEWARE
//====================

app.use(async (req, res) => {
  const errorData = await readJsonFile('./src/server/data/error.json');
  res.status(404).render('error', {
    title: errorData.error.pageNotFound.title,
    message: errorData.error.pageNotFound.message,
    backLink: errorData.error.pageNotFound.backLink,
  });
});

export default app;
