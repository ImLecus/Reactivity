import {Text } from "react-native";
import * as Theme from "../../data/theme"
export default function Subtitle(props){
    return(
        <Text style={{
            fontFamily: "JosefinSans",
            fontSize: 24,
            fontWeight: "bold",
            color: props.color ? props.color : Theme.colors[Theme.colorTheme].text,
            opacity: props.opacity ? props.opacity : 0.7
        }}>
            {props.text}
        </Text>
    )
}