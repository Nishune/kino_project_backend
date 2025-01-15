// Import express to create server
import express from 'express';
import ejs from 'ejs';
import expressEjsLayouts from 'express-ejs-layouts';

// creates new server
const app = express();

// EJS-konfiguration
app.set('view engine', 'ejs');
app.set('views', './src/views/pages'); // where EJS files exists
app.use(expressEjsLayouts); // Uses express layours to use layout
app.set('layout', '../template'); // the template

// static files from the dist folder (after npm run build is done / made)
app.use(express.static('dist'));

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

// Starts the server on port 5080
app.listen(5080, () => {
  console.log('Server running on port 5080');
});
