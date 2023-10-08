import Image from 'next/image'
import React from 'react'

import WeatherLoop from '../../public/WeatherLoop.svg'

const TitleDisplay = () => {
  return (
    <div className=' flex justify-center text-2xl text-white font-extrabold '>
      <Image src={WeatherLoop} alt='app-title' width='240' priority />
    </div>
  )
}

export default TitleDisplay
