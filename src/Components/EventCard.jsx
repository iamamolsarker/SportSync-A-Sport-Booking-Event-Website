import React from 'react';
import { LuCalendar1, LuMapPin, LuUsers } from "react-icons/lu";

const EventCard = ({event}) => {
    const {eventName, eventType, eventDate, description, eventImage, status, location, creatorName} = event;
    return (
        <div className='rounded-xl border border-gray-300'>
            <div className='relative'>
                <img src={eventImage} alt="" className='w-full min-h-[220px] object-cover rounded-t-xl' />
                <p className='bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full px-3 py-1.5 font-medium absolute top-5 left-5'>{eventType}</p>
            </div>
            <div className='p-5'>
                <h2 className='text-xl font-semibold'>{eventName}</h2>
                <p className='text-sm text-gray-500 mt-5'>{description}</p>
                <div className='flex flex-col gap-2 my-5 text-gray-600 font-medium'>
                    <div className='flex gap-1 items-center'><LuCalendar1 size={"20px"} className='text-orange-500'/> {eventDate}</div>
                    <div className='flex gap-1 items-center'><LuMapPin size={"20px"} className='text-orange-500'/> {location}</div>
                    <div className='flex gap-1 items-center'><LuUsers size={"20px"} className='text-orange-500'/>Organized by: {creatorName} </div>
                </div>
                <button className='bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl w-full px-3 py-2 font-medium'>View Details</button>
            </div>
        </div>
    );
};

export default EventCard;