// import React from "react";
// import { useSelector } from "react-redux";

// export const NewComments = () =>{
//     const newComment = useSelector((state) => state.newComments.comments)
//     return(
//         <div>
//             Comments:
//             {newComment.map ((item,index) => {
//                 return(
//                   <div key={index}>
//                     {item}
//                   </div>
//                 )
//             })}
//         </div>
//     ) 
// }
import React, { useState } from "react"
import { useSelector } from "react-redux"

export const NewComments = () => {
     const newComment = useSelector((state) => state.newComments.comments)    
    return(
        <div>
            Comments:
           {newComment.map((item,index) => {
            return(
                <div key={index}>
                    {item}
                </div>
            )
           })}
        </div>
    )

}
