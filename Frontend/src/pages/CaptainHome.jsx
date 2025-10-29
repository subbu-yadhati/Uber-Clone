import React, { useRef } from 'react'
import UberMap from '../assets/UberMap.png'
import CarLogo from '../assets/CarLogo.png'
import UberLogo from '../assets/UberLogo.png'
import { Link } from 'react-router-dom'
import SampleUse from '../assets/SampleUse.png'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConformRidePopup from '../components/ConformRidePopup'


const CaptainHome = () => {

  const ridePopupPanelRef=useRef(null);
  const ConformRidePopupPanelRef=useRef(null);

  const [ridePopupPanel,setRidePopupPanel]=useState(true)
  const [ConformRidePopupPanel,setConformRidePopupPanel]=useState(false)

   useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[ridePopupPanel])

   useGSAP(function () {
    if (ConformRidePopupPanel) {
      gsap.to(ConformRidePopupPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(ConformRidePopupPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[ConformRidePopupPanel])

  return (
    <div className='h-screen'>

      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src={UberLogo} alt="" />
        <Link to={'/captain-home'} className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="ri-logout-box-fill text-xl font-medium"></i>
        </Link>
      </div>

      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src={UberMap} alt="" />
      </div>

      <div className='h-1/2 p-4'>
        <CaptainDetails/>
      </div>

      <div ref={ridePopupPanelRef}  className='fixed translate-Y-full w-full z-10 bottom-0 bg-white  px-4 py-10'>
        <RidePopup setConformRidePopupPanel={setConformRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>

      <div ref={ConformRidePopupPanelRef}  className='fixed w-full z-10 h-screen bottom-0 bg-white translate-y-full px-4 py-10'>
        <ConformRidePopup  setRidePopupPanel={setRidePopupPanel} setConformRidePopupPanel={setConformRidePopupPanel}/>
      </div>

    </div>
  )
}

export default CaptainHome
