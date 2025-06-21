import { useSelector } from "react-redux";

export const NavBar = () => {
    const updatedLikes = useSelector((state) => state.counter.value)
    const updatedComments = useSelector((state) => state.newComments.comments)
    const updatedUsers = useSelector((state) => state.newSubscriber.users)
    return(
        <>
        <div>
        Likes:{updatedLikes}
        </div>
        <div>
            Subcribers:{updatedUsers.length}
        </div>
        <div>
            Comments:{updatedComments.length}
        </div>

        </>
      
    )
}