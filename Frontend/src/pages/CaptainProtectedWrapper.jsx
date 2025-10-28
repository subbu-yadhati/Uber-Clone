import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';


const CaptainProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem('captain-token');
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                const captainData = response.data;
                setCaptain(captainData);
                setIsLoading(false);
            }
        }).catch((error) => {
            console.log(error);
            localStorage.removeItem('captain-token');
            navigate('/captain-login');
        })
    }, [token])



    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectedWrapper
