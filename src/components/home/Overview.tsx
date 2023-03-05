import { View, ScrollView } from "react-native";
import Subtitle from "../basic/Subtitle";
import Widget from "./Widget";
import ProgressBar from "../basic/ProgressBar";
import Paragraph from "../basic/Paragraph";
import { Whitespace } from "../basic/Whitespace";
export default function Overview (props:any) {
    let progress = 70
    return(
        <ScrollView style={{display: (props.active == 0 ? "flex" : "none"), marginTop: 30}}>
            <Subtitle text="Progreso diario" />
            <Whitespace />
            <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "baseline"}}>
                <ProgressBar progress={progress}/>
                <Paragraph text={progress + "%"}/>
            </View>
            <Whitespace />
            <Paragraph text={"Has completado 7 de los 10 objetivos establecidos para hoy."}/>
            <Whitespace />
            <Subtitle text={"Recomendado para hoy"}/>
            <Whitespace />
            <ScrollView horizontal style={{flexDirection: "row"}}>
                <Widget color="main" text={"Beber agua"}/>
                <Widget color="main" text={"Beber agua"}/>
                <Widget color="main" text={"Beber agua"}/>
            </ScrollView>
            <Whitespace />

            <Paragraph text={"Has completado 7 de los 10 objetivos establecidos para hoy."}/>
            <Whitespace />
            <Subtitle text={"Recomendado para hoy"}/>
        </ScrollView>
    )
}