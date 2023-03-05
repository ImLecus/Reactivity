import { View, Image} from "react-native"
import Title from "../basic/Title"
import Paragraph from "../basic/Paragraph"
import { Whitespace } from "../basic/Whitespace"
import Cache from "../../data/cache.json"
import { Button } from "../basic/Buttons"


import { useState } from "react"
export default function Profile(){
    const [page,setPage] = useState(0)
    return(
    <View style={{padding: 30, marginTop: 70, alignItems: "center"}}>
        <Image source={require("../../assets/img/me.jpg")} style={{borderRadius: 100, width: 150, height: 150, marginBottom: 30}}/>
        <Title text={Cache.user.username}/>
        <Whitespace />
    </View>
    )
}