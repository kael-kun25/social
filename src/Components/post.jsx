import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
const post = ({ item, fullnames }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likes); // Initialize with initial likes value
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };
  return (
    <div className="mb-10 bg-white shadow rounded-lg p-4">
      <div className="gap-2">
        <div className="flex gap-2  items-center justify-between w-full">
          <div className="flex items-center gap-3 mb-3">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <div>
              {" "}
              <p className="text-sm font-semibold text-blue-gray-900">
                {item.fullName}
              </p>{" "}
              <p className="text-xs text-blue-gray-900">a few seconds ago.</p>
            </div>
          </div>
          <div className="mr-[10px] mb-[20px]">
            <button className="text-1xl font-extrabold">...</button>
          </div>
        </div>
      </div>

      <p className=" lg:text-sm text-[12px] text-blue-gray-700">{item.desc}</p>
      <div className="w-full overflow-hidden rounded-md mt-4">
        <img
          src={item.imageUrl}
          alt=""
          className="w-full lg:h-[500px] h-[300px] md:h-[400px]  object-cover"
        />
      </div>
      <div className="mt-2">
        <p className="lg:text-base text-blue-gray-900 font-normal text-[12px]">
          {likeCount} Likes
        </p>
      </div>
      <div className="w-full mt-4 flex items-center gap-8">
        <button onClick={handleLikeClick}>
          {liked ? (
            <AiFillHeart className="text-2xl text-red-500" />
          ) : (
            <AiOutlineHeart className="text-2xl" />
          )}
        </button>
        <button onClick={handleCommentClick}>
          <FaRegComments className="text-2xl" />
        </button>
        <FiShare2 className="text-2xl" />
      </div>
      {showCommentInput && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
            className="rounded p-2 w-full outline-none focus:ring-0 border-b-2  text-[13px]"
          />
          <button
            onClick={handleAddComment}
            className="mt-2 bg-blue-400 text-white p-2 rounded text-xs">
            Add Comment
          </button>
        </div>
      )}
      {comments.length > 0 && (
        <div className="mt-4">
          <h3 className="font-normal text-[12px]">Comments:</h3>
          {comments.map((comment, index) => (
            <div className="flex w-full relative">
              <div
                key={index}
                className="text-blue-gray-700 flex items-center gap-1">
                {fullnames.length > 0 && (
                  <p className="font-medium  text-blue-gray-700 text-[13px] cursor-pointer">
                    {fullnames[0]}:
                  </p>
                )}{" "}
                <p className="font-medium  text-blue-gray-700 text-[13px]">
                  {comment}
                </p>
              </div>
              <button
                onClick={() => handleDeleteComment(index)}
                className="text-red-600 text-[13px] cursor-pointer absolute top-0 right-0">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default post;
