import { View, ScrollView } from "react-native";
import Subtitle from "../basic/Subtitle";
import Widget from "./Widget";
export default function Overview () {
    return(
        <View>
            <Subtitle text="Progreso diario"/>

            <Subtitle text="Categorías"/>
            <ScrollView horizontal style={{flexDirection: "row", elevation: 20, paddingBottom: 20, paddingTop: 20}}>
                <Widget color="red" text="Estudio" icon="write"/>
                <Widget color="green" text="Felicidad" icon="mood"/>
                <Widget color="purple" text="Ejercicio" icon="walk"/>
            </ScrollView>
            
        </View>
    )
}