import React, { useRef, useState } from 'react'
import UberMap from '../assets/UberMap.png'
import UberLogo from '../assets/UberLogo.png'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {

  const [finishRidePanel,setfinishRidePanel]=useState(false)
  const finishRidePanelRef=useRef(null)
  
  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[finishRidePanel])

  return (
    <div className='h-screen relative'>
      
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src={UberLogo} alt="" />
        <Link to={'/captain-home'} className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="ri-logout-box-fill text-xl font-medium"></i>
        </Link>
      </div>

      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src={UberMap} alt="" />
      </div>

      <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400'>
        <h5 onClick={() =>{setfinishRidePanel(true)}} className='p-3 w-screen text-center absolute top-0'><i className="ri-arrow-up-wide-line text-3xl"></i></h5>
            
        <h4 className='text-xl font-semibold'>4km away</h4>
        <button className='bg-green-400 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
      </div>

      <div ref={finishRidePanelRef}  className='fixed w-full z-10 h-screen bottom-0 bg-white translate-y-full px-4 py-10'>
        <FinishRide setfinishRidePanel={setfinishRidePanel}/>
      </div>

    </div>
  )
}

export default CaptainRiding
