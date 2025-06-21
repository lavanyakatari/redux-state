// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux';
// import { addComments } from './redux/commentSlice';


// const CommentForm = () => {
//     const [userComment, setUserComment] = useState('');

//     const dispatch = useDispatch()

//     const commentHandler = (e)=>{
//         setUserComment(e.target.value)
//     }

//     const submitHandler = (e)=>{
//             e.preventDefault();
//             console.log("New Comments: ", userComment)
//             dispatch(addComments(userComment))
//             setUserComment("")
//     }


//   return (
//     <div>
//         <form onSubmit={submitHandler}>
//             <h4>Leave your comment</h4>
//             <div>
//                 <textarea value={userComment} onChange={commentHandler} id="" cols="50" rows="4"></textarea>
//             </div>
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default CommentForm

import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addComments } from "./redux/commentSlice"

const CommentForm = () => {
    const [userComment,setUserComment] = useState('')

    const dispatch = useDispatch()

    const commentHandler = (e) => {
        setUserComment(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addComments(userComment))
        setUserComment("")
    }
    return(
        <div>
           <form onSubmit={submitHandler}>
            <h4>Leave Your Comment</h4>
              <div>
                <textarea value={userComment} onChange={commentHandler} id=" " cols=" " rows=" "></textarea>
              </div>
              <button>Submit</button>
           </form>
        </div>
    )
}

export default CommentForm