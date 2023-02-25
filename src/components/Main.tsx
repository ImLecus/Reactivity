import { View, Text, StyleSheet,ScrollView } from "react-native";
import * as User from "../data/user/user";
import * as Font from "expo-font";
import Widget from "./Widget";
import {Title, Whitespace, Paragraph, Subtitle} from "./Typography"

export default function Main(){

    const fetchFonts = async () => {
        await Font.loadAsync({
            'Montserrat': require('../assets/fonts/Montserrat.ttf'),
            'SourceSansPro' : require('../assets/fonts/SourceSansPro.ttf')
        })
    }
        

    return(
        <View style={{padding:30}}>
            <Whitespace/>
            <Title text={"Bievenido de nuevo, "+ User.username}/>
            <Paragraph text="Un día menos para cumplir tus objetivos."/>
            <Whitespace/>
            <Subtitle text="Recomendado para hoy"/>
            <ScrollView horizontal style={{flexDirection: "row", marginTop: 25, paddingBottom: 10}}>
                <Widget color="purple" text="Camina 2km" max="2.00" progress="1.4" type="walk"/>
                <Widget color="green" text="Escribe sobre tu día" progress="1" type="write"/>
            </ScrollView>
            
        </View>
    )
    
}

