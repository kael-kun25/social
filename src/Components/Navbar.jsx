import React, { useState, useEffect, useRef } from "react";
import { BiHomeHeart, BiSearch } from "react-icons/bi";
import { FiMoon } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { Input } from "@material-tailwind/react";
import { BsCalendar3 } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineVideoSettings } from "react-icons/md";
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { GiVideoConference } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { CgPlayButtonR } from "react-icons/cg";
import { BsStopwatch, BsSun } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = ({ fullnames }) => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const [isMoonVisible, setIsMoonVisible] = useState(true);

  const toggleIcon = () => {
    setIsMoonVisible(!isMoonVisible);
  };

  return (
    <div>
      <div className="w-full p-4 bg-white navshadow px-6 h-[70px] flex items-center justify-between">
        <div className="flex items-center gap-2 h-full w-full">
          <h1 className="text-2xl font-extrabold text-blue-700">
            Social Media
          </h1>

          <div className="hidden md:block">
            <div className="flex items-center h-full gap-3 ml-5">
              <BiHomeHeart className="text-xl text-blue-gray-800 lg:block  cursor-pointer md:hidden" />
              <button onClick={toggleIcon}>
                {isMoonVisible ? (
                  <FiMoon className="text-xl text-blue-gray-800 cursor-pointer lg:block md:hidden" />
                ) : (
                  <BsSun className="text-xl text-blue-gray-800 cursor-pointer lg:block md:hidden" />
                )}
              </button>
              <div className="flex items-center justify-center lg:w-[400px] md:w-[300px]  w-[20px] relative pl-3">
                <BiSearch className="text-xl text-blue-gray-800 absolute right-0 z-30 cursor-pointer mr-[10px]" />
                <Input
                  type="text"
                  placeholder="Search here"
                  className="!border !border-gray-300 bg-white text-gray-800 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 md:block hidden"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          {" "}
          <div className="flex items-center md:justify-end gap-5 h-full w-full  z-40">
            <AiOutlineMessage className="text-2xl text-blue-gray-800 cursor-pointer" />
            <FiUserPlus className="text-2xl text-blue-gray-800 cursor-pointer" />
            <div className="flex items-center md:w-[220px]  h-full">
              <BiSolidUserCircle className="text-3xl text-blue-900 cursor-pointer mr-2" />

              {fullnames.length > 0 && (
                <p className="font-medium  text-blue-gray-700 text-[13px] uppercase cursor-pointer">
                  {fullnames[0]}
                </p>
              )}
            </div>
            <Link to="/login">
              {" "}
              <button>
                <BiLogOutCircle className="text-2xl text-red-800 cursor-pointer" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center md:gap-3 z-50">
          <AiOutlineMessage className="text-xl text-blue-gray-800 cursor-pointer lg:hidden mx-[4px]" />
          <button onClick={toggleIcon} className="mx-[4px]">
            {isMoonVisible ? (
              <FiMoon className="text-xl text-blue-gray-800 cursor-pointer lg:hidden" />
            ) : (
              <BsSun className="text-xl text-blue-gray-800 cursor-pointer lg:hidden" />
            )}
          </button>
          <BiSearch className="text-xl text-blue-gray-800 mx-[4px] md:hidden  lg:hidden" />

          <button onClick={toggleMenu} className="mx-[4px]">
            {isOpen ? (
              <AiOutlineClose className="text-2xl  lg:hidden text-blue-gray-900 font-medium" />
            ) : (
              <div className="text-2xl  lg:hidden text-blue-gray-900 font-medium">
                <RxHamburgerMenu />
              </div>
            )}
          </button>

          <div
            ref={menuRef}
            className={`lg:hidden w-[60%] md:w-[40%] h-screen fixed bg-white top-0 sideshadow  ${
              isOpen
                ? "left-0 transition-ease-in duration-300"
                : "left-[-350px] transition-ease-in duration-300"
            }`}>
            <div className="p-4">
              <h1 className="text-2xl font-extrabold text-blue-700">
                Social Media
                <div className="flex items-start py-2 flex-col gap-4  h-[90vh] overflow-scroll">
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
                    <p className="font-medium text-base text-blue-gray-700  cursor-pointer ">
                      Friends
                    </p>
                  </div>
                  <div className="flex items-center">
                    <MdGroups2 className="text-xl text-amber-700 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700  cursor-pointer ">
                      Groups
                    </p>
                  </div>
                  <div className="flex items-center">
                    <AiFillShop className="text-xl text-blue-900 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700  cursor-pointer">
                      Market Place
                    </p>
                  </div>
                  <div className="flex items-center">
                    <CgPlayButtonR className="text-xl text-blue-900 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700   cursor-pointer">
                      Watch
                    </p>
                  </div>
                  <div className="flex items-center">
                    <BsStopwatch className="text-xl text-blue-900 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700   cursor-pointer">
                      Memories
                    </p>
                  </div>
                  <div className="w-[100%] mx-auto h-[1px] bg-gray-400 mt-2"></div>

                  <span className="font-medium text-base text-blue-gray-700   cursor-pointer">
                    Your Shortcuts
                  </span>
                  <div className="flex items-center">
                    <BsCalendar3 className="text-xl text-blue-700 cursor-pointer mr-2" />
                    <p className="font-medium text-base  text-blue-gray-700  cursor-pointer ">
                      Events
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaGamepad className="text-xl text-cyan-700 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700  cursor-pointer ">
                      Gaming
                    </p>
                  </div>
                  <div className="flex items-center">
                    <RiGalleryFill className="text-xl text-blue-900 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700  cursor-pointer">
                      Gallery
                    </p>
                  </div>
                  <div className="flex items-center">
                    <MdOutlineVideoSettings className="text-xl text-red-900 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700   cursor-pointer">
                      Videos
                    </p>
                  </div>
                  <div className="flex items-center">
                    <BsFillEnvelopeHeartFill className="text-xl text-blue-900 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700   cursor-pointer">
                      Messages
                    </p>
                  </div>
                  {/* other */}
                  <div className="w-[100%] mx-auto h-[1px] bg-gray-400 mt-2"></div>
                  <span className="font-medium text-base text-blue-gray-700 ">
                    Others
                  </span>
                  <div className="flex items-center">
                    <FaPeopleCarry className="text-xl text-blue-700 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700  cursor-pointer ">
                      Fundraiser
                    </p>
                  </div>
                  <div className="flex items-center">
                    <GiVideoConference className="text-xl text-cyan-700 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700  cursor-pointer ">
                      Tutorial
                    </p>
                  </div>
                  <div className="flex items-center">
                    <GiBookshelf className="text-xl text-blue-900 cursor-pointer mr-2" />
                    <p className="font-medium text-base text-blue-gray-700   cursor-pointer">
                      Courses
                    </p>
                  </div>
                  <div>
                    <Link to="/login" className="">
                      <button className="flex items-center">
                        <BiLogOutCircle className="text-2xl text-red-800 cursor-pointer" />
                        <p className="font-medium text-base text-blue-gray-700  ml-1 cursor-pointer">
                          Log out
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
