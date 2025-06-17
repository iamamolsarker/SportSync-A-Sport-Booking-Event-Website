import React, { Suspense } from "react";
import MyBookingList from "./MyBookingList";
import useAuth from "../../Hooks/useAuth";
import LoaderAnimation from "../../Components/LoaderAnimation";
import { myBookingsPromise } from "../../Api/myBookingsApi";
import { Helmet } from "react-helmet";

const MyBookings = () => {
  const { user } = useAuth();

  if(!user){
    return <LoaderAnimation/>
  }
  
  return (
    <>
      <Helmet>
        <title>My Booking</title>
      </Helmet>
      <Suspense fallback={<LoaderAnimation></LoaderAnimation>}>
        <MyBookingList
          myBookingsPromise={myBookingsPromise(user.email, user.accessToken)}
        ></MyBookingList>
      </Suspense>
    </>
  );
};

export default MyBookings;
