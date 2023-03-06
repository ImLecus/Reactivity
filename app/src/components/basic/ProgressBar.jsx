import { View } from "react-native";
import * as Theme from "../../data/theme"
export default function ProgressBar (props) {
    return(
        <View style={{
                width:  props.width ? props.width :  "70%",
                borderRadius: 10, 
                height: 15, 
                backgroundColor: Theme.lightColors.main,
                marginTop: 10
            }}>
            <View style={{
                width : (props.progress + "%"), 
                backgroundColor: props.color ? props.color :  Theme.colors[Theme.colorTheme].main,
                height: "100%", borderRadius: 10
                
                }}>
            </View>
        </View>
    )
}