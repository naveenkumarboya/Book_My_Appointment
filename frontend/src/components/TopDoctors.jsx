import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext} from '../context/AppContext'

const TopDoctors = () => {
    const navigate=useNavigate();
    const {doctors,loadingDoctors}=useContext(AppContext)
  
  
  if (loadingDoctors) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
    return (
    <div className='m-10 mt-40'>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-black text-3xl font-bold text-center' >Top Doctors to Book</h1>
        <p className='mt-5 mb-6 sm:w-1/2 w-50 md:ml-45  text-sm '>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div  className='grid md:grid-cols-5 gap-4'>
            {
                doctors.slice(0,10).map((item,index)=>(
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 cursor-pointer rounded-2xl bg-[#EAEFFF] overflow-hidden hover:translate-y-[-10px] transition-all duration-500'>
                        <img src={item.image} alt="" />
                        <div className='bg-white p-4' key={index}>
                            <div className={`flex items-center gap-2 text-sm text-center ${item.available?'text-green-500':'text-gray-500'}`}>
                                <p className={`w-2 h-2 ${item.available?'bg-green-500':'bg-gray-500'} rounded-full`}></p>{
                                    item.available?<p >Available</p>:<p>Not Available</p>
                                }
                            </div>
                            <div>
                                <p className='font-medium text-lg'>{item.name}</p>
                                <p className='opacity-60 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='flex justify-center items-center'>
            <button onClick={()=>{navigate('/doctors'),scroll(0,0)}} className='mt-11 cursor-pointer text-center flex justify-center items-center bg-gray-300 rounded-full py-2 px-10 '>More</button>
        </div>
    </div>
  )
}

export default TopDoctors