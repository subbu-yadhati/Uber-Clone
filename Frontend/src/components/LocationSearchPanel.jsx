import React from 'react'

const LocationSearchPanel = (props) => {

  console.log(props)

  const locations = [
    "1-21,Abc,xyz,Kurnool",
    "5-67,Pqr,lmn,Hyderabad",
    "9-87,Xyz,def,Bangalore",
    "3-45,Ghi,jkl,Chennai"
  ]

  return (
    <div>
      {
        locations.map(function (loc,idx) {
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true),
            props.setPanelOpen(false)
          }} className='flex border-2 border-gray-300 px-2 py-3 active:border-black rounded-xl items-center justify-start gap-4 my-3'>
            <h2 className='bg-[#eeeeee] h-10 flex items-center justify-center w-10 rounded-full' ><i className='ri-map-pin-2-fill'></i></h2>
            <h4 className='font-medium'>{loc}</h4>
          </div>
        })
      }

    </div>
  )
}

export default LocationSearchPanel
