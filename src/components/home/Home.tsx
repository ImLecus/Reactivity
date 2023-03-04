import { View, Text } from "react-native"
import Title from "../basic/Title"
import Subtitle from "../basic/Subtitle"
import { Whitespace } from "../basic/Whitespace"
import Cache from "../../data/cache.json"

import Overview from "./Overview"
export default function Home(){
    return(
    <View style={{padding: 30, marginTop: 70}}>
        <Title text={"Bienvenido de nuevo, " + Cache.user.username +"."}/>
        <Whitespace />
        <View style={{flexDirection: "row"}}>
            <Text>General</Text>
            <Text>Estadísticas</Text>
        </View>
        <View>
            <Overview />
        </View>
    </View>
    )
}