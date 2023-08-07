import EventCard from './EventCard';
import { useEffect, useState } from 'react';
import {EventI} from '@/models';
// import { Event } from '../../models/event.type';

const UpcomingEvents = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(import.meta.env.VITE_EVENT_SOURCE);
      const data = await response.json();
      setEvents(data.slice(0, 3));
    };
    fetchEvents();
  }, []);


  return (
    <>
    <div className='my-4'>
        <h1 className="font-bold my-2 text-xl text-center">Events</h1>
        <div className='flex md:flex-row flex-col md:justify-between md:w-4/5 mx-auto justify-center'>
            {events.map((event: EventI, index: number) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    </div>
    </>
  )
}

export default UpcomingEvents