import React from 'react'
import { UserDataContext } from '../context/userContext'
import { useContext,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserProtectedWrapper = ({children}) => {

  const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const token=localStorage.getItem('token');
    const navigate=useNavigate();
    useEffect(()=>{
        if(!token){
            navigate('/login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                const userData = response.data;
                setUser(userData);
                setIsLoading(false);
            }
        }).catch((error) => {
            console.log(error);
            localStorage.removeItem('token');
            navigate('/login');
        })
    },[token])                                        
    
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
