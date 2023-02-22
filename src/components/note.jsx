import { useState } from "react";
export default function Note(props){
    let [text,setText] = useState(props.text)
    let [full,setFull] = useState("false")
    let [day,month] = (props.date? props.date: "01/0").split("/")
    let months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiempre","octubre","noviembre","diciembre"]
    return(
        <div className="note">
            <div className={"noteTitle" + " " + (props.emoScore ? props.emoScore : "")}>
                <p>{parseInt(day)} de {months[month]}</p>
                <img src={"./"+props.emoScore+".svg"}/>
            </div>
            <div className="noteContent">
                {text}
            </div>   
            {
                text.length > 150 &&
                    <button className={"noteSeeMore" + " " + (full? "fullContent" : "")} onClick={() => {text.length == 153? setText(props.text): setText(props.text.substring(0,150) + "..."); setFull(!full)}}>
                        <img src="./expand.svg"/>
                    </button>  
            } 
            
        </div>
    )
}