import React,{useState} from "react"
import { useDispatch } from "react-redux"
import { addUsers } from "./redux/userSlice"
const UserForm = () => {
    const [userName,setUserName] = useState("")

    const dispatch = useDispatch();

    const userHandler = (e) => {
        setUserName(e.target.value)
    }
    const submitHandler = (e) => {
    e.preventDefault();


    dispatch(addUsers(userName));
    setUserName("");
  };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <h4>User Name</h4>
              <div>
                <input type="text" value={userName} onChange={userHandler} placeholder="Enter Name"/>
            
              <button type="submit">Submit</button>
              
               </div>
            </form>
        </div>
    )
}

export default UserForm

