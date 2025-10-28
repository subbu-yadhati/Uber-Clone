import React from 'react'
import CarLogo from '../assets/CarLogo.png'

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5 onClick={() => props.setwaitinforDriver(false)} className='p-3 w-full text-center absolute top-0'><i className="ri-arrow-down-wide-line text-3xl"></i></h5>

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

            </div>
        </div>
    )
}

export default WaitingForDriver
