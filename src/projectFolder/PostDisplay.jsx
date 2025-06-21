import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "./redux/counterSlice";
import CommentForm from "./CommentForm";
import { NewComments } from "./NewComments";

export const PostDisplay = () => {
    const [showComments,setShowComments] = useState(false)
    const dispatch = useDispatch();
    const countHandler = () => {
        dispatch(increment())
    }
    const commentHandler = () => {
        setShowComments(true)
    }

    return(
        <>
        <button>Subcribers</button>
        <button onClick={commentHandler}>Comment</button>
        <button onClick={countHandler}>Like</button>
        <div>
            {showComments && <CommentForm/> }
        </div>
        <div>
            <NewComments/>
        </div>
        </>

    )
}

