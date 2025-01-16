// Import express to create server
import express from 'express';
import ejs from 'ejs';
import expressEjsLayouts from 'express-ejs-layouts';
import { marked } from 'marked';

// creates new server
const app = express();

// EJS-konfiguration
app.set('view engine', 'ejs');
app.set('views', './src/views/pages'); // where EJS files exists
app.use(expressEjsLayouts); // Uses express layours to use layout
app.set('layout', '../template'); // the template

// static files from the dist folder (after npm run build is done / made)
app.use(express.static('dist'));

//Data for the header menu
const headerData = {
  header: {
    mainHeader: {
      logo: '/img/kinoLogo.png',
      brandName: 'KINO BIO',
      alt: 'Picture for the brands logotype',
    },
    hamburgerMenu: {
      menuLogo: '/img/kinoLogoOverlay.png',
      menuLinks: [{ text: 'Alla filmer' }, { text: 'Barnkalas' }, { text: 'Om oss' }],
    },
  },
};

function getMenuLink(text) {
  switch (text) {
    case 'Alla filmer':
      return '/movies';
    case 'Om oss':
      return '/about';
    case 'Barnkalas':
      return '/kids';
    default:
      return '/';
  }
}

app.use((req, res, next) => {
  res.locals.header = headerData.header;
  res.locals.getMenuLink = getMenuLink;
  next();
});
// Routes for the differens ejs sites
app.get('/', (req, res) => {
  res.render('index'); // Renderar index.ejs
});

app.get('/about', (req, res) => {
  res.render('about'); // Renderar about.ejs
});

app.get('/kids', (req, res) => {
  res.render('kids'); // Renderar kids.ejs
});

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

//Route for wront page (404)
app.use((req, res) => {
  res.status(404).render('error', {
    title: '404 - Sidan kunde inte hittas',
    message: 'Sidan kunde inte hittas',
  });
});

// Starts the server on port 5080
app.listen(5080, () => {
  console.log('Server running on port 5080');
});
