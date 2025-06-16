import React from "react";
import { LuCalendar1, LuMapPin } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const BookingGridView = ({ myBookings, handleDelete }) => {
  return (
    <div className="min-h-[65vh]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myBookings.map((booking) => (
          <div className="rounded-xl border border-gray-300">
            <div className="relative">
              <img
                src={booking.eventImage}
                alt=""
                className="w-full min-h-[220px] object-cover rounded-t-xl"
              />
              <p className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full px-3 py-1.5 font-medium absolute top-5 left-5">
                {booking.eventType}
              </p>
            </div>
            <div className="p-5 relative">
              <h2 className="text-xl font-semibold">{booking.eventName}</h2>
              <div className="flex flex-col gap-2 my-5 text-gray-600 font-medium">
                <div className="flex gap-1 items-center">
                  <LuCalendar1 size={"20px"} className="text-orange-500" />{" "}
                  {booking.eventDate}
                </div>
                <div className="flex gap-1 items-center">
                  <LuMapPin size={"20px"} className="text-orange-500" />{" "}
                  {booking.location}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="border border-red-500 p-2 rounded cursor-pointer absolute bottom-5 right-5"
                >
                  <RiDeleteBin6Line size="20px" className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingGridView;
