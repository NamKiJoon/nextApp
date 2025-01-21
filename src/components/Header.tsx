import { useEffect } from "react"

export const Header = () =>{
    useEffect(()=>{
        const user = {
            firstName: "Angela",
            lastName: "Davis",
            role: "Professor",
          }
           
          console.log(user)
    })
    return(
        <div>
            Header
        </div>
    )
}