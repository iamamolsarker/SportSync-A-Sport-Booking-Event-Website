import React from "react";
import { Link, useLoaderData } from "react-router";
import EventCard from "../../Components/EventCard";

const Events = () => {
  const allEvents = useLoaderData();
  return (
    <>
      <div className="px-5 md:px-1 py-14">
        <div className="w-full lg:max-w-1/3 mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">
            The Ultimate Sports Challenge
          </h2>
          <p className="text-lg font-medium text-[#494848]">
            Join thousands of passionate athletes in a test of strength, strategy, and skill. Compete, connect, and celebrate the spirit of the game at every level.
          </p>
        </div>
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents.map((event) => (
            <EventCard event={event}></EventCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
