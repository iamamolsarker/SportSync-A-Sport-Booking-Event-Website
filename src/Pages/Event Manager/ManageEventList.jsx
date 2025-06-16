import axios from "axios";
import React, { use, useState } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import noDataFound from "../../assets/animation/no_data_found.json"
import { Link } from "react-router";

const ManageEventList = ({ manageMyEventsPromise }) => {
  const initialEvents = use(manageMyEventsPromise);
  const [myEvents, setMyEvents] = useState(initialEvents);

  const handleEventDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#020202",
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "Don't delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/events/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Event has been deleted.",
                icon: "success",
                confirmButtonColor: "orange",
              });

              const remainingEvent = myEvents.filter(
                (event) => event._id !== id
              );
              setMyEvents(remainingEvent);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  const handleEventUpdate = (id) => {
    console.log(id);
  }
  return (
    <>
      {myEvents.length ? (
        <div className="max-w-[1300px] min-h-[65vh] mx-auto my-14 px-5 lg:px-0">
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
                {myEvents.map((event, i) => (
                  <tr key={event._id}>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        src={event.eventImage}
                        alt=""
                        className="w-[120px]"
                      />
                    </td>
                    <td className="text-lg font-medium">{event.eventName}</td>
                    <td className="text-lg font-medium">{event.eventDate}</td>
                    <td className="text-lg font-medium">{event.location}</td>
                    <td>
                      <button
                          onClick={() => handleEventUpdate(event._id)}
                        title="Edit Event"
                        className="border border-orange-500 p-2 rounded cursor-pointer mr-3"
                      >
                        <RiEditLine size="20px" className="text-orange-500" />
                      </button>
                      <button
                        onClick={() => handleEventDelete(event._id)}
                        className="border border-red-500 p-2 rounded cursor-pointer"
                        title="Delete Event"
                      >
                        <RiDeleteBin6Line
                          size="20px"
                          className="text-red-500"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="max-w-[400px] mx-auto my-14 text-center px-5 lg:px-0 min-h-[65vh]">
          <Lottie animationData={noDataFound} loop={true} />
          <Link
            className="border border-orange-500 text-lg text-orange-500 font-semibold px-4 py-1.5 rounded-xl inline-block mt-6"
            to="/add-event"
          >
            Add Event
          </Link>
        </div>
      )}
    </>
  );
};

export default ManageEventList;
