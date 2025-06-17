import React, { Suspense } from "react";
import ManageEventList from "./ManageEventList";
import useAuth from "../../Hooks/useAuth";
import { manageMyEventsPromise } from "../../Api/manageEventApi";
import LoaderAnimation from "../../Components/LoaderAnimation";
import { Helmet } from "react-helmet";

const ManageEvent = () => {
  const { user } = useAuth();

  if(!user){
    return <LoaderAnimation/>
  }

  return (
    <>
      <Helmet>
        <title>Manage Event</title>
      </Helmet>
      <Suspense fallback={<LoaderAnimation></LoaderAnimation>}>
        <ManageEventList
          manageMyEventsPromise={manageMyEventsPromise(user.email, user.accessToken)}
        ></ManageEventList>
      </Suspense>
    </>
  );
};

export default ManageEvent;
