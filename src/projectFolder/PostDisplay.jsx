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
    <>
      <div>
        <button onClick={toggleUser}>Subscribers</button>
        <button onClick={toggleComments}>Comment</button>
        <button onClick={handleLike}>Like</button>
      </div>

      <div>
        {showComments && <CommentForm />}
        {showUser && <UserForm />}
      </div>

      <div>
        <NewComments />
        <NewUser />
      </div>
    </>
  );
};


