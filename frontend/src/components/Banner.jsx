import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
const navigate=useNavigate()

  return (
    <div className='flex bg-[#5f6FFF] px-6 pt-5 md:pt-10 rounded-lg my-20 h-55 md:h-90 '>
        {/*------------Left side---------- */}
        <div className='flex-1 py-8 '>
           <div className='md:text-5xl text-2xl font-semibold text-white mx-3 md:mx-10'>
                <p className=''>Book Appointment</p>
                <p className='mb-4'>With 100+ Trusted Doctors</p>
                <button onClick={()=>navigate('/login')} className='bg-white text-sm text-gray-600 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300'>Create account</button>
           </div>
        </div>
        {/*------------Right side---------- */}
        <div className='hidden md:block md:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-20 max-w-md' src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner