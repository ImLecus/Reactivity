import { View, Image } from "react-native";
import { Paragraph, Line, Whitespace } from "../basic/Components";
import { theme } from "../../data/theme";
import { icons } from "../../data/icons"
export default function Note({date,mood,message}){
    return(
        <View style={{marginBottom: 30}}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Paragraph text={date} opacity={1}/>
                <Line w={"40%"} opacity={0.8}/>
                <Image source={icons.mood[mood]} style={{width: 30, height: 30, tintColor: theme.mood[mood]}}/>
            </View>
            <Whitespace />
            <Paragraph text={message} opacity={0.65}/>
        </View>
    )
}