import { View, Image, TouchableWithoutFeedback } from "react-native";
import { theme, icons } from "../../data/theme"
import { Paragraph } from "../basic/Components";
import { useState } from "react"
import { ThemeContext } from "../UserContext";
import { useContext } from "react";
export default function Task (props) {
    const colorTheme = useContext(ThemeContext)
    const [open,setOpen] = useState(false)
    return(
        <View style={
            {
            width: "100%", minHeight: 60,
            backgroundColor: (colorTheme == "dark" ? theme[colorTheme].complementary + "30": theme.transparent), 
            borderRadius: 10, padding: 10, marginBottom: 10, borderWidth: (colorTheme == "light"? 1: 0), borderColor: theme[colorTheme].text + "44"}}>

        <View style={{flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
            
            <View style={{flexDirection: "row", alignItems: "center"}}>

                <View style={{width: 40, height: 40, backgroundColor: theme.main, borderRadius: 5, opacity: 1, justifyContent: "center", alignItems: "center"}}>
                    
                    <Image source={icons[props.icon]} style={{tintColor: "white", width: 30, height: 30}}/>
                
                </View>

                <View style={{marginLeft: 20}}>

                <View style={{width: 180}}>

                    <Paragraph text={(props.title.length >= 16 && open == false)? props.title.substring(0,16) + "...": props.title} opacity={1}/> 

                </View>

                </View>

            </View>

            <TouchableWithoutFeedback onPress={() => {setOpen(!open)}} >

                <Image source={require("../../assets/img/arrow_right.png")} style={{transform: [{rotateZ: open == true? "90deg" : "0deg"}],width: 30, height: 30, tintColor: theme[colorTheme].complementary, opacity: 0.6}}/>
            
            </TouchableWithoutFeedback>

        </View>

        <View style={{display: (open == true ? "flex" : "none"), marginTop: 20}}>

            <Paragraph text={props.description ? props.description : "Esta tarea no tiene descripción."}/>

        </View>
        
        </View>
    )
}