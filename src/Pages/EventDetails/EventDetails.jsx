import React from "react";
import { LuCalendar1, LuMapPin, LuUsers } from "react-icons/lu";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const EventDetails = () => {
  const {
    eventName,
    eventType,
    eventDate,
    description,
    eventImage,
    location,
    creatorName,
    _id,
  } = useLoaderData();

  const { user } = useAuth();

  const handleBooking = () => {
    const eventBookingData = {
      bookedBy: user.email,
      eventId: _id,
    };
    axios
      .post(
        "https://assignment-11-sport-sync-server.vercel.app/event-bookings/",
        eventBookingData
      )
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          Swal.fire({
            title: `You have booked <span class="text-orange-500">${eventName}</span>`,
            icon: "success",
            html: `
                <p class="font-medium mb-1 text-gray-700">Your Email: ${user.email}</p>
                <br>
                <p class="font-medium text-orange-500">Event Date: ${eventDate}</p>
                `,
            confirmButtonColor: "#ff6900",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "You have already booked this event!",
          icon: "error",
          confirmButtonColor: "#ff6900",
        });
      });
  };

  return (
    <div className="max-w-[650px] mx-auto my-14 px-5 lg:px-2">
      <Helmet>
        <title>{eventName}</title>
      </Helmet>
      <div className="rounded-xl border border-gray-300">
        <div className="relative">
          <img
            src={eventImage}
            alt=""
            className="w-full min-h-[220px] object-cover rounded-t-xl"
          />
          <p className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full px-3 py-1.5 font-medium absolute top-5 left-5">
            {eventType}
          </p>
        </div>
        <div className="p-5">
          <h2 className="text-xl font-semibold">{eventName}</h2>
          <p className="text-sm text-gray-500 mt-5">{description}</p>
          <div className="flex flex-col gap-2 my-5 text-gray-600 font-medium">
            <div className="flex gap-1 items-center">
              <LuCalendar1 size={"20px"} className="text-orange-500" />
              {eventDate}
            </div>
            <div className="flex gap-1 items-center">
              <LuMapPin size={"20px"} className="text-orange-500" /> {location}
            </div>
            <div className="flex gap-1 items-center">
              <LuUsers size={"20px"} className="text-orange-500" />
              Organized by: {creatorName}
            </div>
          </div>
          <div className="border border-gray-300 p-2 text-center font-medium text-gray-600 rounded-xl mb-2">
            {user.email}
          </div>
          <button
            onClick={handleBooking}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl w-full block text-center px-3 py-3 font-medium"
          >
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
