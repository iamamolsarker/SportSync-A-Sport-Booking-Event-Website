import React, { use } from "react";
import EventCard from "./EventCard";

const FeaturedEventCard = ({ featuredEventsPromise }) => {
  const featuredEvent = use(featuredEventsPromise);
  return (
    <div className="px-5 md:px-1 py-14">
      <div className="w-full lg:max-w-1/3 mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-semibold mb-5">
          Featured Events
        </h2>
        <p className="text-lg font-medium text-[#494848]">
          Discover the most exciting athletic events happening near you. Don't miss out on these amazing competitions!
        </p>
      </div>
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
        featuredEvent.map((event) => (<EventCard key={event._id} event={event}></EventCard>))
        }
      </div>
    </div>
  );
};

export default FeaturedEventCard;
