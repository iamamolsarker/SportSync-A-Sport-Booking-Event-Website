import React from "react";
import { LuUsers, LuCalendar, LuTrophy } from "react-icons/lu";
import basketImg from "../assets/bassketball.avif";
import runImg from "../assets/running.avif";
import tennisImg from "../assets/tennis.avif";
import swimImg from "../assets/new swimming.avif";
import cycleImg from "../assets/cycling.avif";
import volleyballImg from "../assets/volleyball.avif";

const PopularSports = () => {
  return (
    <div className="px-5 md:px-1 py-14">
      <div className="w-full lg:max-w-1/3 mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-semibold mb-5">
          Popular Sports
        </h2>
        <p className="text-lg font-medium text-base-content">
          Explore the most popular sports on our platform with active
          communities and regular events
        </p>
      </div>
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-[#e2e8f0] bg-white rounded-xl shadow-sm">
          <div className="relative">
            <img
              src={basketImg}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <div className="hero-overlay absolute top-0 bottom-auto"></div>
            <h2 className="text-2xl font-bold text-white absolute z-10 bottom-5 left-5 ">
              Basketball
            </h2>
          </div>
          <div className="px-5 pt-6 flex gap-14 justify-center items-center">
            <div className="flex flex-col items-center">
              <LuUsers size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">2450+</h2>
              <p className="text-sm text-gray-500">Participants</p>
            </div>
            <div className="flex flex-col items-center">
              <LuCalendar size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">145</h2>
              <p className="text-sm text-gray-500">Events</p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <span className="divider"></span>
            <div className="flex gap-1 items-center justify-center">
              <LuTrophy className="text-orange-500" />
              <p className="text-sm text-gray-500">
                Growing community with regular competitions
              </p>
            </div>
          </div>
        </div>
        <div className="border border-[#e2e8f0] bg-white rounded-xl shadow-sm">
          <div className="relative">
            <img
              src={runImg}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <div className="hero-overlay absolute top-0 bottom-auto"></div>
            <h2 className="text-2xl font-bold text-white absolute z-10 bottom-5 left-5 ">
              Running
            </h2>
          </div>
          <div className="px-5 pt-6 flex gap-14 justify-center items-center">
            <div className="flex flex-col items-center">
              <LuUsers size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">3250+</h2>
              <p className="text-sm text-gray-500">Participants</p>
            </div>
            <div className="flex flex-col items-center">
              <LuCalendar size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">97</h2>
              <p className="text-sm text-gray-500">Events</p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <span className="divider"></span>
            <div className="flex gap-1 items-center justify-center">
              <LuTrophy className="text-orange-500" />
              <p className="text-sm text-gray-500">
                Growing community with regular competitions
              </p>
            </div>
          </div>
        </div>
        <div className="border border-[#e2e8f0] bg-white rounded-xl shadow-sm">
          <div className="relative">
            <img
              src={tennisImg}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <div className="hero-overlay absolute top-0 bottom-auto"></div>
            <h2 className="text-2xl font-bold text-white absolute z-10 bottom-5 left-5 ">
              Tennis
            </h2>
          </div>
          <div className="px-5 pt-6 flex gap-14 justify-center items-center">
            <div className="flex flex-col items-center">
              <LuUsers size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">1800+</h2>
              <p className="text-sm text-gray-500">Participants</p>
            </div>
            <div className="flex flex-col items-center">
              <LuCalendar size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">67</h2>
              <p className="text-sm text-gray-500">Events</p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <span className="divider"></span>
            <div className="flex gap-1 items-center justify-center">
              <LuTrophy className="text-orange-500" />
              <p className="text-sm text-gray-500">
                Growing community with regular competitions
              </p>
            </div>
          </div>
        </div>
        <div className="border border-[#e2e8f0] bg-white rounded-xl shadow-sm">
          <div className="relative">
            <img
              src={swimImg}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <div className="hero-overlay absolute top-0 bottom-auto"></div>
            <h2 className="text-2xl font-bold text-white absolute z-10 bottom-5 left-5 ">
              Swimming
            </h2>
          </div>
          <div className="px-5 pt-6 flex gap-14 justify-center items-center">
            <div className="flex flex-col items-center">
              <LuUsers size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">1650+</h2>
              <p className="text-sm text-gray-500">Participants</p>
            </div>
            <div className="flex flex-col items-center">
              <LuCalendar size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">52</h2>
              <p className="text-sm text-gray-500">Events</p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <span className="divider"></span>
            <div className="flex gap-1 items-center justify-center">
              <LuTrophy className="text-orange-500" />
              <p className="text-sm text-gray-500">
                Growing community with regular competitions
              </p>
            </div>
          </div>
        </div>
        <div className="border border-[#e2e8f0] bg-white rounded-xl shadow-sm">
          <div className="relative">
            <img
              src={cycleImg}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <div className="hero-overlay absolute top-0 bottom-auto"></div>
            <h2 className="text-2xl font-bold text-white absolute z-10 bottom-5 left-5 ">
              Cycling
            </h2>
          </div>
          <div className="px-5 pt-6 flex gap-14 justify-center items-center">
            <div className="flex flex-col items-center">
              <LuUsers size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">2100+</h2>
              <p className="text-sm text-gray-500">Participants</p>
            </div>
            <div className="flex flex-col items-center">
              <LuCalendar size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">78</h2>
              <p className="text-sm text-gray-500">Events</p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <span className="divider"></span>
            <div className="flex gap-1 items-center justify-center">
              <LuTrophy className="text-orange-500" />
              <p className="text-sm text-gray-500">
                Growing community with regular competitions
              </p>
            </div>
          </div>
        </div>
        <div className="border border-[#e2e8f0] bg-white rounded-xl shadow-sm">
          <div className="relative">
            <img
              src={volleyballImg}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <div className="hero-overlay absolute top-0 bottom-auto"></div>
            <h2 className="text-2xl font-bold text-white absolute z-10 bottom-5 left-5 ">
              Volleyball
            </h2>
          </div>
          <div className="px-5 pt-6 flex gap-14 justify-center items-center">
            <div className="flex flex-col items-center">
              <LuUsers size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">1400+</h2>
              <p className="text-sm text-gray-500">Participants</p>
            </div>
            <div className="flex flex-col items-center">
              <LuCalendar size="24px" className="text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">43</h2>
              <p className="text-sm text-gray-500">Events</p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <span className="divider"></span>
            <div className="flex gap-1 items-center justify-center">
              <LuTrophy className="text-orange-500" />
              <p className="text-sm text-gray-500">
                Growing community with regular competitions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSports;
