import React, { useState } from 'react'
import { TbTemperatureFahrenheit } from 'react-icons/tb'

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
import { ForecastTypes } from '../types/data-types'

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

type ValueProps = {
  value: ForecastTypes
}

const CardLeft = ({ value }: any) => {
  const [imgSrc, setImgSrc] = useState(false)
  return (
    <div className='text-center px-2 md:px-6'>
      <img
        className='mx-auto'
        alt='weather-icon'
        // src={
        //   imgSrc
        //     ? {weatherIcons[value?.current.condition.code]}[]
        //     : value?.current.condition.icon
        // }

        src={
          weatherIcons[value?.current.condition.code] ||
          value?.current.condition.icon
        }
        // width='140'
        // height='140'
      />

      <div className='text-white font-bold flex items-center '>
        <div className='text-5xl md:text-7xl mx-auto'>
          {value?.current.temp_f.toFixed()}
        </div>
        <div>
          <TbTemperatureFahrenheit size={40} />
        </div>
      </div>
      <div className='py-2 md:text-sm text-xs flex justify-center mx-auto'>
        <div> Feels like {value?.current.feelslike_f.toFixed()}</div>
        <div className='flex items-center'>
          <TbTemperatureFahrenheit size={12} />
        </div>
      </div>
    </div>
  )
}

export default CardLeft
