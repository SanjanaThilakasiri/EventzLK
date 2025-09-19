import React from 'react'
import { useNavigate } from 'react-router-dom'

const EventCard = ({event}) => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66'>
        <img onClick={()=>{navigate(`/event/${event.id}`); scrollTo(0,0)}} src={event.image} className='rounded-lg h-65 w-full object-fill object-right-bottom cursor-pointer' alt="" />

        <p className='font-semibold mt-2 truncate'>{event.title} </p>
        <p className='text-sm text-gray-400 mt-2'>{event.date} | {event.location} | {event.time}</p>

        <div className='flex items-center justify-between mt-4 pb-3'>
            <button onClick={()=>{navigate(`/event/${event.id}`); scrollTo(0,0)}} className='px-4 py-2 text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition rounded-full font-medium cursor-pointer'>Buy Tickets</button>
        </div>
    </div>

  )
}

export default EventCard