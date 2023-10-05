'use client'

import axios from 'axios'

import React, { useState } from 'react'

import WeatherDisplay from './components/weather-display'

import { ForecastTypes } from './types/data-types'

import toast, { Toaster } from 'react-hot-toast'

import FormInput from './components/form-input'

import WelcomeDisplay from './components/welcome-display'

import TitleDisplay from './components/title-display'
import Footer from './components/footer'
import Error from './components/error'

export default function Home() {
  const [weather, setWeather] = useState<ForecastTypes | null>()

  const [location, setLocation] = useState<string>('')

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
    if (e.target.value === '') {
      return
    }
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
    <div className='flex justify-center items-center space-y-12 h-screen w-full flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <TitleDisplay />

      <div>
        <FormInput
          handleChange={handleChange}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
        {/* DISPLAY WEATHER DATA */}

        {weather && <WeatherDisplay value={weather} />}
      </div>

      {/* DISPLAY CUSTOM ERROR DATA */}

      {error && <Error />}

      {/* PAGE DEFAULT WITH NO WEATHER DATA */}

      {!weather && <WelcomeDisplay />}

      <Footer />
    </div>
  )
}
