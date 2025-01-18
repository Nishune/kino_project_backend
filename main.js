import './style.scss';
import './src/javascript/header.js';
import { buildDoc } from './src/javascript/infoModal.js';

if (document.querySelector('.info') || document.querySelector('.info-modal')) {
  buildDoc();
}
