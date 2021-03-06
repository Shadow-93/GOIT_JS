/* eslint-disable no-use-before-define */
import gallery from './gallery.js'; // eslint-disable-line

const refs = {
  galleryRef: document.querySelector('.js-gallery'),
  lightboxRef: document.querySelector('.js-lightbox'),
  lightbox__imageRef: document.querySelector('img.lightbox__image'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  lightbox__content: document.querySelector('div.lightbox__content'),
};

let imageRef = '';
let dataIndex = 0;

gallery.forEach(image => {
  imageRef += `<li class=" gallery__item">
                <a class="gallery__link">
                <img class="gallery__image"
                data-index = ${dataIndex} 
                    data-source="${image.original}"
                    src="${image.preview}" alt="${image.description}">
                </a>
            </li>`;
  dataIndex += 1;
});

refs.galleryRef.insertAdjacentHTML('beforeend', imageRef);
refs.galleryRef.addEventListener('click', onGalleryClick);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.lightbox__content.addEventListener('click', onClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  window.addEventListener(`keydown`, onKeyPress);
  refs.lightboxRef.classList.add('is-open');
  refs.lightbox__imageRef.src = event.target.dataset.source;
  refs.lightbox__imageRef.alt = event.target.alt;
  refs.lightbox__imageRef.dataset.index = event.target.dataset.index;
}

function closeModal() {
  window.removeEventListener(`keydown`, onKeyPress);
  refs.lightboxRef.classList.remove('is-open');
  refs.lightbox__imageRef.src = '';
}

function onClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

const fisrtChild =
  refs.galleryRef.firstElementChild.children[0].children[0].dataset.index;
const lastChild =
  refs.galleryRef.lastElementChild.children[0].children[0].dataset.index;

function arrowRight() {
  if (Number(refs.lightbox__imageRef.dataset.index) >= 0) {
    refs.lightbox__imageRef.dataset.index =
      Number(refs.lightbox__imageRef.dataset.index) + 1;
    toStart();
    refs.lightbox__imageRef.src =
      gallery[Number(refs.lightbox__imageRef.dataset.index)].original;
  }
}

function toStart() {
  if (Number(refs.lightbox__imageRef.dataset.index) > lastChild) {
    refs.lightbox__imageRef.dataset.index = fisrtChild;
    refs.lightbox__imageRef.src =
      gallery[Number(refs.lightbox__imageRef.dataset.index)].original;
  }
}

function arrowLeft() {
  if (Number(refs.lightbox__imageRef.dataset.index) >= 0) {
    refs.lightbox__imageRef.dataset.index =
      Number(refs.lightbox__imageRef.dataset.index) - 1;
    toEnd();
    refs.lightbox__imageRef.src =
      gallery[Number(refs.lightbox__imageRef.dataset.index)].original;
  }
}

function toEnd() {
  if (Number(refs.lightbox__imageRef.dataset.index) < 0) {
    refs.lightbox__imageRef.dataset.index = lastChild;
    refs.lightbox__imageRef.src =
      gallery[Number(refs.lightbox__imageRef.dataset.index)].original;
  }
}

function onKeyPress(event) {
  if (event.code === 'ArrowLeft') {
    arrowLeft();
  }
  if (event.code === 'ArrowRight') {
    arrowRight();
  }
  if (event.code === 'Escape') {
    closeModal();
  }
}
