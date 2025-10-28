import React, { use } from 'react'
import uberLogo from '../assets/UberLogo.png'
import ubermap from '../assets/UberMap.png'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConformedRide from '../components/ConformedRide';
import LookinforDriver from '../components/LookinforDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {

  const [pickup, setPicup] = useState('');
  const [destination, setDestination] = useState('');

  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const vehiclePanelRef = useRef(null);
  const conformRidePanelRef=useRef(null)
  const vechicleFoundRef=useRef(null)
  const waitingforDriverRef=useRef(null)

  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [conformRidePanel,setConformRidePanel]=useState(false);
  const [vechicleFound,setVechicleFound]=useState(false);
  const [waitinforDriver,setwaitinforDriver]=useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: '20px'
      })
      gsap.to(panelClose.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
      })
      gsap.to(panelClose.current, {
        opacity: 0,
        // display:'none'

      })
    }
    console.log("panelOpen changed");
  }, [panelOpen]);

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[vehiclePanel])

  useGSAP(function () {
    if (conformRidePanel) {
      gsap.to(conformRidePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(conformRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[conformRidePanel])


  useGSAP(function () {
    if (vechicleFound) {
      gsap.to(vechicleFoundRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vechicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[vechicleFound])

  useGSAP(function () {
    if (waitinforDriver) {
      gsap.to(waitingforDriverRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(waitingforDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[waitinforDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={uberLogo} alt="" />
      <div className='w-screen h-screen' >
        <img className='w-full h-full object-cover' src={ubermap} alt="" />
      </div>
      <div className='flex flex-col justify-end absolute h-screen top-0 w-full '>
        <div className='h-[30%] bg-white p-5 relative'>
          <h5 ref={panelClose} onClick={(e) => { setPanelOpen(false) }} className='absolute opacity-1 top-6 right-6 text-3xl'><i className='ri-arrow-down-wide-line'></i></h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form action="" onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top-[43%] rounded-full left-[10%] bg-black "></div>
            <input
              onClick={(e) => { setPanelOpen(true) }}
              value={pickup}
              onChange={(e) => {
                setPicup(e.target.value)
              }}
              className='bg-[#eeeeee] px-10 py-2 border text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick up Location' />
            <input
              value={destination}
              onClick={(e) => { setPanelOpen(true) }}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eeeeee] px-10 py-2 border text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your Destination Location' />
          </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full px-4 py-10'>
        <VehiclePanel setConformRidePanel={setConformRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={conformRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full px-4 py-10'>
        <ConformedRide setConformRidePanel={setConformRidePanel} setVechicleFound={setVechicleFound} />
      </div>

      <div ref={vechicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full px-4 py-10'>
        <LookinforDriver setVechicleFound={setVechicleFound}/>
      </div>

      <div ref={waitingforDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-4 py-10'>
        <WaitingForDriver setwaitinforDriver={setwaitinforDriver} />
      </div>

      

    </div>
  )
}

export default Home
