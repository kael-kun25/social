import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { CgPlayButtonR } from "react-icons/cg";
import { BsStopwatch } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineVideoSettings } from "react-icons/md";
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { GiVideoConference } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
const Leftbar = ({ fullnames }) => {
  return (
    <div
      className="w-[20%] bg-white overflow-y-scroll left hidden lg:block"
      style={{ minHeight: "70px", height: "calc(100vh - 70px)" }}>
      <div>
        <div className="flex items-start p-5 flex-col gap-4  h-full ">
          <div className="flex items-center">
            <BiSolidUserCircle className="text-xl text-blue-900 cursor-pointer mr-2" />
            {fullnames.length > 0 && (
              <p className="font-medium  text-blue-gray-700 text-[13px] uppercase cursor-pointer">
                {fullnames[0]}
              </p>
            )}
          </div>
          <div className="flex items-center">
            <FaUserFriends className="text-xl text-green-400 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700  cursor-pointer ">
              Friends
            </p>
          </div>
          <div className="flex items-center">
            <MdGroups2 className="text-xl text-amber-700 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700  cursor-pointer ">
              Groups
            </p>
          </div>
          <div className="flex items-center">
            <AiFillShop className="text-xl text-blue-900 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700  cursor-pointer">
              Market Place
            </p>
          </div>
          <div className="flex items-center">
            <CgPlayButtonR className="text-xl text-red-500 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700   cursor-pointer">
              Watch
            </p>
          </div>
          <div className="flex items-center">
            <BsStopwatch className="text-xl text-blue-900 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700   cursor-pointer">
              Memories
            </p>
          </div>
          {/* shortcuts */}
          <div className="w-[100%] mx-auto h-[1px] bg-gray-400 mt-2"></div>
          <span className="font-medium  text-sm text-blue-gray-700 ">
            Your Shortcuts
          </span>
          <div className="flex items-center">
            <BsCalendar3 className="text-xl text-blue-700 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700  cursor-pointer ">
              Events
            </p>
          </div>
          <div className="flex items-center">
            <FaGamepad className="text-xl text-cyan-700 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700  cursor-pointer ">
              Gaming
            </p>
          </div>
          <div className="flex items-center">
            <RiGalleryFill className="text-xl text-blue-900 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700  cursor-pointer">
              Gallery
            </p>
          </div>
          <div className="flex items-center">
            <MdOutlineVideoSettings className="text-xl text-red-900 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700   cursor-pointer">
              Videos
            </p>
          </div>
          <div className="flex items-center">
            <BsFillEnvelopeHeartFill className="text-xl text-blue-900 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700   cursor-pointer">
              Messages
            </p>
          </div>
          {/* other */}
          <div className="w-[100%] mx-auto h-[1px] bg-gray-400 mt-2"></div>
          <span className="font-medium  text-sm text-blue-gray-700 ">
            Others
          </span>
          <div className="flex items-center">
            <FaPeopleCarry className="text-xl text-blue-700 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700  cursor-pointer ">
              Fundraiser
            </p>
          </div>
          <div className="flex items-center">
            <GiVideoConference className="text-xl text-cyan-700 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700  cursor-pointer ">
              Tutorial
            </p>
          </div>
          <div className="flex items-center">
            <GiBookshelf className="text-xl text-blue-900 cursor-pointer mr-2" />
            <p className="font-medium  text-blue-gray-700  cursor-pointer">
              Courses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
