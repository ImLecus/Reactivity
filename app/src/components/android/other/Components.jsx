import { Text, View, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import theme from "../../../data/theme.json"
import { ThemeContext } from "../../UserContext";
import { style } from "../stylesheet"
import { useContext, useState } from "react";

export const Paragraph = ({text, color, opacity = 0.7, bold}) => {
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <Text style={[style.p, {
            color: color ? color : theme[colorTheme].text,
            opacity: opacity,
            fontWeight: bold? "bold" : "normal" 
        }]}>
            {text}
        </Text>
    )
}
export const Subtitle = ({text, color, opacity=0.8}) => {
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <Text style={[ style.subtitle , {
            color: color ? color : theme[colorTheme].text,
            opacity: opacity}]}>
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
export const Whitespace = ({h=20}) => (
    <View style={{width: 20, height: h}}/>
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
export const Line = ({w = 20, opacity = 0.4}) => {
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <View style={{height: 1, width: w, backgroundColor: theme[colorTheme].text, opacity: opacity}}/>
    )
   
}
export const ProgressBar =  ({width = "70%", color, progress}) => {
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <View style={{
                width:  width,
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
export const Streak = ({day}) => {
    const colorTheme = useContext(ThemeContext)[0]
    return(
        <View style={{width: 50, height: 50, backgroundColor: theme[colorTheme].green , justifyContent: "center", alignItems: "center", margin: 5, borderRadius: 20}}>
            <Subtitle text={day} opacity={1} color={theme[colorTheme].bg}/>
        </View>
    )
}
export const Calification = ({note, category, date}) => {
    const colorTheme = useContext(ThemeContext)[0]
    let color = note >= 8 ? "excellent" :
            note >= 6 ? "good" :
            note >= 4 ? "mid" :
            note >= 2 ? "bad" :
            "awful"
    return(
        <View style={{flexDirection: "row"}}>
            <View style={[style.calification,{backgroundColor: theme[colorTheme].mood[color]}]}>
                <Paragraph text={note} color={theme[colorTheme].bg} opacity={1}/>
            </View>
            <View style={{marginLeft: 20, marginTop: 5}}>
                <Paragraph text={category} opacity={1}/>
                <Paragraph text={date}/>
            </View>
        </View>
    )
}