import {Text} from "react-native";
import * as Theme from "../../data/theme"
export default function Title(props:any){
    return(
        <Text style={{
            fontFamily: "JosefinSans",
            fontSize: 38,
            fontWeight: "bold",
            color: Theme.colors[Theme.colorTheme].text
        }}>
            {props.text}
        </Text>
    )
}