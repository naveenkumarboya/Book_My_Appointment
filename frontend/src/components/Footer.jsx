import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-40 mb-5'>
        <div className='flex flex-col gap-10 md:flex-row md:gap-35 mb-8 '>
            {/*------------Left section--------- */}
            <div className='w-1/2 '>
                <img className='md:w-1/3  mb-5' src={assets.logo} alt="" />
                <p className='text-sm'>BookMyAppointment helps you easily find doctors, book appointments, and manage your healthcare schedule online — anytime, anywhere.</p>
            </div>

            {/*------------center section--------- */}
            <div className=' pt-5'>
                <h1 className='font-semibold text-l mb-2'>COMPANY</h1>
                <ul className='text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/*------------Right section--------- */}
            <div className=' pt-5'>
                <h1 className='font-semibold text-l mb-2'>GET IN TOUCH</h1>
                <p className='text-gray-600'>+91 9705769466</p>
                <p className='text-gray-600'>nagari.pavan.03@gmail.com</p>
            </div>
        </div>
        <div className='text-center'>
            <hr className='opacity-20' />
            <p className='mt-3 text-sm'>Copyright 2025 @ Nagari Pavan - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer