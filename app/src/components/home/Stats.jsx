import { View, ScrollView } from "react-native";
import Subtitle from "../basic/Subtitle";
import Widget from "./Widget";
import Task from "./Task";
import Paragraph from "../basic/Paragraph";
import { Whitespace } from "../basic/Whitespace";
export default function Stats(props){
    return(
        <ScrollView>
            <View style={{display: (props.active == 1 ? "flex" : "none")  , marginTop: 30} }>
                <Subtitle text="General" />
                <Whitespace />
                <Paragraph text={"¡Enhorabuena! Tu promedio de productividad ha subido un 7% esta semana."}/>
                <Whitespace />
                <Subtitle text={"Tiempo de uso"}/>
                <Whitespace />
                <Subtitle text={"Ejercicio físico"}/>

                <Subtitle text={"Estado de ánimo"}/>
                <Whitespace height={500}/>
            </View>
        </ScrollView>
    )
}