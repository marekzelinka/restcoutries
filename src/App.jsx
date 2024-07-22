import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  let [countries, setCountries] = useState(null)
  let [filter, setFilter] = useState('')
  let [selected, setSelected] = useState(null)

  let countriesToShow = countries?.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase()),
  )

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => setCountries(response.data))
  }, [])

  return (
    <>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <label htmlFor="fitler" aria-label="Filter countries by name">
          Find countries
        </label>
        <input
          type="search"
          name="fitler"
          id="fitler"
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value)
            setSelected(null)
          }}
          disabled={!countries}
          placeholder="e.g. Slovakia"
        />
      </div>
      <div style={{ marginTop: 16 }}>
        {selected ? (
          <div>
            <h2>{selected.name.common}</h2>
            <dl>
              <dt>Capital</dt>
              <dd>{selected.capital}</dd>
              <dt>
                Area (km<sup>2</sup>)
              </dt>
              <dd>
                {selected.area.toLocaleString('en-US', {
                  style: 'decimal',
                })}
              </dd>
            </dl>
            <h3>Languages</h3>
            <ul>
              {Object.values(selected.languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <img
              src={selected.flags.svg}
              alt={selected.flags.alt}
              width={120}
              height={80}
            />
          </div>
        ) : countriesToShow ? (
          countriesToShow.length > 10 ? (
            'Too many matches, specify another filter'
          ) : countriesToShow.length > 1 ? (
            <ul>
              {countriesToShow.map((country) => (
                <li key={country.name.common}>
                  {country.name.common}{' '}
                  <button type="button" onClick={() => setSelected(country)}>
                    show
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <h2>{countriesToShow[0].name.common}</h2>
              <dl>
                <dt>Capital</dt>
                <dd>{countriesToShow[0].capital}</dd>
                <dt>
                  Area (km<sup>2</sup>)
                </dt>
                <dd>
                  {countriesToShow[0].area.toLocaleString('en-US', {
                    style: 'decimal',
                  })}
                </dd>
              </dl>
              <h3>Languages</h3>
              <ul>
                {Object.values(countriesToShow[0].languages).map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
              <img
                src={countriesToShow[0].flags.svg}
                alt={countriesToShow[0].flags.alt}
                width={120}
                height={80}
              />
            </div>
          )
        ) : (
          'Loading…'
        )}
      </div>
    </>
  )
}

export default App
