import axios from 'axios'

function Hamburger() {
  
  async function showCountries(e) {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${e.target.dataset.name}`)
      console.log(response)
    } catch (error) {
      console.error(`Error: ${error}`)
    }
  }
  
  return (
    <nav>
      <button className="hamburger">&#9776;</button>
      <div className="hamburger-options">
        <p data-name="Africa" onClick={showCountries}>Africa</p>
        <p data-name="Americas" onClick={showCountries}>Americas</p>
        <p data-name="Asia" onClick={showCountries}>Asia</p>
        <p data-name="Europe" onClick={showCountries}>Europe</p>
        <p data-name="Oceania" onClick={showCountries}>Oceania</p>
      </div>
    </nav>
  )
}

export default Hamburger
