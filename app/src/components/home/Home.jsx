import { View } from "react-native"
import Cache from "../../data/cache.json"
import { Button } from "../basic/Buttons"
import Header from "../extras/Header"
import Overview from "./Overview"
import Stats from "./Stats"
import { useState } from "react"
import * as Theme from "../../data/theme"
import {Title, Paragraph, Whitespace} from "../basic/Components"

export default function Home(props){
    const [page,setPage] = useState(0)
    return(
    <>
        {
            // Header que lleva al menú
        }
        <Header id={0} action={props.action}/>

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
        {  /*  
        <View style={{position: "absolute", backgroundColor: Theme.colors[Theme.colorTheme].bg + "99", width: "100%", height: "100%"}}>
            <Text>ola</Text>
        </View> */
}
    </>
    
    )
}