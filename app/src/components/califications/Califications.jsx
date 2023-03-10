import { ScrollView, TouchableOpacity, Image, Text } from "react-native"
import Cache from "../../data/cache.json"
import Header from "../extras/Header"
import Calification from "./Calification"
import { icons } from "../../data/theme"
import { Paragraph, Line } from "../basic/Components"
import FrontPage from "../extras/FrontPage"
import { useState } from "react"
export default function Califications({navigation}){
    const [open,setOpen] = useState(false)
    return(
    <>
        <FrontPage open={open}/>
        <Header navigation={navigation} id={2} />
        <ScrollView style={{padding: 30, marginTop: 70}}>
            {
                Cache.califications.map(calification => (
                    <Calification note={calification.note} category={calification.category} date={calification.date} id={Cache.califications.indexOf(calification)}/>
                ))
            }
            <Line w={"100%"} opacity={0.1}/>
            <TouchableOpacity style={{flexDirection:"row", alignItems: "center", width: "100%", marginTop: 20}} onPress={() => {setOpen(true)}}>
                <Image source={icons.add} style={{marginRight: 20, opacity: 0.6}}/>
                <Paragraph text={"Nueva calificación..."}/>
            </TouchableOpacity>
        </ScrollView>     

    </>
    
    )
}