import React from "react";
import Swal from "sweetalert2";

const ContactUsForm = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());

    // For demo, just alert the user
    Swal.fire({
      title: "Submitted Successfully!",
      text: "We will get back to you soon",
      icon: "success",
      confirmButtonColor: "orange",
    });
    form.reset();
  };

  return (
    <div className="w-full">
      <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label
            className="text-lg font-medium text-base-content"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border border-gray-300 p-3 rounded-lg"
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label
            className="text-lg font-medium text-base-content"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-gray-300 p-3 rounded-lg"
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label
            className="text-lg font-medium text-base-content"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="border border-gray-300 p-3 rounded-lg"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+880 1234 567 890"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1">
          <label
            className="text-lg font-medium text-base-content"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="border border-gray-300 p-3 rounded-lg"
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label
            className="text-lg font-medium text-base-content"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="border border-gray-300 p-3 rounded-lg"
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            required
          />
        </div>

        {/* Submit Button */}
        <input
          className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg font-medium cursor-pointer"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
