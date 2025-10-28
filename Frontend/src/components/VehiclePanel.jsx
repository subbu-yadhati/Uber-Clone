import React from 'react'
import CarLogo from '../assets/CarLogo.png'
import BikeLogo from '../assets/BikeLogo.png'
import AutoLogo from '../assets/AutoLogo.png'


const VehiclePanel = (props) => {
    return (
        <div>
            <h5 onClick={() => props.setVehiclePanel(false)} className='p-3 w-full text-center absolute top-0'><i className="ri-arrow-down-wide-line text-3xl"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a ride</h3>
            <div onClick={()=>props.setConformRidePanel(true)} className='flex border-2 mb-2 border-black active:bg-gray-300 rounded-xl items-center p-3 justify-between w-full'>
                <img className='h-12' src={CarLogo} alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'>4</i></span> </h4>
                    <h5 className='text-sm font-medium'>2 min away</h5>
                    <p className='text-xs font-medium text-gray-600'>Affordable,compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$192.20</h2>
            </div>
            <div onClick={()=>props.setConformRidePanel(true)} className='flex border-2 mb-2 border-black active:bg-gray-300 rounded-xl items-center p-3 justify-between w-full'>
                <img className='h-12' src={BikeLogo} alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className='ri-user-3-fill'>1</i></span> </h4>
                    <h5 className='text-sm font-medium'>3 min away</h5>
                    <p className='text-xs font-medium text-gray-600'>Affordable,compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$50.20</h2>
            </div>
            <div onClick={()=>props.setConformRidePanel(true)} className='flex border-2 mb-2 border-black active:bg-gray-300 rounded-xl items-center p-3 justify-between w-full'>
                <img className='h-12' src={AutoLogo} alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>AutoRide <span><i className='ri-user-3-fill'>3</i></span> </h4>
                    <h5 className='text-sm font-medium'>5 min away</h5>
                    <p className='text-xs font-medium text-gray-600'>Affordable,Auto Rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$90.0</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
