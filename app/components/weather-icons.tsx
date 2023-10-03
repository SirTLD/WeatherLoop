import React from 'react'
import Image from 'next/image'

import { WeatherIconTypes } from '../types/data-types'

const WeatherIcons = ({ imgURL, desc, dayData }: WeatherIconTypes) => {
  return (
    <div
      className=' flex flex-col md:flex-row  
    text-center items-center'
    >
      <div>
        <Image src={imgURL} alt='wind-icon' height='50' width='50' />
      </div>

      <div className='mx-auto'>
        <div className=' text-xs md:text-sm text-center'>{desc}</div>
        <div className='font-bold text-base text-center'>{dayData}</div>
      </div>
    </div>
  )
}

export default WeatherIcons
