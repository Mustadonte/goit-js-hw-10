const API_URL = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});

export function fetchCountries(name) {
  return fetch(`${API_URL}${name}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw Error(console.log('Помилка 404'));
    } else {
      return response.json();
    }
  });
}
