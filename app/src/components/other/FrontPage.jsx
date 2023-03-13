import { View, TouchableWithoutFeedback, Alert } from "react-native";
import theme from "../../data/theme.json";
import { useContext } from "react";
import { ThemeContext } from "../UserContext";
export default function FrontPage({open, w, h}){
    const colorTheme = useContext(ThemeContext)
    return(
        <View style={{display: open? "flex": "none",position: "absolute", width:"100%", height:"100%", backgroundColor: "#00000011", zIndex: 100, justifyContent: "center", alignItems: "center"}}>
            <View style={{width: w? w: "80%", height: h? h: "60%", borderRadius: 10}}>
            </View>
        </View>
    )
}