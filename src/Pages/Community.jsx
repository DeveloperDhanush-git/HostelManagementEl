import React, { useState } from "react";
import Header from "../Components/Header";
import { FaChevronRight } from "react-icons/fa";
import Megaphone from "../assets/megaphone.png";

const Community = () => {
  const [showInput, setShowInput] = useState(false);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  const handleCreatePost = () => {
    setShowInput(true);
  };

  const handleSubmitPost = () => {
    if (post.trim()) {
      setPosts([post, ...posts]); // New posts appear at the top
      setPost("");
      setShowInput(false);
    }
  };

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col relative">
      <div className="flex-grow p-4">
        {/* Header */}
        <Header button="Community" />

        {/* Groups & View All Section */}
        <div className="flex justify-between items-center mt-4 px-4 ml-4">
          <h2 className="text-sm font-semibold mt-1">Groups</h2>
          <div className="flex items-center gap-1 text-[#69205D] cursor-pointer">
            <span className="text-sm font-medium mx-2">View all</span>
            <FaChevronRight className="text-sm" />
          </div>
        </div>

        {/* Group Item */}
        <div className="px-4 mt-5 ml-4 flex flex-col">
          <div className="w-12 h-12 bg-[#69205D] text-white flex items-center justify-center rounded-full text-sm font-medium">
            HMS
          </div>
        </div>

        {/* Display Posts (Below HMS, Above Image) */}
        <div className="mt-6 w-full px-4 ml-4 h-30 overflow-y-scroll">
          {posts.map((p, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg mt-2 shadow-md">
              {p}
            </div>
          ))}
        </div>

        {/* Illustration and Message */}
        <div className="flex flex-col items-center justify-center mt-10">
          <img src={Megaphone} alt="Announcement" className="mb-4" />
          <p className="text-center text-gray-600 px-6">
            Communicate with your tenants and staff by sharing content to groups.
          </p>

          {/* Create Post Button */}
          <button
            className="mt-6 bg-[#69205D] text-white px-6 py-2 rounded-lg font-medium"
            onClick={handleCreatePost}
          >
            Create post
          </button>
        </div>

        {/* Input Box (Centered Below Create Post Button) */}
        {showInput && (
          <div className="mt-4 w-2/3 mx-auto flex flex-col items-center">
            <textarea
              className="border border-gray-300 p-2 w-full rounded-lg"
              placeholder="Write something..."
              value={post}
              onChange={(e) => setPost(e.target.value)}
            ></textarea>
            <button
              className="mt-2 bg-[#69205D] text-white px-10 py-2 rounded-lg"
              onClick={handleSubmitPost}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
