import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext.jsx'


const Login = () => {

  const [state,setState] = useState('Admin')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {setAToken,backendUrl} = useContext(AdminContext)

  const {setDToken} = useContext(DoctorContext)

  const onSubmitHandler = async(event) =>{
    event.preventDefault()

    try {
      if (state === 'Admin') {
        
        const {data} = await axios.post(backendUrl + '/api/admin/login',{email,password})
        if (data.success) {
          localStorage.setItem('aToken',data.token)
          setAToken(data.token)
        }else{
          toast.error(data.message)
        }

      }else{

        const {data} = await axios.post(backendUrl+ '/api/doctor/login',{email,password})
        

        if (data.success) {
          localStorage.setItem('dToken',data.token)
          setDToken(data.token)
          console.log(data.token)
        }else{
          toast.error(data.message)
        }

      }
    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex justify-center'>
      <div className='border border-gray-200 shadow-lg w-max my-45 rounded-2xl p-8 mx-10'>
        <p className='text-2xl font-semibold text-gray-700 mb-4  flex flex-row gap-2 justify-center'><span className='text-[#5f6FFF]'>{state}</span>login</p>
        <div>
          <p className='text-sm text-gray-600 font-semibold'>Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} className='border border-gray-300 mt-2 mb-5 px-3 py-1 w-80 rounded-l' type="email" required />
        </div>
        <div>
          <p className='text-sm text-gray-600 font-semibold' >Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} className='border border-gray-300 mt-2 mb-5 px-3 py-1 w-80 rounded-l' type="password" required />
        </div>
        <button className='bg-[#5f6FFF] text-white px-35 rounded-l py-2 cursor-pointer font-semibold mb-3 '>Login</button>
        <div className='text-sm'>
          {state === 'Admin'?
        <p>Doctor Login? <span onClick={()=>setState('Doctor')} className='text-blue-600 underline cursor-pointer'  >Login here</span></p>:
        <p>Admin Login? <span onClick={()=>setState('Admin')} className='text-blue-600 underline cursor-pointer'>Click here</span></p>}
        </div>
      </div>
      
    </form>
  )
}

export default Login