import { View, Image } from "react-native"
import { Subtitle } from "./Components"
import {useContext} from "react"
import {ThemeContext} from "../UserContext"
import theme from "../../data/theme.json"
export default function Streak({day}){
    const [colorTheme,setTheme] = useContext(ThemeContext)
    return(
        <View style={{width: 50, height: 50, backgroundColor: theme[colorTheme].green , justifyContent: "center", alignItems: "center", margin: 5, borderRadius: 20}}>
            <Subtitle text={day} opacity={1} color={theme[colorTheme].bg}/>
        </View>
    )
}