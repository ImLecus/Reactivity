import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
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

export default function Header(props:any){
    let date = new Date();
    let buttons = [ <TouchableOpacity>
                        <Image source={require("../../assets/img/menu.png")} style={{width: 35, height: 35, tintColor: Theme.colors[Theme.colorTheme].text}}/>
                    </TouchableOpacity>, 
                    <TouchableOpacity onPress={props.return}>
                        <Image source={require("../../assets/img/arrow_left.png")} style={{width: 35, height: 35, tintColor: Theme.colors[Theme.colorTheme].text}}/>
                    </TouchableOpacity>
                ]
    let titles = [
        Language.days[date.getDay()] + date.getDate() + Language.months[date.getMonth()],
        "Perfil"
    ]
    return(
        <>
            <View style={style.header}>
                {
                    buttons[props.active]
                }
                <Text style={{fontFamily : "Inter", color: Theme.colors[Theme.colorTheme].text}}>{titles[props.active]}</Text>
                <TouchableOpacity onPress={props.action} style={{opacity: props.active == 1? 0 : 1}}>
                    <Image source={require("../../assets/img/me.jpg")} style={style.img}/>
                </TouchableOpacity>
            </View>
        </>
        
    )
}