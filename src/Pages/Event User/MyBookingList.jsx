import React, { use, useState } from "react";
import { CiBoxList, CiGrid41 } from "react-icons/ci";
import BookingListView from "./BookingListView";
import BookingGridView from "./BookingGridView";
import axios from "axios";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import noDataFound from "../../assets/animation/no_data_found.json"
import { Link } from "react-router";

const MyBookingList = ({ myBookingsPromise }) => {
  const initialBookingData = use(myBookingsPromise);
  const [myBookings, setMyBookings] = useState(initialBookingData);
  const [gridView, setGridView] = useState(false);
  const handleView = () => {
    setGridView(!gridView);
  };

  const handleDelete = (eventId) => {
    Swal.fire({
      title: "Do you want to cancle?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#020202",
      confirmButtonText: "Yes, cancle it!",
      cancelButtonText: "Don't cancle it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/event-bookings/${eventId}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Cancled!",
                text: "Your booking has been cancled.",
                icon: "success",
                confirmButtonColor: "orange",
              });

              const remainingEvent = myBookings.filter(
                (booking) => booking._id !== eventId
              );
              setMyBookings(remainingEvent);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };
  return (
    <>
      {myBookings.length ? (
        <div className="max-w-[1300px] mx-auto my-14">
          <div className="flex justify-end mb-6">
            <button
              className="border border-gray-200 rounded-lg p-2 cursor-pointer"
              onClick={handleView}
            >
              {gridView ? <CiBoxList size="25px" /> : <CiGrid41 size="25px" />}
            </button>
          </div>
          <div>
            {gridView ? (
              <BookingGridView
                myBookings={myBookings}
                handleDelete={handleDelete}
              ></BookingGridView>
            ) : (
              <BookingListView
                myBookings={myBookings}
                handleDelete={handleDelete}
              ></BookingListView>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-[400px] mx-auto my-14 text-center">
          <Lottie animationData={noDataFound} loop={true} />
          <Link className="border border-orange-500 text-lg text-orange-500 font-semibold px-4 py-1.5 rounded-xl inline-block mt-6" to="/all-event">See All Event</Link>
        </div>
      )}
    </>
  );
};

export default MyBookingList;
