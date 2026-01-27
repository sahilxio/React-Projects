import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  const API_KEY = '69d2b9902f66d4dd05ec146088fb4f76'

  async function fetchWeather() {

    try {
      setError('')

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)

      setWeather(res.data)
      setCity('')

    } catch (err) {
      setError("! city not found", err)
      setWeather(null)

    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      fetchWeather()
    }
  }


  return (
    <div className='h-screen bg-gradient-to-br from-emerald-700 to-emerald-600 flex justify-center items-center'>

      <div className='bg-white p-6 w-1/3 rounded-lg sm: w-auto'>

        <h1 className='text-center text-xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500
 
               bg-clip-text text-transparent font-semibold font-medium mb-6 sm: text-2xl'>Weather App</h1>
        <input
          type="text"
          placeholder='Enter city'
          value={city}
          onChange={e => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className='px-3 py-3 w-3/3 text-base  border border-gray-100 rounded-md focus:outline-none border-gray-400'
        />

        <button
          onClick={fetchWeather}
          className=' text-white px-4 py-3 bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-md ml-3'
        >
          search
        </button>

        {error && <p className='text-red-500 text-lg font-medium text-center mt-6'>{error}</p>}

        {weather && (
          <div className='flex flex-col justify-center items-center mt-2'>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
            <h2 className="text-3xl font-semibold mb-4  bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500



               bg-clip-text text-transparent">{weather.name}</h2>
            <p className='text-lg font-medium mb-2'>{weather.weather[0].description}</p>
            <p className='text-lg font-medium mb-2'>temperature: {weather.main.temp}</p>
            <p className='text-lg font-medium mb-2'>humidity: {weather.main.humidity}%</p>
            <p className='text-lg font-medium mb-2'>pressure: {weather.main.pressure} hPa</p>
            <p className="text-lg font-medium mt-1">Wind: {weather.wind.speed} m/s</p>





          </div>
        )}

      </div>

    </div>
  )
}

export default App