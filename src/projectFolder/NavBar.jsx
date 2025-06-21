import { useSelector } from "react-redux";

export const NavBar = () => {
    const updatedLikes = useSelector((state) => state.counter.value)
    const updatedComments = useSelector((state) => state.newComments.comments)
    return(
        <>
        <div>
        Likes:{updatedLikes}
        </div>
        <div>
            Subcribers:
        </div>
        <div>
            Comments:{updatedComments.length}
        </div>

        </>
      
    )
}