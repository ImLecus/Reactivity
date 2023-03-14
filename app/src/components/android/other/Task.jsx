import { View } from "react-native";
import theme from "../../../data/theme.json"
import { Paragraph, Checkbox } from "./Components";
import { useContext } from "react"
import { ThemeContext } from "../../UserContext";
import { style } from "../stylesheet";
export default function Task ({title}) {
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <View style={ [style.task, { backgroundColor: theme[colorTheme].lightColors.bg}]}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Checkbox />
                <View style={{width: 180, marginLeft: 20}}>
                    <Paragraph text={title} opacity={1}/> 
                </View>
            </View>
        </View>
        
    )
}