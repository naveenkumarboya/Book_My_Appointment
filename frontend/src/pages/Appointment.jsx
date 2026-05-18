import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {

  const navigate = useNavigate()

  const {docId} = useParams()
  const {doctors,currencySymbol,backendUrl, token, getDoctorsData} = useContext(AppContext)
  const daysOfWeek=['SUN','MON','TEU','WED','THU','FRI','SAT']
  const [docInfo,setDocInfo]=useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('')

  
  const fetchInfo=async()=>{
    const docInfo = doctors.find(doc=>doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  const getAvailableSlots = async() =>{
    setDocSlots([])
    // getting current date
    let today = new Date()
     for(let i = 0 ; i < 7; i++){
    // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)
      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i) 
      endTime.setHours(21,0,0,0)
      // setting hours
      // setting hours
      if (today.getDate() === currentDate.getDate()) {
      currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
    } else {
      currentDate.setHours(10)
      currentDate.setMinutes(0)
    }
    let timeSlots = [ ]
    while(currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      
      let day = currentDate.getDate()
      let month = currentDate.getMonth()+1
      let year = currentDate.getFullYear()

      const slotDate = day+"_"+month+"_"+year
      const slotTime = formattedTime

      const isSlotAvailablr = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime)?false:true

      if (isSlotAvailablr) {
        // add slot to array
      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime
      })
      }
      
      
      // Increment current time by 30 minutes
      currentDate.setMinutes (currentDate.getMinutes() + 30)
    }
    
    setDocSlots(prev=>([...prev,timeSlots]))
  }
   
}

  const bookAppointment = async()=>{
    if (!token) {
      toast.warning('Login to Book Appointment')
      return navigate('/login')
    }

    try {
      
      const date = docSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()

      const slotDate = day+"_"+month+"_"+year
      
      const {data} = await axios.post(backendUrl+'/api/user/book-appointment',{docId,slotDate,slotTime},{headers:{ Authorization: `Bearer ${token}`}})

      if(data.success){
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointment')
      }else{
        toast.error(data.message)
      }


    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(()=>{ fetchInfo()},[docId,doctors])
  useEffect(()=>{getAvailableSlots()},[docInfo])
  useEffect(()=>{console.log(docSlots);},[docSlots])

  return docInfo &&(
    <div>
        <div className='flex flex-col sm:flex-row gap-4 my-5 '>
          <div className='mx-8'>
              <img className='bg-[#5f6FFF] w-80 rounded-lg ' src={docInfo.image} alt="" />
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 '>
            <h1 className='flex gap-2 text-3xl font-semibold'>{docInfo.name } <img className='py-1.5' src={assets.verified_icon} alt="" /></h1>
            <div className='flex gap-2 pt-2 pb-5'>
              <p>{docInfo.degree}</p>
              <p>-</p>
              <p>{docInfo.speciality}</p>
              <p className='border border-gray-400 rounded-full px-2 text-sm'>{docInfo.experience}</p>
            </div>
            <p className='font-semibold flex gap-2'>about <img src={assets.info_icon} alt="" /></p>
            <p className='mb-5 mt-3 text-sm max-w-full pr-5'>{docInfo.about}</p>
            <div className='flex gap-1 '>
              <p className='text-gray-800'>Appointment fee:  </p><p className='font-semibold'>{currencySymbol}{docInfo.fees} </p>
            </div>
          </div>
        </div>
        <div className='sm:ml-72 sm:pl-4 mt-4'>
          <div className='  font-medium text-gray-700'> 
              <p>Booking slots</p>
              <div className='flex gap-3 items-center w-full overflow-x-scroll no-scrollbar mt-4'>
                {
                  docSlots.length && docSlots.map((item,index)=>(
                    <div onClick={()=>setSlotIndex(index) } className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-[#5f6FFF] text-white' :'border border-gray-200' }`} key={index}>
                      <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                      <p>{item[0] && item[0].datetime.getDate()}</p>
                    </div>
                  ))
                }
              </div>
        </div>
        <div className='flex items-center gap-3  overflow-x-scroll mt-4 no-scrollbar'>
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-[#5f6FFF] text-white':'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button onClick={bookAppointment} className='bg-[#5f6FFF] text-white text-sm font-light px-16 py-3 rounded-full mt-4 cursor-pointer'>Book an appointment</button>
        </div>
        <div>
          {/* Listing related doctors */}
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
    </div>
  )
}

export default Appointment