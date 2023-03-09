import { View } from "react-native";
import * as Theme from "../../data/theme"
import {theme} from "../../data/theme"
export default function ProgressBar ({width, color, progress}) {
    return(
        <View style={{
                width:  width ? width :  "70%",
                borderRadius: 10, 
                height: 15, 
                backgroundColor: Theme.lightColors.main,
                marginTop: 10
            }}>
            <View style={{
                width : (progress + "%"), 
                backgroundColor: color ? color :  theme.main,
                height: "100%", borderRadius: 10
                }}>
            </View>
        </View>
    )
}