import './sass/main.scss';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import decor from './images/demo.jpg';

const refs = {
  gallery: document.querySelector('.container .list'),
};

console.log(refs.gallery);

const instance = basicLightbox.create(`<img src="${decor}" width="800" height="600">`);

const openModal = e => {
  const { nodeName } = e.target;

  if (nodeName !== 'IMG') return;
  console.log('object', instance);
  instance.show();
};

refs.gallery.addEventListener('click', openModal);