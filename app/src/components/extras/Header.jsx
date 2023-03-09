import { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Language from "../../data/language.json"
import {theme} from "../../data/theme"
import { style } from "../stylesheet";
import { ThemeContext } from "../UserContext";

export default function Header({id,navigation}){

    const colorTheme = useContext(ThemeContext)

    let date = new Date();
    let titles = [
        Language.days[date.getDay()] + date.getDate() + Language.months[date.getMonth()]
    ]
    return(
        <>
            <View style={style.header}>

                <TouchableOpacity>

                    <Image source={require("../../assets/img/menu.png")} style={{width: 35, height: 35, tintColor:theme[colorTheme].text}}/>
                
                </TouchableOpacity>

                <Text style={{fontFamily : "Inter", color:theme[colorTheme].text}}>{titles[id]}</Text>

                <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                    <Image source={require("../../assets/img/me.jpg")} style={style.profile}/>
                </TouchableOpacity>

            </View>
        </>
        
    )
}