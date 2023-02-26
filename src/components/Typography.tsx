import {Text, View} from "react-native"
import * as Theme from "../data/theme"

export const Title = (props:any) => (
    <Text style={{
        color: (props.color ? props.color : Theme.colors[Theme.colorTheme].text ),
        fontSize: 40 * (props.size? props.size : 1),
        fontFamily: "JosefinSans",
        fontWeight: "bold",
        margin: 5
        }}>
        {props.text}
    </Text>
    )

export const Subtitle = (props:any) => (
    <Text style={{
        color: (props.color ? props.color : Theme.colors[Theme.colorTheme].text),
        fontSize: 24,
        fontFamily: "JosefinSans",
        fontWeight: "bold",
        margin: 5,
        opacity: 0.7
        }}>
        {props.text}
    </Text>)
export const Paragraph = (props:any) => (
    <Text style={{
        color: props.color ? props.color : Theme.colors[Theme.colorTheme].text,
        fontSize: 18,
        fontFamily: "Inter",
        fontWeight: "normal",
        margin: 5,
        opacity: props.opacity? props.opacity : 0.7
        }}>
        {props.text}
    </Text>)
export const Whitespace = () => (<View style={{height: 50, width: 10}}></View>)