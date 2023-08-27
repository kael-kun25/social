import React from "react";

const card = ({ item }) => {
  console.log(item.fullName);
  return (
    <div className="md:min-w-[150px] min-w-[90px] h-full bg-red-200 rounded-md overflow-hidden relative cursor-pointer">
      <div>
        <img
          src={item.imageUrl}
          alt=""
          className="w-full h-full absolute top-0 left-0 object-cover  "
        />

        <div className="absolute bottom-0 left-0 w-[full] flex items-center overflow-hidden px-2 text-ellipsis mb-2 ">
          <p className="font-medium  text-white  md:text-[12px] text-[8px] uppercase cursor-pointer ml-[10px]">
            {item.fullName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default card;
