export function CountryList({ countries, onSelect }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>
          {country.name.common}{' '}
          <button type="button" onClick={() => onSelect(country)}>
            show
          </button>
        </li>
      ))}
    </ul>
  )
}
