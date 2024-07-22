import { WeatherView } from './WeatherView'

export function CountryView({ country }) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <dl>
        <dt>Capital</dt>
        <dd>{country.capital}</dd>
        <dt>
          Area (km<sup>2</sup>)
        </dt>
        <dd>
          {country.area.toLocaleString('en-US', {
            style: 'decimal',
          })}
        </dd>
      </dl>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        width={120}
        height={80}
      />
      <h3>Weather in {country.capital}</h3>
      <WeatherView latlng={country.latlng} />
    </div>
  )
}
