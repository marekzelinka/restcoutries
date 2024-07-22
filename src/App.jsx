import { useEffect, useState } from 'react'
import { CountryList } from './components/CountryList.jsx'
import { CountryView } from './components/CountryView.jsx'
import { Filter } from './components/Filter.jsx'
import { getAllCountries } from './services/country.js'

function App() {
  let [countries, setCountries] = useState(null)
  let [filter, setFilter] = useState('')
  let [selected, setSelected] = useState(null)

  let countriesToShow = countries?.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase()),
  )

  useEffect(() => {
    getAllCountries().then(setCountries)
  }, [])

  return (
    <>
      <Filter
        value={filter}
        disabled={!countries}
        onChange={(filter) => {
          setFilter(filter)
          setSelected(null)
        }}
      />
      <div style={{ marginTop: 16 }}>
        {selected ? (
          <CountryView country={selected} />
        ) : countriesToShow ? (
          countriesToShow.length > 10 ? (
            'Too many matches, specify another filter'
          ) : countriesToShow.length > 1 ? (
            <CountryList countries={countriesToShow} onSelect={setSelected} />
          ) : (
            <CountryView country={countriesToShow[0]} />
          )
        ) : (
          'Loading…'
        )}
      </div>
    </>
  )
}

export default App
