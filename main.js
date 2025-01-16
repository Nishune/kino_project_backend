import './style.scss';
import './src/javascript/header.js';
import { loadkids } from './src/javascript/kids.js';
import { buildDoc } from './src/javascript/infoModal.js';
import { updateDomWithAboutJson } from './src/javascript/about.js';

const checkKids = document.querySelector('.article-kids');

if (checkKids) {
  loadkids();
}

// const checkMovies = document.querySelector('.movie-container');

// if (checkMovies) {
//   loadMovieContent();
// }
if (document.querySelector('.info') || document.querySelector('.info-modal')) {
  buildDoc();
}
