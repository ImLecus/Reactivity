import { Text } from "react-native";
import * as Theme from "../../data/theme"
export default function Paragraph(props:any){
    return(
        <Text style={{
            fontFamily: "Inter",
            fontSize: 18,
            color: props.color ? props.color : Theme.colors[Theme.colorTheme].text,
            opacity: props.opacity ? props.opacity : 0.7
        }}>
            {props.text}
        </Text>
    )
}