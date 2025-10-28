import React, { useState,useContext} from 'react'
import UberLogo from '../assets/UberLogo.png'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData , setUserData] = useState({});
    const {user,setUser} =useContext(UserDataContext);

    const navigate=useNavigate();
    const submitHandler=async(e)=>{
        e.preventDefault();
        let newuser={
            email:email,
            password:password
        }
        let response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,newuser);
        if(response.status===200){
            const data=response.data;
            const user=data.user;
            setUser(user);
            localStorage.setItem('token',data.token);
            navigate('/home');
        }
        setUserData(newuser);
        setEmail('');
        setPassword('');
        console.log("submitted");
        console.log(userData); 
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <Link to={'/'} className='font-semibold text-lg'>Back</Link>
                <img className='w-16 mb-10' src={UberLogo} alt="image" />
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
                <p className='text-center mb-3' >New Here?<Link to={'/signup'} className='text-blue-500' >Create New Account</Link></p>
            </div>
            <div>
                <Link to={'/captain-login'}
                className='bg-[#5959bf] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base '
                >Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin
