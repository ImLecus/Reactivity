import { View, Image } from "react-native"
import { Paragraph } from "./Typography"
import * as Theme from "../data/theme"
export const ListElement = (props:any) => (
    <View style={{width:"100%",borderBottomWidth: 1, borderBottomColor: "#00000055", flexDirection: "row", alignItems:"center"}}>
        <Image source={require("../assets/img/cover.png")} style={{marginRight: 15, tintColor: Theme.colors[Theme.colorTheme][props.color], display: (props.src? "flex":"none")}}/>
        <Image source={props.src} style={{width: 35, height: 35, tintColor: Theme.colors[Theme.colorTheme].bg, position: "absolute",left:3}}/>
        <Paragraph color="black" text={props.text} />
    </View>
)