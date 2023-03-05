import { Image } from "react-native";
import Paragraph from "../basic/Paragraph";
import { LinearGradient } from "expo-linear-gradient";
import * as Theme from "../../data/theme"
import ProgressBar from "../basic/ProgressBar";
export default function Widget(props:any){
    return(
        <LinearGradient 
            style={{width: 150, height: 150,borderRadius: 5, backgroundColor: "red", margin: 5, elevation: 20, alignItems: "center", padding: 20}}
            colors={[Theme.colors[Theme.colorTheme][props.color], Theme.lightColors[props.color]]}
            start={[0, 0]} end={[1, 1]}
        >
        <Image source={Theme.icons[props.icon]} style={{margin: 10, tintColor: "white", display: "none"}}/>
        <Paragraph text={props.text} opacity={1} color="white"/>
        <ProgressBar progress="70" color="white" width="100%"/>
        </LinearGradient>
    )
}