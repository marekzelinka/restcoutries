import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export function getCurrentWeather([lat, lon]) {
  return axios
    .get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    )
    .then((response) => response.data)
}
