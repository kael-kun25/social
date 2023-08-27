import React from "react";
import { FcGallery } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
const addpost = ({ fullnames }) => {
  return (
    <div className="  md:w-[95%] md:mt-6 w-full  mx-auto bg-white shadow lg:mt-8 mt-2 rounded-md gap-2 p-4 overflow-hidden scrollable-flex ">
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
          className="w-[40px] h-[40px] rounded-full"
          alt=""
        />

        {fullnames.length > 0 && (
          <p className="md:font-normal  text-blue-gray-800 md:text-[12px] text-[15px]  cursor-pointer ml-[10px]">
            {fullnames[0]}
          </p>
        )}
      </div>
      <div className="w-[100%]">
        <input
          type="text"
          placeholder="What's on your mind..."
          className="rounded p-2 w-full outline-none focus:ring-0 border-b-2  text-[13px] mt-4 "
        />
      </div>
      <div className="flex items-center gap-2 w-full text-2xl mt-3 justify-between">
        <div className="flex gap-3">
          <div className="flex gap-3">
            <button>
              <FcGallery />
            </button>
            <p className="text-sm text-blue-gray-600">add image</p>
          </div>
          <div className="flex gap-3">
            <button>
              <CiLocationOn className="text-orange-900 " />
            </button>
            <p className="text-sm text-blue-gray-600">add location</p>
          </div>
        </div>
        <button className="mt-2 bg-blue-400 text-white p-2 rounded text-xs">
          Share
        </button>
      </div>
    </div>
  );
};

export default addpost;
