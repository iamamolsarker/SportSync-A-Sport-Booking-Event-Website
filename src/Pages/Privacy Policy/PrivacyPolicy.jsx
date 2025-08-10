import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <div className="max-w-[1300px] mx-auto my-14 px-5 lg:px-0">
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-6 text-lg text-base-content">
          <p>
            At SportSync, we are committed to protecting your privacy and
            handling your personal data responsibly. This Privacy Policy
            explains how we collect, use, store, and share your information when
            you use our website, mobile application, and booking services
            ("Platform").
          </p>
          <p>
            <span className="text-base-content font-bold">
              1. Information We Collect
            </span>
            <ul className="list-disc pl-5">
              <li>
                <span className=" font-medium">Personal Information:</span>{" "}
                Name, email address, phone number, billing address, payment
                details, and account login credentials.
              </li>
              <li>
                <span className=" font-medium">Event Booking Information:</span>{" "}
                Details of tickets purchased, events attended, and booking
                history.
              </li>
              <li>
                <span className=" font-medium">Technical Information:</span> IP
                address, browser type, operating system, device type, and usage
                data collected through cookies and similar technologies.
              </li>
            </ul>
          </p>
          <p>
            <span className="text-base-content font-bold">
              2. How We Use Your Information
            </span>
            <ul className="list-disc pl-5">
              <li>To process bookings and payments.</li>
              <li>
                To send booking confirmations, event updates, and customer
                service communications.
              </li>
              <li>To personalize your experience and improve our Platform.</li>
              <li>To comply with legal obligations and prevent fraud.</li>
            </ul>
          </p>
          <p>
            <span className="text-base-content font-bold">3. Data Sharing</span>
            <br />
            We may share your information with:
            <ul className="list-disc pl-5">
              <li>Event organizers for event management purposes.</li>
              <li>Payment processors to complete transactions.</li>
              <li>
                Legal authorities if required by law or to protect our rights.
              </li>
            </ul>
          </p>
          <p>
            <span className="text-base-content font-bold">
              4. Data Retention
            </span>
            <br />
            We retain your personal data only for as long as necessary to
            fulfill the purposes described in this policy or as required by law.
          </p>
          <p>
            <span className="text-base-content font-bold">5. Your Rights</span>
            <br />
            You have the right to access, update, or delete your personal data,
            and to withdraw consent for certain processing activities. To
            exercise these rights, contact us at contact@sportsync.com.
          </p>
          <p>
            <span className="text-base-content font-bold">6. Security</span>
            <br />
            We implement appropriate technical and organizational measures to
            protect your data from unauthorized access, alteration, or loss.
          </p>
          <p>
            <span className="text-base-content font-bold">7. Changes</span>
            <br />
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
