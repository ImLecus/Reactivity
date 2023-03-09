import { useState, useContext } from "react";
import Home from "../home/Home";
import { ThemeContext } from "../UserContext";

export default function PageManager(){

    const [colorTheme,setTheme] = useState("dark")

    return(
        <ThemeContext.Provider value={colorTheme}>
            {
                <Home/>
            }
        </ThemeContext.Provider>
        
    )
}