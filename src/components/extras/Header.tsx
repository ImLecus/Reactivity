import { View, StyleSheet, Image, Text } from "react-native";
import Cache from "../../data/cache.json"
import Language from "../../data/language.json"
import * as Theme from "../../data/theme"
const style = StyleSheet.create({
    header : {
        width: "100%",
        position: "absolute",
        top: 0,
        padding: 30,
        flexDirection: "row",
        justifyContent :"space-between",
        alignItems: "center"
    },
    img: {
        width: 35,
        height: 35,
        borderRadius: 50
    }
})

export default function Header(){
    let date = new Date();
    return(
        <View style={style.header}>
            <Image source={require("../../assets/img/menu.png")} style={{width: 35, height: 35, tintColor: Theme.colors[Theme.colorTheme].text}}/>
            <Text style={{fontFamily : "Inter", color: Theme.colors[Theme.colorTheme].text}}>{Language.days[date.getDay()] + date.getDate() + Language.months[date.getMonth()]}</Text>
            <Image source={require("../../assets/img/profile_def.png")} style={style.img}/>
        </View>
    )
}