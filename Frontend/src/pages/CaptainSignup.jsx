import React from 'react'
import { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UberDriver from '../assets/UberDriver.png'
import {CaptainDataContext} from '../context/CaptainContext'
import axios from 'axios'


const CaptainSignup =  () => {
    

    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        
        const [vehicleColor, setVehicleColor] = useState('');
        const [vehiclePlate, setVehiclePlate] = useState('');
        const [vehicleCapacity, setVehicleCapacity] = useState('');
        const [vehicleType, setVehicleType] = useState('');

        const {captain,setCaptain}=useContext(CaptainDataContext);
        const navigate=useNavigate();
    
        const submitHandler=async(e)=>{
            e.preventDefault();
            let captaindata={
                fullname:{
                    firstname:firstName,
                    lastname:lastName
                },
                email:email,
                password:password,
                vehicle:{
                    color:vehicleColor,
                    plate:vehiclePlate,
                    capacity:vehicleCapacity,
                    vehicleType:vehicleType
                }
            }

            const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captaindata);
            if(response.status===201){
                const userData=response.data;
                setCaptain(userData);
                localStorage.setItem('captain-token',userData.token);
                navigate('/captain-home');
            }


            setCaptain(captaindata);
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setVehicleColor('');
            setVehiclePlate('');
            setVehicleCapacity('');
            setVehicleType('');
            console.log("submitted");
        }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src={UberDriver} alt="image" />
                <form action="" onSubmit={(e)=>{submitHandler(e)}}>
                    
                    <h3 className='text-base font-medium mb-2'>What's Your Name</h3>
                    <div className='flex gap-4 mb-5'>
                        <input className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm'
                        type="text"
                        value={firstName}
                        onChange={(e)=>{setFirstName(e.target.value)}}
                        required placeholder='First Name' name="" id="" />

                        <input className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm '
                        type="text"
                        value={lastName}
                        onChange={(e)=>{setLastName(e.target.value)}}
                        placeholder='Last Name' name="" id="" />                        
                    </div>
                    <h3 className='text-base font-medium mb-2'>Your Email</h3>
                    <input className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm '
                        type="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required placeholder='email@exmaple.com' name="" id="" />

                    <h3 className='text-base font-medium mb-2'>Enter Password</h3>
                    <input className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm '
                        type="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        required placeholder='Password' />
                        <h3 className='text-base font-medium mb-2'>Vehicle Details</h3>
                        <div className='flex gap-4 mb-5'>
                            <input className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm'
                            type="text"
                            value={vehicleColor}
                            onChange={(e)=>{setVehicleColor(e.target.value)}}
                            required placeholder='Vehicle Color' />

                            <input className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm'
                            type="text"
                            value={vehiclePlate}
                            onChange={(e)=>{setVehiclePlate(e.target.value)}}
                            required placeholder='Vehicle Plate Number' />
                        </div>

                        <div className='flex gap-4 mb-5'>
                            <input className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm'
                            type="number"
                            value={vehicleCapacity}
                            onChange={(e)=>{setVehicleCapacity(e.target.value)}}
                            required placeholder='Seating Capacity' />

                            <select 
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base'
                            value={vehicleType}
                            onChange={(e)=>{setVehicleType(e.target.value)}}
                            required>
                                <option value="">Select Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="auto">Auto</option>
                                <option value="moto">Moto</option>
                            </select>
                        </div>
                    <button className='bg-[#111111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '>
                        Sign Up</button>

                </form>
                <p className='text-center mb-3' >Already have an Account?<Link to={'/captain-login'} className='text-blue-500' >Login Here</Link></p>
            </div>
            <div>
                <p className='text-[12px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS 
                    messages, including by automated means, from Uber and its affiliates to the number provided.
                </p>
           </div>
        </div>
  )
}

export default CaptainSignup
