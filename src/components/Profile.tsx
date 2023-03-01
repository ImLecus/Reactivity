import { View, Image, TouchableWithoutFeedback,Text } from "react-native"
import Cache from "../data/cache.json"
import { Whitespace, Title, Paragraph, Subtitle } from "./Typography"
import { ListElement } from "./ListItem"
import * as Theme from "../data/theme"
export default function Profile(props:any){
    return(
        <View style={{display: (props.state == 1 ? "flex":"none"), alignItems :"center"}}>
            <Whitespace /><Whitespace />
            <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 30, alignItems: "center"}}>
                <Image source={require("../assets/img/profile_def.png")} style={{width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: Theme.colors[Theme.colorTheme].complementary, marginRight: 15}}></Image>
                <Title text={Cache.user.username}/>
            </View>
            <TouchableWithoutFeedback>
                <View style={{flexDirection: "row",backgroundColor : Theme.colors[Theme.colorTheme].main, borderRadius: 5, paddingLeft: 15, paddingRight: 10, elevation: 10}}>
                    <Image source={require("../assets/img/settings.png")} style={{tintColor: "white", width: 25, height: 25, top: 5, right: 5}}/>
                    <Paragraph text="Editar perfil" color="white" opacity={1}/>
                </View>
            </TouchableWithoutFeedback>
            <Whitespace />
            <ListElement text="Amigos" src={require("../assets/img/friends.png")}/>
            <ListElement text="Tema" src={require("../assets/img/palette.png")}/>
            <ListElement text="Logros" src={require("../assets/img/star.png")}/>
            <ListElement text="Cerrar sesión" src={require("../assets/img/logout.png")}/>
        </View>
        
    )
}