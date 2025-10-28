import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import UberLogo from '../assets/UberLogo.png'
import axios from 'axios'
import {UserDataContext} from '../context/userContext'
import { useContext } from 'react'


const UserSignup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData , setUserData] = useState({});

    const navigate=useNavigate();

    const {user,setUser}=useContext(UserDataContext);

    const submitHandler=async (e)=>{
        e.preventDefault();
        let newuser={
            fullname:{
                firstname:firstName,
                lastname:lastName
            },
            email:email,
            password:password
        }

        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newuser);
        if(response.status===201){
            const data=response.data;
            setUser(data.user)
            console.log(user);
            localStorage.setItem('token',data.token);
            navigate('/home');
        }
        setUserData(newuser);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        console.log("submitted");
        console.log(userData);
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src={UberLogo} alt="image" />
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
                    <button className='bg-[#111111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base '>
                        Sign Up</button>

                </form>
                <p className='text-center mb-3' >Already have an Account?<Link to={'/login'} className='text-blue-500' >Login Here</Link></p>
            </div>
            <div>
                <p className='text-[12px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS 
                    messages, including by automated means, from Uber and its affiliates to the number provided.
                </p>
           </div>
        </div>
    )
}

export default UserSignup
