import { View, Text, Image } from "react-native";
import User from "../data/user.json"
import { Whitespace, Title, Paragraph, Subtitle } from "./Typography";
export default function Profile(props:any){
    return(
        <View  style={{display: (props.state == 3 ? "flex":"none"), padding: 30}}>
            <Whitespace />
            <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                <Image source={require("../assets/img/profile_def.png")} style={{width: 100, height: 100, borderColor: "black", borderWidth: 2, borderRadius: 50}}></Image>
                <View>
                    <Title text={User.username}/>
                    <Subtitle text={"Nivel " + User.level}/>
                </View>
            </View>
            <View style={{alignItems: "center",opacity: 0.7}}>
                <Paragraph text={"520 puntos más para el nivel " + (User.level + 1)}/>
            </View>
            
        </View>
        
    )
}