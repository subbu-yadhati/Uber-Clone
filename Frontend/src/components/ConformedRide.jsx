import React from 'react'
import CarLogo from '../assets/CarLogo.png'

const ConformedRide = (props) => {
  return (
    <div>
        <h5 onClick={()=>props.setConformRidePanel(false)} className='p-3 w-full text-center absolute top-0'><i className="ri-arrow-down-wide-line text-3xl"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h3>
        <div className='flex flex-col gap-2 justify-between items-center'>
            <img className='h-25' src={CarLogo} alt="" />
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

                <div className='flex items-center gap-5 p-3 '>
                    <i className="ri-currency-fill text-xl"></i>
                    <div >
                        <h3 className='text-lg font-medium'>$193.20</h3>
                        <p className='text-sm -mt-1 text-gray-500 '>Cash</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>{props.setVechicleFound(true),props.setConformRidePanel(false)}} className='w-full mt-5 bg-green-400 font-semibold p-2 rounded-lg'>Conform</button>
        </div>
    </div>
  )
}

export default ConformedRide
