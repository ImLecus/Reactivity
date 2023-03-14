import { Text, View, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import theme from "../../../data/theme.json"
import { ThemeContext } from "../../UserContext";
import { style } from "../stylesheet"
import { useContext, useState } from "react";

export const Paragraph = ({text, color, opacity, bold}) => {
    const colorTheme = useContext(ThemeContext)[0]
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
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <Text style={[ style.subtitle , {
            color: color ? color : theme[colorTheme].text,
            opacity: opacity ? opacity : 0.8 }]}>
            {text}
        </Text>
    )
}
export const Title = ({text}) => {
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <Text style={[style.title, { color: theme[colorTheme].text}]}>
            {text}
        </Text>
    )
}
export const Whitespace = ({h}) => (
    <View style={{width: 20, height: (h? h : 20)}}/>
)
export const Button = ({action, text}) => {
    const colorTheme = useContext(ThemeContext)[0]
    return(
    <TouchableOpacity onPress={action}>
        <View style={[style.button,{backgroundColor : theme[colorTheme].green}]}>
            <Paragraph text={text} color={theme[colorTheme].bg} bold opacity={1}/>
        </View>
    </TouchableOpacity>
    )
}
export const Line = ({w, opacity}) => {
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <View style={{height: 1, width: w? w : 20, backgroundColor: theme[colorTheme].text, opacity: opacity? opacity: 0.4}}/>
    )
   
}
export const ProgressBar =  ({width, color, progress}) => {
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <View style={{
                width:  width ? width :  "70%",
                borderRadius: 10, 
                height: 10, 
                backgroundColor: theme[colorTheme].lightColors.green,
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
export const Checkbox = ({initialValue = false}) => {
    const [completed,setComplete] = useState(initialValue)
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <TouchableOpacity onPress={()=>{setComplete(!completed)}}>
            <View style={[style.checkbox, {
                        borderColor: completed ? theme[colorTheme].transparent :theme[colorTheme].text + "33", 
                        backgroundColor: (completed? theme[colorTheme].mood.excellent :theme[colorTheme].transparent),
                        elevation : completed?3:0
                        }]} >
                <Image source={require("../../../assets/img/done.png")} style={{tintColor: ( colorTheme == "dark"? theme[colorTheme].text:theme[colorTheme].bg), width: 25, height: 25, opacity: (completed? 1:0)}}/>
            </View>
        </TouchableOpacity>
    )
}