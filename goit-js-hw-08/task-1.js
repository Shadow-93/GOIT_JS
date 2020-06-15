import gallery from './gallery.js'; // eslint-disable-line

const refs = {
  galleryRef: document.querySelector('.js-gallery'),
  lightboxRef: document.querySelector('.js-lightbox'),
  lightbox__imageRef: document.querySelector('img.lightbox__image'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  lightbox__content: document.querySelector('div.lightbox__content'),
};

let imageRef = '';

gallery.forEach(image => {
  imageRef += `<li class=" gallery__item">
                <a class="gallery__link">
                <img class="gallery__image" 
                    data-source="${image.original}"
                    src="${image.preview}" alt="${image.description}">
                </a>
            </li>`;
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

  window.addEventListener(`keydown`, onEscape);
  refs.lightboxRef.classList.add('is-open');
  refs.lightbox__imageRef.src = event.target.dataset.source;
  refs.lightbox__imageRef.alt = event.target.alt;
}

function closeModal() {
  window.removeEventListener(`keydown`, onEscape);
  refs.lightboxRef.classList.remove('is-open');
  refs.lightbox__imageRef.src = '';
}

function onClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function onEscape(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
