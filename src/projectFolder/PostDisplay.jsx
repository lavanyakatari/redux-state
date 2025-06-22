import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "./redux/counterSlice";
import CommentForm from "./CommentForm";
import { NewComments } from "./NewComments";
import UserForm from "./UserForm";
import { NewUser } from "./NewUser";

export const PostDisplay = () => {
  const [showComments, setShowComments] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(increment());
  };

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const toggleUser = () => {
    setShowUser((prev) => !prev);
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 p-4">
      {/* Action Bar */}
      <div className="bg-green-500 flex justify-between items-center rounded-lg px-6 py-3 shadow-md">
        <button
          className="bg-white text-green-600 font-semibold px-4 py-2 rounded hover:bg-green-100 transition"
          onClick={toggleUser}
        >
          Subscribers
        </button>
        <button
          className="bg-white text-green-600 font-semibold px-4 py-2 rounded hover:bg-green-100 transition"
          onClick={toggleComments}
        >
          Comment
        </button>
        <button
          className="bg-white text-green-600 font-semibold px-4 py-2 rounded hover:bg-green-100 transition"
          onClick={handleLike}
        >
          Like
        </button>
      </div>

      {/* Toggle Forms */}
      <div className="mt-6 space-y-4">
        {showComments && (
          <div className="bg-white p-4 rounded shadow">
            <CommentForm />
          </div>
        )}
        {showUser && (
          <div className="bg-white p-4 rounded shadow">
            <UserForm />
          </div>
        )}
      </div>

      {/* Display Lists */}
      <div className="mt-8 bg-gray-100 p-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Latest Comments</h2>
          <NewComments />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">New Subscribers</h2>
          <NewUser />
        </div>
      </div>
    </div>
  );
};



