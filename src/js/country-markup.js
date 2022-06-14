export default function countryMarkup(countries) {
  return countries
    .map(country => {
      const {
        name: { official },
        capital,
        population,
        flags: { svg },
        languages,
      } = country;
      return `
    <div class='country-info__header'><img src="${svg}" alt = ${official} class="logo">
    <p class="country-info__header--text">${official}</p>
    </div>
    <ul class='country-info__list'>
    <li><span class="country-info__title">Capital: </span>${capital}</li>
     <li><span class="country-info__title">Population: </span>${population}</li>
      <li><span class="country-info__title">languages:  </span>${Object.values(
        languages
      )}</li>
    </ul>`;
    })
    .join('');
}
