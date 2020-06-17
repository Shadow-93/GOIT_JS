import gallery from './gallery.js'; // eslint-disable-line

const refs = {
  galleryRef: document.querySelector('.js-gallery'),
  lightboxRef: document.querySelector('.js-lightbox'),
  lightbox__imageRef: document.querySelector('img.lightbox__image'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  lightbox__content: document.querySelector('div.lightbox__content'),
};

console.dir(refs.lightbox__imageRef);
console.dir(refs.galleryRef);

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

function onKeyPress(event) {
  if (event.code === 'ArrowLeft') {
    if (Number(refs.lightbox__imageRef.dataset.index) >= 0) {
      refs.lightbox__imageRef.dataset.index =
        Number(refs.lightbox__imageRef.dataset.index) - 1;
      if (Number(refs.lightbox__imageRef.dataset.index) < 0) {
        refs.lightbox__imageRef.dataset.index =
          refs.galleryRef.lastElementChild.children[0].children[0].dataset.index;
        refs.lightbox__imageRef.src =
          gallery[Number(refs.lightbox__imageRef.dataset.index)].original;
      }
      refs.lightbox__imageRef.src =
        gallery[Number(refs.lightbox__imageRef.dataset.index)].original;
    }
  }
  if (event.code === 'ArrowRight') {
    if (Number(refs.lightbox__imageRef.dataset.index) >= 0) {
      refs.lightbox__imageRef.dataset.index =
        Number(refs.lightbox__imageRef.dataset.index) + 1;
      if (
        Number(refs.lightbox__imageRef.dataset.index) >
        refs.galleryRef.lastElementChild.children[0].children[0].dataset.index
      ) {
        refs.lightbox__imageRef.dataset.index =
          refs.galleryRef.firstElementChild.children[0].children[0].dataset.index;
        refs.lightbox__imageRef.src =
          gallery[Number(refs.lightbox__imageRef.dataset.index)].original;
      }
      refs.lightbox__imageRef.src =
        gallery[Number(refs.lightbox__imageRef.dataset.index)].original;
    }
  }
  if (event.code === 'Escape') {
    closeModal();
  }
}
