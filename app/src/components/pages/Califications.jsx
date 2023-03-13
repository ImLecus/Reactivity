import { ScrollView, TouchableOpacity, Image } from "react-native"
import Cache from "../../data/cache.json"
import Header from "../other/Header"
import Calification from "../other/Calification"
import { icons } from "../../data/icons"
import { Paragraph, Line } from "../other/Components"
import FrontPage from "../other/FrontPage"
import { useState, useContext } from "react"
import { ThemeContext } from "../UserContext"
import theme from "../../data/theme.json"
export default function Califications({navigation}){
    const colorTheme = useContext(ThemeContext)[0]
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
                <Image source={icons.add} style={{marginRight: 20, tintColor: theme[colorTheme].gray}}/>
                <Paragraph text={"Nueva calificación..."}/>
            </TouchableOpacity>
        </ScrollView>     

    </>
    
    )
}