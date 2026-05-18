import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl'>
        <p>ABOUT US</p>
      </div>
      <div className='flex flex-col md:flex-row  gap-8 my-10 mx-10'>
        <img className='w-full md:max-w-1/3 ' src={assets.about_image} alt="" />
        <div className='py-8 pr-15 text-gray-600 flex flex-col gap-5'>
          <p>Welcome to BookMyAppointment, your trusted partner in managing your healthcare needs conveniently and efficiently. At BookMyAppointment, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>BookMyAppointment is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, BookMyAppointment is here to support you every step of the way.</p>
          <b>Our Vision</b>
          <p>Our vision at BookMyAppointment is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div className='text-2xl mx-10'>
        <p>WHY CHOOSE US</p>
      </div>
      <div className='flex flex-col md:flex-row my-10 mx-10'>
        <div className='border border-gray-300 py-15 px-10 flex flex-col gap-5 transition duration-300 hover:bg-[#5f6FFF] hover:text-white'>
          <p className='font-semibold'>EFFICIENCY:</p>
          <p className='max-w-90  hover:text-white'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border border-gray-300 py-15 px-10 flex flex-col gap-5 transition duration-300 hover:bg-[#5f6FFF] hover:text-white'>
          <p className='font-semibold'>CONVENIENCE:</p>
          <p className='max-w-90  hover:text-white'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border border-gray-300 py-15 px-10 flex flex-col gap-5 transition duration-300 hover:bg-[#5f6FFF] hover:text-white'>
          <p className='font-semibold'>PERSONALIZATION:</p>
          <p className='max-w-90  hover:text-white'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About