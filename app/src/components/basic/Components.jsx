import { Text, View, TouchableOpacity } from "react-native";
import { theme } from "../../data/theme"
import { ThemeContext } from "../UserContext";
import { style } from "../stylesheet"
import { useContext } from "react";

export const Paragraph = ({text, color, opacity, bold}) => {
    const colorTheme = useContext(ThemeContext)
    return(
        <Text style={[style.p, {
            color: color ? color : theme[colorTheme].text,
            opacity: opacity ? opacity : 0.7,
            fontWeight: bold? "bold" : "normal" 
        }]}>
            {text}
        </Text>
    )
}
export const Subtitle = ({text, color, opacity}) => {
    const colorTheme = useContext(ThemeContext)
    return(
        <Text style={[ style.subtitle , {
            color: color ? color : theme[colorTheme].text,
            opacity: opacity ? opacity : 0.7 }]}>
            {text}
        </Text>
    )
}
export const Title = ({text}) => {
    const colorTheme = useContext(ThemeContext)
    return(
        <Text style={[style.title, { color: theme[colorTheme].text}]}>
            {text}
        </Text>
    )
}
export const Whitespace = ({h}) => (
    <View style={{width: 20, height: (h? h : 20)}}/>
)
export const Button = ({action, active, text, page}) => {
    const colorTheme = useContext(ThemeContext)
    return(
    <TouchableOpacity onPress={action}>
        <View style={[style.button,{backgroundColor: active == page ? theme.main : "#00000000"}]}>
            <Text style={{color : theme[colorTheme].text, fontWeight: "bold" }}>{text}</Text>
        </View>
    </TouchableOpacity>
    )
}
export const Line = () => {
    const colorTheme = useContext(ThemeContext)
    return(
        <View style={{height: 1, minWidth: 20, backgroundColor: theme[colorTheme].text + "44"}}/>
    )
   
}