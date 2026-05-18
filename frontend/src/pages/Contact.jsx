import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl  my-10'>
        <p>CONTACT US</p>
      </div>
      <div className='flex flex-col md:flex-row gap-8 justify-center'>
        <img className='w-full md:max-w-1/3' src={assets.contact_image} alt="" />
        <div className='py-5'>
          <p className='text-xl text-gray-700 font-semibold'>OUR OFFICE</p>
          <div className='my-6 text-gray-600'>
            <p>00000 Willms Station</p>
            <p>Suite 000, Washington, USA</p>
          </div>
          <div className='my-6 text-gray-600'>
            <p>Tel: +91 9705769466</p>
            <p>Email: nagari.pavan.03@gmail.com</p>
          </div>
          <p className='text-xl text-gray-700 font-semibold'>CAREERS AT BookMyAppointment</p>
          <p className='my-5 text-gray-600 text-sm'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-3 hover:bg-black hover:text-white transition duration-200 cursor-pointer text-sm'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact