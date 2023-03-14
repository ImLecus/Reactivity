import { View, ScrollView } from "react-native";
import {Whitespace, Paragraph, Subtitle} from "../other/Components"
export default function Stats({active}){
    return(
        <ScrollView>

            <View style={{display: (active == 1 ? "flex" : "none")  , marginTop: 30} }>

                <Subtitle text="General" />

                <Whitespace />

                <Paragraph text={"¡Enhorabuena! Tu promedio de productividad ha subido un 7% esta semana."}/>

                <Whitespace />

                <Subtitle text={"Tiempo de uso"}/>

                <Whitespace />

                <Subtitle text={"Ejercicio físico"}/>

                <Subtitle text={"Estado de ánimo"}/>

                <Whitespace h={500}/>

            </View>
            
        </ScrollView>
    )
}