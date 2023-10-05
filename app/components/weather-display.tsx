import React, { useState } from 'react'

import Image from 'next/image'

import WeatherIcons from './weather-icons'

import Moment from 'react-moment'

import { TbTemperatureFahrenheit } from 'react-icons/tb'

import { ForecastTypes } from '../types/data-types'

import CardRight from './card-right'

import CardLeft from './card-left'

import {
  wind,
  humidity,
  uv,
  partlyCloudy,
  compass,
  cloudy,
  overcast,
  smokeParticles,
  snow,
  hail,
  heavyRain,
  sleet,
  fog,
  blizzard,
  thunder,
  drizzle,
  overcastRain,
  sunny,
  rain
} from '../animations/weathergifs'

type ValueProps = {
  value: ForecastTypes
}

const WeatherDisplay = ({ value }: ValueProps): React.JSX.Element => {
  const date = new Date()

  const weatherIcons = {
    1000: sunny,
    1003: cloudy,
    1006: cloudy,
    1009: overcast,
    1030: smokeParticles,
    1063: rain,
    1066: snow,
    1069: sleet,
    1072: drizzle,
    1087: thunder,
    1114: snow,
    1117: blizzard,
    1135: fog,
    1189: heavyRain,
    1195: heavyRain,
    1192: heavyRain,
    1201: overcastRain,
    1210: snow,
    1213: snow,
    1216: snow,
    1219: snow,
    1222: snow,
    1225: snow,
    1237: hail,
    1243: heavyRain,
    1252: sleet
  }

  return (
    <div
      className='W-full drop-shadow-xl m bg-black/30 backdrop-blur 
     rounded-2xl py-4 md:py-6 text-white px-4'
    >
      {/* Weather Top */}

      <div className='flex flex-col font-bold md:text-2xl text-xl text-center'>
        {`${value.location.name}, 
        ${value.location.country}`}
      </div>
      <div className='py-2  text-xs md:text-md text-center'>
        <Moment format='LL' />
      </div>

      {/* WEATHER BODY DISPLAY */}

      <div
        className='flex 
       justify-between items-center flex-col md:flex-row'
      >
        {/* DATA DISPLAY LEFT SIDE */}

        <CardLeft value={value} />

        {/* DATA DISPLAY RIGHT SIDE */}

        <CardRight value={value} />
      </div>
    </div>
  )
}

export default WeatherDisplay
