import React from 'react'
import SampleUse from '../assets/SampleUse.png'


const CaptainDetails = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src={SampleUse} alt="" />
                    <h4 className='text-lg font-medium'>Subbu</h4>
                </div>

                <div>
                    <h5 className='text-xl font-semibold'>$250</h5>
                    <p className='text-sm text-gray-500'>Earned today</p>
                </div>
            </div>

            <div className='flex py-5 bg-gray-100 rounded-xl mt-6 justify-center gap-4 items-center'>
                <div className='text-center'>
                    <i className="ri-time-fill mb-2 text-2xl font-extralight"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-small text-gray-400 '>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="ri-dashboard-3-fill mb-2 text-2xl font-extralight"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-small text-gray-400 '>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="ri-booklet-fill mb-2 text-2xl font-extralight"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-small text-gray-400 '>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
