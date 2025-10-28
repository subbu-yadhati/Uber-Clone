import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UberDriver from '../assets/UberDriver.png'
import { CaptainDataContext } from '../context/CaptainContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Captainlogin = () => {

    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const {captain,setCaptain}=useContext(CaptainDataContext);
        const navigate=useNavigate();
        
        const submitHandler=async(e)=>{
            e.preventDefault();
            let newuser={
                email:email,
                password:password
            }
            const respose=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,newuser);
            if(respose.status===200){
                const userData=respose.data;
                setCaptain(userData);
                localStorage.setItem('captain-token',userData.token);
                navigate('/captain-home');
            }
            setEmail('');
            setPassword('');
            console.log("submitted");
             
        }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <Link to={'/'} className='font-semibold text-lg'>Back</Link>
                <img className='w-16 mb-10' src={UberDriver} alt="image" />
                <form action="" onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's Your Email</h3>
                    <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                        type="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required placeholder='email@exmaple.com' name="" id="" />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                        type="password"
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        required placeholder='Password' />
                    <button className='bg-[#111111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '>
                        Login</button>
                        
                </form>
                <p className='text-center mb-3' >Wanna Join ?<Link to={'/captain-signup'} className='text-blue-500' >Register as Captain</Link></p>
            </div>
            <div>
                <Link to={'/login'}
                className='bg-[#59bf62] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base '
                >Sign in as User</Link>
            </div>
        </div>
  )
}

export default Captainlogin
