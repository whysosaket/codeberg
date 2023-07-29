import React from 'react'
import EventCard from './EventCard'

const UpcomingEvents = () => {
  return (
    <>
    <div className='my-4'>
        <h1 className="font-bold my-2 text-xl text-center">Upcoming Events</h1>
        <div className='flex md:flex-row flex-col md:justify-between md:w-4/5 mx-auto justify-center'>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    </div>
    </>
  )
}

export default UpcomingEvents