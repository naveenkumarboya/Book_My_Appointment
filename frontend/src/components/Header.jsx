import React from 'react'
import { assets } from '../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='main-div rounded-2xl px-7 pl-15 flex flex-row gap-30'>
        {/*-----Left side--------*/}
        <div className='left-div flex flex-col gap-4 '>
            <p className='text-white font-extrabold text-3xl'>Book Appointment <br /> With Trusted Doctors</p>
            <div className='left-sub-div '>
                <img src={assets.group_profiles} alt="" />
                
            </div>
            <p className=' text-white text-l '> Simply browse through our extensive list of trusted doctors,<br />
                    schedule your appointment hassle-free
                </p>
              <a className='flex flex-row gap-2 bg-white p-3 rounded-full w-50 mb-10 hover:scale-105 transition-all duration-300 ' href="#speciality">Book appointment <img className='pt-0.5' src={assets.arrow_icon} alt="" /></a>
        </div>
        {/*-----Right  side--------*/}
        <div className='right-div mt-10'>
            <img className='right-div-img' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header