import { ScrollView} from "react-native"
import Cache from "../../../data/cache.json"
import Header from "../other/Header"
import Overview from "./Overview"
import { Title, Paragraph, Whitespace } from "../other/Components"


export default function Home({navigation}){
    return(
    <>
        <Header navigation={navigation} id={0}/>
        <ScrollView style={{padding: 30, marginTop: 70}}>

            <Title text={"Bienvenido de nuevo, " + Cache.user.username +"."}/>

            <Paragraph text={"Un día menos para cumplir tus metas."}/>
            <Whitespace />

            <Overview/>

        </ScrollView>     

    </>
    
    )
}