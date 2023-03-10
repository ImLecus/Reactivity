import { View } from "react-native"
import {Paragraph} from "../basic/Components"
import { theme } from "../../data/theme"
export default function Calification({note, category, date}){
    let color = note >= 8 ? "excellent" :
            note >= 6 ? "good" :
            note >= 4 ? "mid" :
            note >= 2 ? "bad" :
            "awful"
    return(
    <View style={{flexDirection: "row"}}>
        <View style={{ marginBottom: 20 , width: 60, height: 60, borderRadius: 50, backgroundColor: theme.mood[color], justifyContent: "center", alignItems: "center"}}>
            <Paragraph text={note} color={"white"} opacity={1}/>
        </View>
        <View style={{marginLeft: 20, marginTop: 5}}>
            <Paragraph text={category} opacity={1}/>
            <Paragraph text={date}/>
        </View>
    </View>
    
    )
}