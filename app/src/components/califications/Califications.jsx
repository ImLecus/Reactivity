import { ScrollView, TouchableOpacity, Image } from "react-native"
import Cache from "../../data/cache.json"
import Header from "../extras/Header"
import Calification from "./Calification"
import { icons } from "../../data/theme"
import { Paragraph, Line } from "../basic/Components"
export default function Califications({navigation}){
    return(
    <>
        <Header navigation={navigation} id={2}/>
        <ScrollView style={{padding: 30, marginTop: 70}}>
            {
                Cache.califications.map(calification => (
                    <Calification note={calification.note} category={calification.category} date={calification.date}/>
                ))
            }
            <Line />
            <TouchableOpacity style={{flexDirection:"row", alignItems: "center", width: "100%", marginTop: 20}}>
                <Image source={icons.add} style={{marginRight: 20, opacity: 0.6}}/>
                <Paragraph text={"Nueva calificación..."}/>
            </TouchableOpacity>
        </ScrollView>     

    </>
    
    )
}