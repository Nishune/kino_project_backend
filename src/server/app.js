// ===================
// Imports
//====================

import express from 'express';
import ejs from 'ejs';
import expressEjsLayouts from 'express-ejs-layouts';
import { marked } from 'marked';
import { readJsonFile } from './utils/filehandler.js';
import { getMenuLink } from './utils/menuLinks.js';

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

app.use(express.static('dist'));

// Header & Footer Middleware, this is used here since header and footer are on all sites of the webpage.
app.use(async (req, res, next) => {
  const headerData = await readJsonFile('./src/server/data/header.json');
  const footerData = await readJsonFile('./src/server/data/footer.json');
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
  const infoModalData = await readJsonFile('./src/server/data/infoModal.json');
  const latestMovies = moviesResponse.data
    .sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt))
    .slice(0, 4);

  res.render('index', {
    infoData: infoModalData,
    latestMovies: latestMovies,
  });
});

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

app.get('/kids', async (req, res) => {
  const kidsData = await readJsonFile('./src/server/data/kids.json');
  res.render('kids', {
    contentData: kidsData.content,
    eventData: kidsData.events,
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
