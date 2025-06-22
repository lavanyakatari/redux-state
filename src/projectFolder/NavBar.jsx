import { useSelector } from "react-redux";

export const NavBar = () => {
    const updatedLikes = useSelector((state) => state.counter.value)
    const updatedComments = useSelector((state) => state.newComments.comments)
    const updatedUsers = useSelector((state) => state.newSubscriber.users)
    return(
        <>
        <div className="bg-blue-400 text-white py-7 shadow-lg">
        <div className="flex flex-row justify-between items-center px-4">

        <div className="text-lg"> Likes: <span >{updatedLikes}</span></div>
        <div className="text-lg"> Subscribers: <span>{updatedUsers.length}</span></div>
        <div className="text-lg"> Comments: <span>{updatedComments.length}</span></div>
        </div>
        </div>

       
       
        </>
      
    )
}