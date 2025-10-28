import React from 'react'
import CarLogo from "../assets/CarLogo.png"
import SampleUse from '../assets/SampleUse.png'


const RidePopup = (props) => {
    return (
        <div>
            <h5 onClick={() =>{props.setRidePopupPanel(false)}} className='p-3 w-full text-center absolute top-0'><i className="ri-arrow-down-wide-line text-3xl"></i></h5>
            <h3 className='text-2xl font-semibold mb-3'>Ride for You</h3>

            <div className='flex items-center justify-between bg-yellow-200 rounded-xl p-2'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 rounded-full object-cover w-12' src={SampleUse} alt="" />
                    <h2 className='text-lg font-medium'>Satya</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2Km</h5>
            </div>

            <div className='flex flex-col gap-2 justify-between items-center'>
                <div className='w-full flex flex-col gap-2'>
                    <div className='flex items-center gap-5 p-3  border-b-2 border-gray-500'>
                        <i className="ri-map-pin-2-fill text-xl"></i>
                        <div >
                            <h3 className='text-lg font-medium'>562/11/A</h3>
                            <p className='text-sm -mt-1 text-gray-500 '>Palukur,Kurnool</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3  border-b-2 border-gray-500 '>
                        <i className="ri-map-pin-user-fill text-xl"></i>
                        <div >
                            <h3 className='text-lg font-medium'>562/11/A</h3>
                            <p className='text-sm -mt-1 text-gray-500 '>Palukur,Kurnool</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 px-3'>
                        <i className="ri-currency-fill text-xl"></i>
                        <div >
                            <h3 className='text-lg font-medium'>$193.20</h3>
                            <p className='text-sm -mt-1 text-gray-500 '>Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {props.setConformRidePopupPanel(true)}} className='w-full mt-3 bg-green-400 font-semibold p-2 rounded-lg'>Accept</button>
                <button onClick={() => {props.setRidePopupPanel(false) }} className='w-full mt-3 bg-gray-400 font-semibold p-2 rounded-lg'>Ignore</button>
            </div>
        </div>
    )
}

export default RidePopup
