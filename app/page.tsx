'use client'

import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { BsSearch } from 'react-icons/bs'
import windsock from '../public/icons/windsock.svg'
import WeatherDisplay from './components/weather-display'
import { WeatherIconTypes, ForecastTypes } from './types/data-types'
import toast, { Toaster } from 'react-hot-toast'
import FormInput from './components/form-input'

export default function Home() {
  const [weather, setWeather] = useState<ForecastTypes | null>()

  const [location, setLocation] = useState<string>()

  const [error, setError] = useState(false)

  const fetchWeather = () => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_KEY}&q=
    ${location}&aqi=no`

    axios
      .get(URL)
      .then((res) => {
        setWeather(res.data)
      })
      .catch(({ err }) => {
        setError(err)

        toast.error('Something Went Wrong')
        console.log('[WEATHERLOOP_ERROR', err)
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!location) return
    fetchWeather()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!location) return
    fetchWeather()
    console.log('clicked')
  }

  return (
    <div className='flex justify-center  items-center h-screen w-full flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <FormInput
        handleChange={() => handleChange}
        handleClick={() => handleClick}
        handleSubmit={() => handleSubmit}
      />
      {/* 
      {weather && <WeatherDisplay value={weather} />} */}

      {error && (
        <div>
          <Toaster />
        </div>
      )}

      {/* PAGE DEFAULT WITH NO WEATHER DATA */}

      {!weather && (
        <div
          className='W-full drop-shadow-xl m bg-black/30 backdrop-blur 
          rounded-2xl px-4 mt-4 md:mt-10 py-10 flex items-center flex-col justify-center text-white'
        >
          <Image src={windsock} alt='default screen' height='200' width='200' />
          Hi, Welcome to my app.
        </div>
      )}
    </div>
  )
}

// className='flex justify-center items-center h-screen w-full
//   flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
