/* eslint-disable no-use-before-define */
import './styles.css';
import 'material-design-icons';
import refs from './js/refs';
import galeryService from './js/apiService';
import template from './js/template';
import loadMoreBtn from './js/loadMoreBtn';

function searchForm(e) {
  e.preventDefault();

  const form = e.currentTarget;
  galeryService.query = form.elements.query.value;
  refs.gallery.innerHTML = '';

  galeryService.resetPage();
  fetchArticles();
  form.reset();
}

function fetchArticles() {
  loadMoreBtn.hide();

  galeryService.fetchGallery().then(hits => {
    template(hits);
    loadMoreBtn.show();

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}

refs.search.addEventListener('submit', searchForm);
refs.btn.addEventListener('click', fetchArticles);
