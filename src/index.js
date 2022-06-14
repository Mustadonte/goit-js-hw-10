import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import countryMarkup from './js/country-markup';
import { fetchCountries } from './js/fetchCountries';
import { countryListMarkup } from './js/country-list-markup';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
  serchQuery: document.querySelector('.country-list'),
};

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const name = e.target.value.trim();
  console.log(name);
  if (name === '') {
    Notiflix.Notify.warning('Введіть корректне значення');
    e.target.value = '';
    return;
  }
  fetchCountries(name)
    .then(response => {
      if (response.length > 4) {
        Notiflix.Notify.info('Введіть більш точну назву');
        return;
      }
      if (response.length > 1 && response.length <= 4) {
        const listMarkup = countryListMarkup(response);
        console.log(response);
        refs.serchQuery.insertAdjacentHTML('beforeend', listMarkup);
        return;
      }
      const markup = countryMarkup(response);
      refs.countryInfo.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      Notiflix.Notify.failure('Такої країни не існує');
    });
  clearSerchContainer();
}

function clearSerchContainer() {
  refs.countryInfo.innerHTML = '';
  refs.serchQuery.innerHTML = '';
}
