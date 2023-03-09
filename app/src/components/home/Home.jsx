import {View} from "react-native"
import Cache from "../../data/cache.json"
import Header from "../extras/Header"
import Overview from "./Overview"
import Stats from "./Stats"
import { useState, useContext } from "react"
import {Title, Paragraph, Whitespace, Button} from "../basic/Components"
import { ThemeContext } from "../UserContext"
import {theme} from "../../data/theme"
export default function Home(){

    const colorTheme = useContext(ThemeContext)
    const [page,setPage] = useState(0)
    return(
    <View style={{backgroundColor: theme[colorTheme].bg}}>
        {
            // Header que lleva al menú
        }
        <Header id={0}/>

        <View style={{padding: 30, marginTop: 70}}>

            <Title text={"Bienvenido de nuevo, " + Cache.user.username +"."}/>

            <Paragraph text={"Un día menos para cumplir tus metas."}/>
            <Whitespace />

            <View style={{flexDirection: "row", justifyContent: "center"}}>

                <Button text="General" active={page} action={() => {setPage(0)}} page={0}/>

                <Button text="Estadísticas" active={page} action={() => {setPage(1)}} page={1}/>

            </View>

            <View>

                <Overview active={page}/>
                
                <Stats active={page}/>
            </View>


        </View>     

    </View>
    
    )
}