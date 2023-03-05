import { View, Image, TouchableWithoutFeedback } from "react-native";
import * as Theme from "../../data/theme"
import Paragraph from "../basic/Paragraph";
import { useState } from "react"
export default function Task (props:any) {
    const [open,setOpen] = useState(false)
    return(
        <View style={
            {
            width: "100%", minHeight: 60,
            backgroundColor: Theme.colors[Theme.colorTheme].complementary + "30", 
            borderRadius: 10, padding: 10, marginBottom: 10, borderWidth: (Theme.colorTheme == "light"? 1: 0), borderColor: Theme.colors[Theme.colorTheme].text + "44"}}>

        <View style={{flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={{width: 40, height: 40, backgroundColor: Theme.colors[Theme.colorTheme].main, borderRadius: 5, opacity: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={Theme.icons[props.icon]} style={{tintColor: "white", width: 30, height: 30}}/>
                </View>
                <View style={{marginLeft: 20}}>
                <View style={{width: 180}}>
                    <Paragraph text={(props.title.length >= 16 && open == false)? props.title.substring(0,16) + "...": props.title} opacity={1}/> 
                </View>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => {setOpen(!open)}} >
                <Image source={require("../../assets/img/arrow_right.png")} style={{transform: [{rotateZ: open == true? "90deg" : "0deg"}],width: 30, height: 30, tintColor: Theme.colors[Theme.colorTheme].complementary, opacity: 0.6}}/>
            </TouchableWithoutFeedback>
        </View>
        <View style={{display: (open == true ? "flex" : "none"), marginTop: 20}}>
            <Paragraph text={props.description ? props.description : "Esta tarea no tiene descripción."}/>
        </View>
        
        </View>
    )
}