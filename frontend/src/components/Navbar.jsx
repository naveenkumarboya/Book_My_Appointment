import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { useNavigate, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate=useNavigate();

    const {token,setToken,userData,setUserData} = useContext(AppContext)

    const [showMenu,setShowMenu]=useState(false);
    
    const logout = ()=>{
         setToken(null)
        setUserData(null)
        navigate('/login')
    }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400  bg-white'>
        <img onClick={()=>navigate('/')} className='w-1/3 md:w-1/6 cursor-pointer' src={assets.logo} alt="logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 m-auto hidden bg-[#5f6FFF]'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 m-auto hidden bg-[#5f6FFF]'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 m-auto hidden bg-[#5f6FFF]'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 m-auto hidden bg-[#5f6FFF]'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4' >
           {
            token && userData? 
                <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={userData.image} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-2 right-0 pt-14 font-medium text-base z-20 text-gray-600 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 p-4 flex flex-col gap-4 '>
                            <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('/my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>:
                <button onClick={()=>navigate('/login')} className='bg-[#5f6FFF] text-white rounded-full px-8 py-3 hidden md:block font-light'>Create account</button>

           }
        </div>
    </div>
  )
}

export default Navbar