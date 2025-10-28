import React from 'react'
import UberLogo from '../assets/UberLogo.png'
import trafficLight from '../assets/trafficLight.jpg'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className={`bg-cover bg-center bg-[url('/src/assets/trafficLight.jpg')] h-screen pt-8 w-full flex justify-between flex-col`}>
        <img className='w-16 ml-8' src={UberLogo} alt="image" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-2xl font-bold' >Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center  w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Start
