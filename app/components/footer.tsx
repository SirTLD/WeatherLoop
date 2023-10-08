import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex items-center text-sm '>
      Made with{' '}
      <BsFillSuitHeartFill className='text-red-500 shadow-sm ml-2 text-2xl' />
    </div>
  )
}

export default Footer
