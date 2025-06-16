import React from "react";

const BookingListView = ({ myBookings }) => {
  return (
    <>
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
                  <img src={booking.eventImage} alt="" className="w-[120px]" />
                </td>
                <td className="text-lg font-medium">{booking.eventName}</td>
                <td className="text-lg font-medium">{booking.eventDate}</td>
                <td className="text-lg font-medium">{booking.location}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingListView;
