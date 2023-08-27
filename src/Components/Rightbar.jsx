import React from "react";

const Rightbar = () => {
  return (
    <div
      className="w-[20%] h-screen bg-blue-gray-50 hidden lg:block  overflow-scroll "
      style={{ minHeight: "70px", height: "calc(100vh - 70px)" }}>
      <div className="  w-[90%] mx-auto shadow bg-white mt-8 rounded-md p-2">
        <div className="text-sm text-blue-gray-700 py-2">
          Suggestions for you
        </div>
        <div className="flex w-full items-center justify-between mt-2 px-2">
          <div className="flex items-center gap-2 ">
            <img
              src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <p className="text-xs text-blue-gray-900 w-[50px] overflow-hidden text-ellipsis ">
              Will Smith
            </p>
          </div>
          <div className="lg:flex-col lg:flex xl:flex-row ">
            <button className=" text-xs text-white border-2 bg-blue-700 p-1 px-2 rounded-md">
              Follow
            </button>
            <button className="text-xs text-white border-2 bg-red-400 p-1 px-2 rounded-md">
              Dismiss
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 px-2">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1529797228130-fe918ce6d915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <p className="text-xs text-blue-gray-900 w-[50px] overflow-hidden text-ellipsis ">
              Bruno Mars
            </p>
          </div>
          <div className="lg:flex-col lg:flex xl:flex-row ">
            <button className="text-xs text-white border-2 bg-blue-700 p-1 px-2 rounded-md">
              Follow
            </button>
            <button className="text-xs text-white border-2 bg-red-400 p-1 px-2 rounded-md">
              Dismiss
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 px-2">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <p className="text-xs text-blue-gray-900 w-[50px] overflow-hidden text-ellipsis ">
              Michael Johnson
            </p>
          </div>
          <div className="lg:flex-col lg:flex xl:flex-row ">
            <button className="text-xs text-white border-2 bg-blue-700 p-1 px-2 rounded-md">
              Follow
            </button>
            <button className="text-xs text-white border-2 bg-red-400 p-1 px-2 rounded-md">
              Dismiss
            </button>
          </div>
        </div>
      </div>
      <div className="  h-[180px] w-[90%] mx-auto shadow bg-white mt-8 rounded-md p-2">
        <div className="text-sm text-blue-gray-700">Latest Activities</div>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <p className="text-xs text-gray-900">Will Smith</p>
            <p className=" text-xs text-gray-800">
              Change their cover picture.
            </p>
            <p className="text-xs text-gray-800">1 min ago.</p>
          </div>
        </div>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1529862021-d416a7f1a5cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <p className="text-xs text-gray-900">Patrick Kael</p>
            <p className=" text-xs text-gray-800">Liked a post.</p>
            <p className="text-xs text-gray-800">1 min ago.</p>
          </div>
        </div>
        <div></div>
      </div>

      <div className="  w-[90%] mx-auto shadow bg-white mt-8 rounded-md p-2">
        <div className="text-sm text-blue-gray-700">Online Friends</div>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2">
            <div className="relative w-[40px] h-[40px] ">
              <img
                src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="bg-green-500 h-[10px] w-[10px] absolute top-0 right-0 z-10 rounded-full"></div>
            </div>

            <p className="text-sm text-gray-900">Will Smith</p>
          </div>
        </div>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2">
            <div className="relative w-[40px] h-[40px] ">
              <img
                src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="bg-green-500 h-[10px] w-[10px] absolute top-0 right-0 z-10 rounded-full"></div>
            </div>

            <p className="text-sm text-gray-900">Will Smith</p>
          </div>
        </div>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2">
            <div className="relative w-[40px] h-[40px] ">
              <img
                src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="bg-green-500 h-[10px] w-[10px] absolute top-0 right-0 z-10 rounded-full"></div>
            </div>

            <p className="text-sm text-gray-900">Will Smith</p>
          </div>
        </div>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2">
            <div className="relative w-[40px] h-[40px] ">
              <img
                src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="bg-green-500 h-[10px] w-[10px] absolute top-0 right-0 z-10 rounded-full"></div>
            </div>

            <p className="text-sm text-gray-900">Will Smith</p>
          </div>
        </div>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2">
            <div className="relative w-[40px] h-[40px] ">
              <img
                src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="bg-green-500 h-[10px] w-[10px] absolute top-0 right-0 z-10 rounded-full"></div>
            </div>

            <p className="text-sm text-gray-900">Will Smith</p>
          </div>
        </div>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2">
            <div className="relative w-[40px] h-[40px] ">
              <img
                src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="bg-green-500 h-[10px] w-[10px] absolute top-0 right-0 z-10 rounded-full"></div>
            </div>

            <p className="text-sm text-gray-900">Will Smith</p>
          </div>
        </div>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2">
            <div className="relative w-[40px] h-[40px] ">
              <img
                src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="bg-green-500 h-[10px] w-[10px] absolute top-0 right-0 z-10 rounded-full"></div>
            </div>

            <p className="text-sm text-gray-900">Will Smith</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Rightbar;
