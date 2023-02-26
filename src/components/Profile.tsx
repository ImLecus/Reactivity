import { View, Text, Image } from "react-native"
import Cache from "../data/cache.json"
import { Whitespace, Title, Paragraph, Subtitle } from "./Typography"
import { ListElement } from "./ListItem"
export default function Profile(props:any){
    return(
        <View  style={{display: (props.state == 3 ? "flex":"none")}}>
            <Whitespace />
            <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 30}}>
                <Image source={require("../assets/img/profile_def.png")} style={{width: 100, height: 100, borderColor: "black", borderWidth: 2, borderRadius: 50}}></Image>
                <View>
                    <Title text={Cache.user.username}/>
                    <Subtitle text={"Nivel " + Cache.user.level}/>
                </View>
            </View>
            <View style={{alignItems: "center",opacity: 0.7}}>
                <Paragraph text={"520 puntos más para el nivel " + (Cache.user.level + 1)}/>
            </View>
            <Whitespace />
            <ListElement text="Amigos"/>
            <ListElement text="Configuración"/>
            <ListElement text="Logros"/>
            <ListElement text="Cerrar sesión"/>
        </View>
        
    )
}