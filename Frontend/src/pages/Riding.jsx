import React from 'react'
import MapLogo from '../assets/UberMap.png'
import CarLogo from '../assets/CarLogo.png'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>

              <Link to={'/home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="ri-home-4-fill text-lg font-medium"></i>
              </Link>

            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src={MapLogo} alt="" />
            </div>

            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-15' src={CarLogo} alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Subbu</h2>
                        <h4 className='text-xl font-semibold'>Ap 000 00 000</h4>
                        <p className='font-sm text-gray-600'>Maruthi Suziki</p>
                    </div>
                </div>


                <div className='flex flex-col gap-2 justify-between items-center'>

                    <div className='w-full flex flex-col gap-2'>
                    

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

                </div>
                <button className='flex items-center justify-center bg-green-500 p-2 rounded-lg w-full text-xl text-white'>Make a Payment</button>
            </div>
            Riding
        </div>
    )
}

export default Riding
