export function countryListMarkup(countries) {
  return countries
    .map(country => {
      const {
        name: { official },
        flags: { svg },
      } = country;
      return `<li><img src='${svg}' alt=${official} width=25px height=25px><span>${official}</span></li>`;
    })
    .join('');
}
