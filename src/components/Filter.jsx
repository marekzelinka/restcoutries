export function Filter({ value, disabled, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <label htmlFor="fitler" aria-label="Filter countries by name">
        Find countries
      </label>
      <input
        type="search"
        name="fitler"
        id="fitler"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder="e.g. Slovakia"
      />
    </div>
  )
}
