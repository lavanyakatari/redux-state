import React from "react"
import { useSelector } from "react-redux"

export const NewUser = () => {
    const newUser = useSelector((state) => state.newSubscriber.users)
    return(
        <div>
            Subscriber:
            {newUser.map((item,index) => {
                return(
                <div>
                    <ul key={index}>
                        <li>{item}</li>
                    </ul>
                    
                </div>
                )
            })}
        </div>
    )
}