import { useEffect, useState } from 'react'
import { getCurrentWeather } from '../services/weather.js'

export function WeatherView({ latlng }) {
  let [currentWeather, setCurrentWeather] = useState(null)

  useEffect(() => {
    getCurrentWeather(latlng).then(setCurrentWeather)
  }, [latlng])

  return currentWeather ? (
    <dl>
      <dt>Temperature</dt>
      <dd>
        {currentWeather.main.temp} Celcius
        <div>
          {currentWeather.weather.map(({ icon }) => (
            <img
              key={icon}
              src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt=""
            />
          ))}
        </div>
      </dd>
      <dt>Wind</dt>
      <dd>{currentWeather.wind.speed} m/s</dd>
    </dl>
  ) : (
    <div>Loading weather data…</div>
  )
}
