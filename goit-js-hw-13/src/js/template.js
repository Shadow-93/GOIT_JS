import refs from './refs';
import templates from '../templates/card-list.hbs';

function template(hits) {
  const markup = templates(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default template;
