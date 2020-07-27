import { error } from '../../node_modules/@pnotify/core';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import '../../node_modules/@pnotify/core/dist/PNotify.css';
import templates from '../templates/country-info.hbs';
import list from '../templates/list.hbs';
import refs from './refs';

function onSearch(data) {
  if (data.length >= 2 || data.length <= 10) {
    refs.container.innerHTML = list(data);
  }
  if (data.length > 10 || !data.length) {
    error({
      text: 'Please clarify your search',
    });
  }
  if (data.length === 1) {
    refs.container.innerHTML = templates(data);
  }
}

function onInput() {
  if (refs.input.value.length > 0) {
    fetch(refs.url + refs.input.value)
      .then(res => res.json())
      .then(data => {
        onSearch(data);
      });
  } else {
    refs.container.innerHTML = '';
  }
}

export default onInput;
