import { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import theme from "../../data/theme.json"
import { style } from "../stylesheet";
import { ThemeContext } from "../UserContext";

export default function ReturnHeader({title,navigation,returnTo}){

    const colorTheme = useContext(ThemeContext)[0]


    return(
        <>
            <View style={[style.header]}>

                <TouchableOpacity onPress={()=>navigation.navigate(returnTo)}>

                    <Image source={require("../../assets/img/arrow_left.png")} style={{width: 35, height: 35, tintColor:theme[colorTheme].text}}/>
                
                </TouchableOpacity>

                <Text style={{fontFamily : "Inter", color:theme[colorTheme].text}}>{title}</Text>

                <TouchableOpacity style={{opacity: 0}}>

                    <Image source={require("../../assets/img/arrow_left.png")} style={{width: 35, height: 35, tintColor:theme[colorTheme].text}}/>
                
                </TouchableOpacity>

            </View>
        </>
        
    )
}