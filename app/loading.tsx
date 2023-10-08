import Image from 'next/image'
import React from 'react'

import WeatherLoop from '../public/WeatherLoop.svg'

const Loading = () => {
  return (
    <div className='flex items-center justify-center space-y-4'>
      <div className=' flex justify-center text-2xl text-white font-extrabold '>
        <Image src={WeatherLoop} alt='app-title' width='340' />
      </div>
      <p>loading...</p>
    </div>
  )
}

export default Loading
