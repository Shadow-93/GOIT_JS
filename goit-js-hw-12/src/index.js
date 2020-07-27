import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';

refs.input.addEventListener('input', debounce(fetchCountries, 500));
