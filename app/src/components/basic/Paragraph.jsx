import { Text } from "react-native";
import * as Theme from "../../data/theme"
import { style } from "../stylesheet"
export default function Paragraph(props){
    return(
        <Text style={[style.p, {
            color: props.color ? props.color : Theme.colors[Theme.colorTheme].text,
            opacity: props.opacity ? props.opacity : 0.7
        }]}>
            {props.text}
        </Text>
    )
}