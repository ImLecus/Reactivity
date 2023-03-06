import { useState } from "react";
import Home from "../home/Home";
import Profile from "../profile/Profile";
export default function PageManager(){
    const [active, setActive] = useState(0)
    const pages = [<Home action={() => {setActive(1)}}/>,<Profile action={() => {setActive(0)}}/>]
    return(
        <>
            {
                pages[active]
            }
        </>
        
    )
}