import React, { useState } from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useRouteLoaderData } from 'react-router-dom'

const MyProfile = () => {

  const {userData,setUserData,token,backendUrl,loadUserProfileData} = useContext(AppContext)


  const [isEdit,setIsEdit]=useState(false)
  const [image,setImage] = useState(false)

  const updateUserProfileData = async()=>{

    try {
      
      const formData = new FormData()

      formData.append('name',userData.name)
      formData.append('phone',userData.phone)
      formData.append('line1', userData.address.line1)
      formData.append('line2', userData.address.line2)
      formData.append('gender',userData.gender)
      formData.append('dob',userData.dob)


      image && formData.append('image',image)

      const {data} = await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{  Authorization: `Bearer ${token}`}})

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      }else{
        toast.error(data.message)

      }
    } catch (error) {
      console.log(error)
    toast.error(error.response?.data?.message || error.message)
    }

  }

  return userData &&(
    <div className='my-10 mx-5'>
      <div className='my-5'>
        {
          isEdit?<label>
            <div className='inline-block relative cursor-pointer'>
              <img className='w-36 rounded opacity-75' src={image?URL.createObjectURL(image):userData.image} alt="" />
              <img className='w-10 absolute bottom-12 right-12' src={image?'':assets.upload_icon} alt="" />
            </div>
            <input type="file" onChange={(e)=>setImage(e.target.files[0]) } id='image' hidden />
          </label>:
        <img className='w-full md:max-w-1/7 rounded-2xl' src={userData.image} alt="" />
        }
      </div>
      <div className='text-3xl font-semibold my-3'>
        {
          isEdit?
          <input type="text"  value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} />:
          <p>{userData.name}</p>
        }
      </div>
      <hr className='md:w-120 opacity-30' />
      <div className='my-5'>
        <p className='text-gray-700 underline mb-4'>CONTACT INFORMATION</p>
        <p className='text-sm mb-2 flex'><span className='font-bold mr-3'>Email id:</span> 
        {
          isEdit?
          <input className='text-blue-500' type="text" value={userData.email} onChange={e=>setUserData(prev=>({...prev,email:e.target.value}))} />:
          <p className='text-blue-500'>{userData.email}</p>
        }
        </p>
        <p className='text-sm mb-2 flex'><span className='font-bold mr-5'>Phone:</span> 
        {
          isEdit?
          <input type="text" className='text-blue-500' value={userData.phone} onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))} />:
          <p className='text-blue-500'>{userData.phone}</p>
        }
        </p>
        <p className='text-sm mb-2 flex'><span className='font-bold mr-3'>Address:</span> 
        {
          isEdit?
          <input type="text" className='text-gray-600' value={userData.address.line1} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} />:
          <p className='text-gray-600'>{userData.address.line1}</p>
        },
        {
          isEdit?
          <input type="text" className='text-gray-600' value={userData.address.line2} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} />:
          <p className='text-gray-600'>{userData.address.line2}</p>
        }
        </p>
      </div>
      <div className='mb-8'>
        <p className='text-gray-700 underline mb-2'>BASIC INFORMATION</p>
        <p className='text-sm mb-2 flex'><span className='font-bold mr-5'>Gender:</span>
        {
          isEdit?
          <select value={userData.gender} onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>:
          <p>{userData.gender}</p>
        }
        </p>
        <p className='text-sm mb-2 flex'><span className='font-bold mr-3'>Birthday:</span>
        {
          isEdit?
          <input type="date" value={userData.dob} onChange={e=>setUserData(prev=>({...prev,dob:e.target.value}))} />:
          <p>{userData.dob}</p>
        }
        </p>
      </div>
      {
        isEdit ?
        <button onClick={updateUserProfileData} className='border border-blue-600 py-2 px-10 rounded-full cursor-pointer font-semibold hover:bg-[#5f6FFF] hover:text-white'>Save information</button>:
        <button onClick={()=>setIsEdit(true)} className='border border-blue-600 py-2 px-10 rounded-full cursor-pointer font-semibold hover:bg-[#5f6FFF] hover:text-white'> Edit</button>
      }
    </div>
  )
}

export default MyProfile