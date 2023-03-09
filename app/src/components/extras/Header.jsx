import { View, Image, Text, TouchableOpacity } from "react-native";
import Language from "../../data/language.json"
import * as Theme from "../../data/theme"
import { style } from "../stylesheet";

export default function Header(props){
    let date = new Date();
    let titles = [
        Language.days[date.getDay()] + date.getDate() + Language.months[date.getMonth()],
        "Perfil"
    ]
    return(
        <>
            <View style={style.header}>
                <TouchableOpacity >
                    <Image source={require("../../assets/img/menu.png")} style={{width: 35, height: 35, tintColor: Theme.colors[Theme.colorTheme].text}}/>
                </TouchableOpacity>
                <Text style={{fontFamily : "Inter", color: Theme.colors[Theme.colorTheme].text}}>{titles[props.id]}</Text>
                <TouchableOpacity onPress={props.action} style={{opacity: props.id == 1? 0 : 1}}>
                    <Image source={require("../../assets/img/me.jpg")} style={style.profile}/>
                </TouchableOpacity>
            </View>
        </>
        
    )
}