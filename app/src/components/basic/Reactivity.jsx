import { Text, View } from "react-native";
import * as Theme from "../../data/theme"
import { style } from "../stylesheet"
export const Paragraph = ({text, color, opacity}) => (
        <Text style={[style.p, {
            color: color ? color : Theme.colors[Theme.colorTheme].text,
            opacity: opacity ? opacity : 0.7
        }]}>
            {text}
        </Text>
)
export const Subtitle = ({text, color, opacity}) => (
        <Text style={[ style.subtitle , {
            color: color ? color : Theme.colors[Theme.colorTheme].text,
            opacity: opacity ? opacity : 0.7 }]}>
            {text}
        </Text>
)
export const Title = ({text}) => (
        <Text style={[style.title, { color: Theme.colors[Theme.colorTheme].text}]}>
            {text}
        </Text>
)
export const Page = (props) => (
    <View style={{}}>

    </View>
)
export const Whitespace = ({height}) => (
    <View style={{width: 1, height:  height? height:20}}/>
)