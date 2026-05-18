import React from 'react'
import { specialityData } from '../assets/assets'
import {Link} from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='m-20 flex flex-col items-center gap-4 md:ml-30'>
        <h1 className='text-black w-70 text-3xl font-bold mt-10 '>Find by Speciality</h1>
        <p className='mb-6 sm:w-1/2 text-center text-sm'>Simply browse through our extensive list of trusted doctors, <br />schedule your appointment hassle-free.

        </p>
        <div className='flex flex-col md:flex-row gap-4'>
            {
                specialityData.map((item,index)=>(
                        <Link key={index} to={`/doctors/${item.speciality}`} className="flex flex-col items-center  hover:translate-y-[-10px] transition-all duration-500">
                            <img className='w-24 h-24 mb-2' src={item.image} alt="" />
                            <p>{item.speciality}</p>
                       </Link>
                ))
            }
        </div>
    </div>
  )
}

export default SpecialityMenu