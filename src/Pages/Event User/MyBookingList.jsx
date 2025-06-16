import React, { use, useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import BookingListView from "./BookingListView";

const MyBookingList = ({ myBookingsPromise }) => {
  const initialBookingData = use(myBookingsPromise);
  const [myBookings, setMyBookings] = useState(initialBookingData);
  const [gridView, setGridView] = useState(false);
  const handleView = () => {
    setGridView(!gridView);
  };
  return (
    <>
      <div className="max-w-[1300px] mx-auto my-14">
        <div>
          <button onClick={handleView}>{gridView ? <CiGrid41/> : "list"}</button>
        </div>
        <div>
          {
            gridView ? "" : <BookingListView myBookings={myBookings}></BookingListView>
          }
        </div>
      </div>
    </>
  );
};

export default MyBookingList;
