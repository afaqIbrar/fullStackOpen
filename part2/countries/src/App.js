import { useState, useEffect } from 'react'
import axios from 'axios';
import Countries from './components/Countries';
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => setCountries(response.data))
  }, [])


  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setSelectedCountries([]);
    } else {
      setSelectedCountries(countries.filter(country => country['name'].common.toLowerCase().includes(e.target.value.toLowerCase())))
    }
  }
  console.log('filter', selectedCountries);

  return (
    <div>
      <div>
        find Countries<input type="text" onChange={handleInputChange} />
        <Countries filtersCountries={selectedCountries} setSelectedCountries={setSelectedCountries} />
      </div>
    </div>
  );
}

export default App;
