import React from 'react'

import WeatherIcons from './weather-icons'

import { ForecastTypes, WeatherIconTypes } from '../types/data-types'

import {
  wind,
  humidity,
  uv,
  partlyCloudy,
  compass
} from '../animations/weathergifs'

const CardRight = (value) => {
  return (
    <div
      className=' h-full w-full px-2  grid 
  grid-rows-2 grid-cols-2 gap-2 md:gap-2'
    >
      <WeatherIcons
        dayData={value.current.wind_dir}
        desc={'Wind'}
        imgURL={wind}
      />

      <WeatherIcons
        dayData={value.current.wind_dir}
        desc={'Wind Direction'}
        imgURL={compass}
      />

      <WeatherIcons
        dayData={value.current.humidity}
        desc={'Humidity'}
        imgURL={humidity}
      />
      <WeatherIcons dayData={value.current.uv} desc={'Index'} imgURL={uv} />
    </div>
  )
}

export default CardRight
