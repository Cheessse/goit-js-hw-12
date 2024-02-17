import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchArticles } from './js/pixabay-api.js';
import { hitsTemplate } from './js/render-functions.js';

const refs = {
  formElem: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

// function showLoader() {
//   loader.classList.remove('hidden');
// }

// function hideLoader() {
//   loader.classList.add('hidden');
// }

refs.formElem.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const query = e.target.elements.input.value.trim();

  if (!query) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  const data = await fetchArticles(query);

  refs.gallery.innerHTML = '';

  renderMarkups(data.hits);

  e.target.reset();
}

function renderMarkups(hits) {
  const markup = hitsTemplate(hits);

  refs.gallery.insertAdjacentHTML('beforeend', markup);
  const lightbox = new SimpleLightbox('.gallery a', options);
  lightbox.refresh();
}

const options = {
  captions: true,
  captionType: 'attr',
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};
