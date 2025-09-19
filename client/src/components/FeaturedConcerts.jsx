import React from 'react'
import {ArrowRight} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BlurEffect from './BlurEffect';
import { event } from '../assets/events';
import EventCard from './EventCard';

const FeaturedConcerts = () => {
    const navigate = useNavigate();
  return (
    <div id='events-section' className='px-6 md:px-16 lg:px-24 xl:px-30 overflow-hidden'>
        <div className='relative flex items-center justify-between pt-20 pb-10'>
          <BlurEffect top='0' right='-80px'/>
            <p className='text-gray-300 font-medium text-lg'>Upcoming Concerts</p>
            <button onClick={()=> navigate('/concerts')} className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>View All 
                <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5 cursor-pointer'/></button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
          {event.slice(0,8).map((eventItem)=>(
            <EventCard key={eventItem._id} event={eventItem} />
          ))}
        </div>
        <div className='flex justify-center mt-20'>
          <button onClick={()=> {navigate('/concerts'); scrollTo(0,0)}} className='px-4 py-1 sm:px-7 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition rounded-full font-medium cursor-pointer'>Show more</button>
        </div>
    </div>
  )
}

export default FeaturedConcerts