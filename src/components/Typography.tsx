import {Text, StyleSheet, View} from "react-native"
import * as Theme from "../data/theme"

export const Title = (props:any) => (<Text style={[styles.title,{color: (props.color ? props.color : Theme.colors[Theme.colorTheme].text )}]}>{props.text}</Text>)
export const Subtitle = (props:any) => (<Text style={[styles.subtitle,{color: (props.color ? props.color : Theme.colors[Theme.colorTheme].text)}]}>{props.text}</Text>)
export const Paragraph = (props:any) => (<Text style={[styles.paragraph,{color: (props.color ? props.color : Theme.colors[Theme.colorTheme].text)}]}>{props.text}</Text>)
export const Whitespace = () => (<View style={{height: 50, width: 10}}></View>)

const styles = StyleSheet.create({
    title : {
        fontSize: 40,
        fontFamily: "Montserrat",
        fontWeight: "bold",
        margin: 5
    },
    paragraph : {
        fontSize: 18,
        fontFamily: "SourceSansPro",
        fontWeight: "normal",
        margin: 5,
    },
    subtitle : {
        fontSize: 24,
        fontFamily: "Montserrat",
        fontWeight: "bold",
        margin: 5,
        opacity: 0.7
    }
})