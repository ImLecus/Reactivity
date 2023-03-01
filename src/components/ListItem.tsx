import { View, Image } from "react-native"
import { Paragraph } from "./Typography"
import * as Theme from "../data/theme"
export const ListElement = (props:any) => (
    <View style={{width:"100%",borderBottomWidth: 1, borderBottomColor: "#00000055", flexDirection: "row", alignItems:"center",padding: 10}}>
        <Image source={props.src} style={{marginRight: 15, display: (props.src? "flex":"none"), width: 30, height: 30, marginLeft: 20, opacity: 0.7}}/>
        <Paragraph color="black" text={props.text} />
    </View>
)