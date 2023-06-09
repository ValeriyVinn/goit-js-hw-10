const countriesBase = 'https://restcountries.com/v3.1/name/';
const countriesInfoFields = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${countriesBase}${name}?${countriesInfoFields}`)
    .then(response => { 
      if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
    // .catch(error => console.log(error));
}