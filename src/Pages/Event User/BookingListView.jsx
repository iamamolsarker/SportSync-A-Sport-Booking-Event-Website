import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const BookingListView = ({ myBookings, handleDelete }) => {
  return (
    <>
      <div className="min-h-[65vh]">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Event Date</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myBookings.map((booking, i) => (
                <tr key={booking._id} i={i} booking={booking}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      src={booking.eventImage}
                      alt=""
                      className="w-[120px]"
                    />
                  </td>
                  <td className="text-lg font-medium">{booking.eventName}</td>
                  <td className="text-lg font-medium">{booking.eventDate}</td>
                  <td className="text-lg font-medium">{booking.location}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="border border-red-500 p-2 rounded cursor-pointer"
                    >
                      <RiDeleteBin6Line size="20px" className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookingListView;
