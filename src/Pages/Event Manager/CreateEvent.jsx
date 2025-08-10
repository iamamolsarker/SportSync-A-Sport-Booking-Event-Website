import React from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const CreateEvent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObjData = Object.fromEntries(formData.entries());

    axios
      .post(
        "https://assignment-11-sport-sync-server.vercel.app/events/",
        formObjData
      )
      .then((res) => {
        const data = res.data;
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Event Added Successfully!",
            icon: "success",
            confirmButtonColor: "oklch(70.5% 0.213 47.604)",
          });
          form.reset();
          navigate("/manage-event");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: `${error.message}`,
          icon: "error",
        });
      });
  };
  return (
    <div className="w-full lg:max-w-[700px] mx-auto my-14 px-5 lg:px-0">
      <Helmet>
        <title>Create Event</title>
      </Helmet>
      <div className=" mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-semibold mb-5">
          Host a Sports Event Today
        </h2>
        <p className="text-lg font-medium text-base-content">
          Organize exciting competitions for any sport. From registration to
          results, manage it all in one place and offer participants a
          world-class experience.
        </p>
      </div>
      <div>
        <form onSubmit={handleAddEvent} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label
              className="text-lg font-medium text-gray-700"
              for="eventName"
            >
              Event Title
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg"
              id="eventName"
              name="eventName"
              type="text"
              placeholder="Enter Event tile here"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-lg font-medium text-gray-700"
              for="eventImage"
            >
              Event Image URL
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg"
              id="eventImage"
              name="eventImage"
              type="text"
              placeholder="Enter image URL here"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-lg font-medium text-gray-700"
              for="eventDate"
            >
              Event Date
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg"
              id="eventDate"
              name="eventDate"
              type="date"
              placeholder="Enter Event date here"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-medium text-gray-700" for="location">
              Event Location
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg"
              id="location"
              name="location"
              type="text"
              placeholder="Enter Event Location here"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 w-1/2">
              <label
                className="text-lg font-medium text-gray-700"
                for="eventType"
              >
                Event Type
              </label>
              <select
                className="border border-gray-300 p-3 rounded-lg"
                name="eventType"
                id="eventType"
              >
                <option value="Running">Running</option>
                <option value="Swimming">Swimming</option>
                <option value="Cycling">Cycling</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Basketball">Basketball</option>
                <option value="Tennis">Tennis</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <label className="text-lg font-medium text-gray-700" for="status">
                Event status
              </label>
              <select
                className="border border-gray-300 p-3 rounded-lg"
                name="status"
                id="status"
              >
                <option value="available" selected>
                  Available
                </option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-lg font-medium text-gray-700"
              for="description"
            >
              Event Description
            </label>
            <textarea
              className="border border-gray-300 p-3 rounded-lg"
              id="description"
              name="description"
              placeholder="Enter Event Description here"
              rows={4}
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-lg font-medium text-gray-700"
              for="creatorName"
            >
              Event Organizer
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg"
              id="creatorName"
              name="creatorName"
              type="text"
              defaultValue={user.displayName}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-lg font-medium text-gray-700"
              for="creatorEmail"
            >
              Organizer Email
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg"
              id="creatorEmail"
              name="creatorEmail"
              type="text"
              defaultValue={user.email}
              readOnly
            />
          </div>
          <input
            className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg font-medium"
            type="submit"
            value="Add Event"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
