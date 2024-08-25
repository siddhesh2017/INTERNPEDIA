import React, { useEffect, useState, useRef } from 'react'
import search from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const Weather = () => {

  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();
  const icons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  }

  const searchWeather = async (city) => {
    if( city === ''){
      alert("Enter City Name");
      return;
    }
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);

      if(!response.ok){
        alert("No not found!!");
      }

      const data = await response.json();
      const icon = icons[data?.weather[0]?.icon] || clear; 
      setWeatherData({
        humidity: data?.main?.humidity, 
        windspeed: data?.wind?.speed,
        temperature: Math.floor(data?.main?.temp),
        location: data?.name,
        icon: icon
      })
    }
    catch (error){
      setWeatherData(false);
      console.error('Something went wrong :)');
    }
  }

  useEffect(()=>{
    searchWeather("pune");
  },[])

  return (
    <div className='w-md h-auto text-white bg-white rounded-xl p-10 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-400 flex flex-col items-center justify-center'>
      {/* search-bar */}
      <div id='search-bar' className='flex items-center gap-5 mt-4 cursor-pointer '>
        <input ref={inputRef} type="text" className='p-2.5 rounded-full border w-full  border-stone-400 text-black' placeholder='Search' />
        <button onClick={() => searchWeather(inputRef.current.value)} className='w-12 h-11 border border-stone-400 rounded-full px-3 py-1 flex items-center justify-center bg-white'>
          <img src={search} />
        </button>
      </div>
      {weatherData? 
        <>
          <img src={weatherData.icon} />
          <p className='text-5xl font-normal '>{weatherData.temperature}°C</p>
          <p className='text-xl mt-1 font-normal '>{weatherData.location}</p>
          <div id="weather-info" className=' p-3 flex justify-center items-center gap-10 mt-5'>
            <div id="humidity-col" className='flex items-center gap-4'>
              <img className='w-9 h-9' src={humidity}/>
              <div>
                <p>{weatherData.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div id="windspeed-col" className='flex items-center gap-2'>
              <img className='w-9 h-9' src={wind}/>
              <div>
                <p>{weatherData.windspeed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </>
        : 
        <>
          <div className="mt-10 flex flex-row gap-2">
            <div className="animate-pulse bg-slate-300 w-12 h-12 rounded-full"></div>
            <div className="flex flex-col gap-2">
              <div className="animate-pulse bg-slate-300 w-28 h-5 rounded-full"></div>
              <div className="animate-pulse bg-slate-300 w-36 h-5 rounded-full"></div>
            </div>
          </div>

        </>
      }
      
      
    </div>
  )
}

export default Weather;