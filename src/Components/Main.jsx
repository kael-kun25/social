import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Story from "./data/story";
import Card from "./card";
import { useState, useRef } from "react";
import Addpost from "./addpost";
import Post from "./post";

import posts from "./Posts/posts";
const Main = ({ fullnames }) => {
  const [post, setPost] = useState(posts);
  console.log(post);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollableDivRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollableDivRef.current.offsetLeft);
    setScrollLeft(scrollableDivRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollableDivRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollableDivRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollableDivRef.current.offsetLeft);
    setScrollLeft(scrollableDivRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX - scrollableDivRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollableDivRef.current.scrollLeft = scrollLeft - walk;
  };

  const smoothScroll = () => {
    if (!isDragging) return;

    const scrollStep = (scrollLeft - startX) * 0.08; // Adjust the factor for smoother scrolling
    scrollableDivRef.current.scrollLeft -= scrollStep;

    if (Math.abs(scrollStep) > 0.5) {
      requestAnimationFrame(smoothScroll);
    }
  };

  const [stories, setStories] = useState(Story);
  return (
    <div
      className="lg:w-[60%] w-full h-screen bg-blue-gray-50 overflow-scroll"
      style={{
        minHeight: "70px",
        height: "calc(100vh - 70px)",
      }}>
      <div
        ref={scrollableDivRef}
        className="items-center md:h-[200px] h-[130px] md:w-[95%] md:mt-6 w-full flex mx-auto bg-white shadow lg:mt-8 mt-2 rounded-md gap-2 p-2 overflow-hidden scrollable-flex "
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchCancel={handleTouchEnd}>
        <div className="md:min-w-[150px] min-w-[90px]  h-full bg-red-200 rounded-md overflow-hidden relative  cursor-pointer ">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
            className="w-full h-full absolute top-0 left-0 "
          />
          <div className="absolute bottom-0 left-0 w-[full] flex items-center overflow-hidden px-2 text-ellipsis mb-2">
            <button className="font-medium  text-white bg-blue-700 rounded-full text-[20px]">
              <AiOutlinePlusCircle />
            </button>{" "}
            {fullnames.length > 0 && (
              <p className="md:font-medium  text-white md:text-[12px] text-[8px] uppercase cursor-pointer ml-[10px]">
                {fullnames[0]}
              </p>
            )}
          </div>
        </div>
        {stories.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      {/* add post */}
      <Addpost fullnames={fullnames} />

      {/* post */}
      <div className=" md:w-[98%] w-full  mx-auto md:mt-8 mt-4 rounded-md p-2 overflow-hidden">
        {post.map((item) => (
          <Post key={item.id} item={item} fullnames={fullnames} />
        ))}
      </div>
    </div>
  );
};

export default Main;
