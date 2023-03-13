import { View, Image, TouchableWithoutFeedback } from "react-native";
import theme from "../../data/theme.json"
import { icons } from "../../data/icons"
import { Paragraph,Whitespace } from "./Components";
import { useState, useContext } from "react"
import { ThemeContext } from "../UserContext";
export default function Task (props) {
    const colorTheme = useContext(ThemeContext)[0]
    const [open,setOpen] = useState(false)
    return(
        <View style={
            {
            width: "100%", minHeight: 60, elevation:1,
            backgroundColor: theme[colorTheme].lightColors.bg, 
            borderRadius: 10, padding: 10, marginBottom: 10}}>

        <View style={{flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
            
            <View style={{flexDirection: "row", alignItems: "center"}}>

                <View style={{width: 40, height: 40, backgroundColor: theme[colorTheme].main, borderRadius: 5, opacity: 1, justifyContent: "center", alignItems: "center"}}>
                    
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
            <Whitespace />
            <View style={{width:"100%", alignItems: "center", backgroundColor:theme[colorTheme].main, padding: 5, borderRadius: 5}}>
                <Paragraph text={"Completar tarea"} color={ theme[colorTheme].bg} opacity={1}/>
            </View>

        </View>
        
        </View>
    )
}