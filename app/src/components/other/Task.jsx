import { View, TouchableOpacity, Image } from "react-native";
import theme from "../../data/theme.json"
import { Paragraph } from "./Components";
import { useContext, useState } from "react"
import { ThemeContext } from "../UserContext";
import { style } from "../stylesheet";
export default function Task ({title}) {
    const colorTheme = useContext(ThemeContext)[0]
    const [completed,setComplete] = useState(false)
    return(
        <View style={ [style.task, { backgroundColor: theme[colorTheme].lightColors.bg}]}>
            
            <View style={{flexDirection: "row", alignItems: "center"}}>

                <TouchableOpacity onPress={()=>{setComplete(!completed)}}>
                    <View style={[style.checkbox, {
                        borderColor: completed ? theme[colorTheme].transparent :theme[colorTheme].text + "33", 
                        backgroundColor: (completed? theme[colorTheme].mood.excellent :theme[colorTheme].transparent),
                        elevation : completed?3:0
                        }]} >
                            <Image source={require("../../assets/img/done.png")} style={{
                                tintColor: ( colorTheme == "dark"? theme[colorTheme].text:theme[colorTheme].bg), 
                                width: 25, height: 25,
                                opacity: (completed? 1:0)
                                }}/>
                        </View>
                </TouchableOpacity>
                

                <View style={{width: 180}}>

                    <Paragraph text={title} opacity={1}/> 

                </View>

            </View>
        </View>
        
    )
}