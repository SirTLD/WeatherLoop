import React from 'react'

import Image from 'next/image'

import windsock from '../../public/icons/windsock.svg'

const WelcomeDisplay = () => {
  return (
    <div
      className='W-full drop-shadow-xl m bg-black/30 backdrop-blur 
  rounded-2xl px-4 mt-4 md:mt-10 py-10 flex items-center flex-col justify-center text-white'
    >
      <Image src={windsock} alt='default screen' height='200' width='200' />
      Hi, Welcome to my app.
    </div>
  )
}

export default WelcomeDisplay
