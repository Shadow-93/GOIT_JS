import items from './menu-items.hbs';
import menu from './menu.json';
import './styles.css';

const markup = items(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  switch: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
  menu: document.querySelector('.js-menu'),
};

refs.menu.insertAdjacentHTML('beforeend', markup);
refs.switch.addEventListener('change', checked);

const saved = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.DARK) {
    refs.switch.checked = true;
  }
  refs.body.classList = savedTheme;
};

function checked() {
  if (refs.switch.checked) {
    refs.body.classList = Theme.DARK;
    localStorage.setItem('theme', Theme.DARK);
  }
  if (!refs.switch.checked) {
    refs.body.classList = Theme.LIGHT;
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

saved();
