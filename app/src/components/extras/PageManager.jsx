import { useState } from "react";
import { createContext } from "react";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Premium from "../profile/Premium"

export const Context = createContext()
export default function PageManager(){
    const [active, setActive] = useState(0)
    const pages = [

        <Home/>,
        <Profile/>, 
        <Premium/>
    
    ]
        
    return(
        <Context.Provider>
            {
                // La acción del PageManager es alternar las distintas páginas a modo de mediador 
                pages[active]
            }
        </Context.Provider>
        
    )
}