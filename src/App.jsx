function App() {
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
          placeholder="e.g. Slovakia"
        />
      </div>
      <div style={{ marginTop: 16 }}>
        Too many matches, specify another filter
      </div>
    </>
  )
}

export default App
