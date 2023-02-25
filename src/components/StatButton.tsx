import { View, StyleSheet } from "react-native"
import {Title, Whitespace, Paragraph, Subtitle} from "./Typography"
import * as Theme from "../data/theme"
const styles = StyleSheet.create({
    button : {
        backgroundColor : "red",
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 10
    }
})

export default function StatButton(props:any){
    return(
        <View style={[styles.button,{backgroundColor: Theme.colors[props.color]}]}>
            <Title text="Generales" />
        </View>
    )
}