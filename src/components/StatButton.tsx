import { View, StyleSheet, Image, Text } from "react-native"
import {Title, Whitespace, Paragraph, Subtitle} from "./Typography"
import * as Theme from "../data/theme"
const styles = StyleSheet.create({
    button : {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    bg: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        position: "absolute",
        bottom: 0,
        right: 10,
        elevation: 10
    }
})

export default function StatButton(props){
    return(
        <View style={[styles.button,{backgroundColor: Theme.colors[props.color]}]}>
            <Image source={Theme.icons.write} style={[styles.bg,{tintColor: Theme.lightColors[props.color]}]}></Image>
            <Title color="white" text="Generales"/>
        </View>
    )
}