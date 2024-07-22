import axios from 'axios'

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

export function getAllCountries() {
  return axios.get(BASE_URL).then((response) => response.data)
}
