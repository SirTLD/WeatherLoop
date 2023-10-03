import React from 'react'

import { BsSearch } from 'react-icons/bs'

type InputTypes = {
  handleSubmit: () => void
  handleClick: () => void
  handleChange: () => void
}

const FormInput = ({ handleSubmit, handleClick, handleChange }: InputTypes) => {
  return (
    <div className='drop-shadow-xl mb-4 md:mb-10'>
      <form
        onSubmit={handleSubmit}
        className=' cursor-pointer items-center 
      w-full  p-3 md:p-4 bg-black/20 border-gray-300 rounded-2xl '
      >
        <div className='flex justify-between'>
          <input
            onChange={handleChange}
            className='text-white grow w-[400px] bg-transparent 
          focus:outline-none placeholder:text-white/50 cursor-pointer'
            type='text'
            placeholder='Enter Your City'
          />

          <div>
            <button className='text-white' onClick={handleClick}>
              <BsSearch size={20} />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormInput
