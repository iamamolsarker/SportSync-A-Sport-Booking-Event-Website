import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#111827] py-10 px-5 lg:px-0">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-6">
        <div className="space-y-4 text-gray-300 flex-1 basis-1/9">
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-wider text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text"
          >
            SportSync
          </Link>
          <p className="mt-4">
            Connect with the athletic community and discover amazing sports events near you. Book your next competition and unleash your potential.
          </p>
          <div className="flex gap-3">
            <Link to="https://www.facebook.com/iamamolsarker/">
              <FaFacebookF />
            </Link>
            <Link to="https://twitter.com/iamamolsarker">
              <FaTwitter />
            </Link>
            <Link to="https://www.linkedin.com/in/iamamolsarker/">
              <FaLinkedinIn />
            </Link>
            <FaInstagram />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white font-semibold mb-5">Quick Links</h2>
          <ul className="text-gray-300 space-y-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-event">My Event</Link>
            </li>
            <li>
              <Link to="/manage-event">Manage Event</Link>
            </li>
            <li>
              <Link to="/all-event">All Event</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white font-semibold mb-5">Legal</h2>
          <ul className="text-gray-300 space-y-4">
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/">Dispute Resolution</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg text-white font-semibold mb-5">Legal</h2>
          <ul className="text-gray-300 space-y-4">
            <li className="flex gap-2 items-center">
              <span>
                <FaRegEnvelope size={"20px"} className="text-orange-500" />
              </span>
              <span>info@sportsync.com</span>
            </li>
            <li className="flex gap-2 items-center">
              <span>
                <FaPhoneAlt size={"20px"} className="text-orange-500" />
              </span>
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex gap-2 items-center">
              <span>
                <FaMapMarkerAlt size={"20px"} className="text-orange-500" />
              </span>
              <span>123 Sports Avenue, Athletic City, AC 12345</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto flex justify-between gap-6 mt-10 pt-10 border-t border-gray-700 text-gray-500 flex-col md:flex-row">
        <p>© 2025 SportSync. All rights reserved.</p>
        <p>Built with passion for athlete worldwide</p>
      </div>
    </div>
  );
};

export default Footer;
