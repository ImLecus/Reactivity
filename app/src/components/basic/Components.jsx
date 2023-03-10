import { Text, View, TouchableOpacity } from "react-native";
import theme from "../../data/theme.json"
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
        <View style={[style.button,{backgroundColor: active == page ? theme[colorTheme].main : "#00000000"}]}>
            <Text style={{color : theme[colorTheme].text, fontWeight: "bold" }}>{text}</Text>
        </View>
    </TouchableOpacity>
    )
}
export const Line = ({w, opacity}) => {
    const colorTheme = useContext(ThemeContext)
    return(
        <View style={{height: 1, width: w? w : 20, backgroundColor: theme[colorTheme].text, opacity: opacity? opacity: 0.4}}/>
    )
   
}
export const ProgressBar =  ({width, color, progress}) => {
    const colorTheme = useContext(ThemeContext)
    return(
        <View style={{
                width:  width ? width :  "70%",
                borderRadius: 10, 
                height: 15, 
                backgroundColor: theme[colorTheme].lightColors.main,
                marginTop: 10
            }}>
            <View style={{
                width : (progress + "%"), 
                backgroundColor: color ? color :  theme[colorTheme].main,
                height: "100%", borderRadius: 10
                }}>
            </View>
        </View>
    )
}