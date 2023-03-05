import { useState } from "react";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Header from "./Header";
import Sidebar from "./Sidebar";
export default function PageManager(){
    const [active, setActive] = useState(0)
    const pages = [<Home />,<Profile />]
    return(
        <>
            {
                pages[active]
            }
            <Header action={() => {setActive(1)}} active={active} return={() => {setActive(0)}}/>
            <Sidebar />
        </>
        
    )
}