import { View } from "react-native"
import {Paragraph} from "./Components"
import theme from "../../data/theme.json"
import { useContext } from "react"
import { ThemeContext } from "../UserContext"
export default function Calification({note, category, date}){
    const colorTheme = useContext(ThemeContext)[0]
    let color = note >= 8 ? "excellent" :
            note >= 6 ? "good" :
            note >= 4 ? "mid" :
            note >= 2 ? "bad" :
            "awful"
    return(
    <View style={{flexDirection: "row"}}>
        <View style={{elevation: 1, marginBottom: 20 , width: 60, height: 60, borderRadius: 50, backgroundColor: theme[colorTheme].mood[color], justifyContent: "center", alignItems: "center"}}>
            <Paragraph text={note} color={"white"} opacity={1}/>
        </View>
        <View style={{marginLeft: 20, marginTop: 5}}>
            <Paragraph text={category} opacity={1}/>
            <Paragraph text={date}/>
        </View>
    </View>
    
    )
}