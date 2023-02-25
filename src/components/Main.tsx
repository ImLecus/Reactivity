import { View, Text, StyleSheet,ScrollView, TouchableWithoutFeedback, Image } from "react-native";
import * as User from "../data/user/user";
import * as Font from "expo-font";
import Widget from "./Widget";
import ObjectiveBall from "./ObjectiveBall";
import {Title, Whitespace, Paragraph, Subtitle} from "./Typography"

export default function Main(){

    const fetchFonts = async () => {
        await Font.loadAsync({
            'Montserrat': require('../assets/fonts/Montserrat.ttf'),
            'SourceSansPro' : require('../assets/fonts/SourceSansPro.ttf')
        })
    }
        

    return(
        <ScrollView style={{padding:30}}>
            <Whitespace/>
            <Title text={"Bievenido de nuevo, "+ User.username}/>
            <Paragraph text="Un día menos para cumplir tus objetivos."/>
            <Whitespace/>
            <Subtitle text="Recomendado para hoy"/>
            <ScrollView horizontal style={{flexDirection: "row", marginTop: 25, paddingBottom: 10}}>
                <Widget color="purple" text="Camina 2km" max="2.00" progress="1.4" type="walk"/>
                <Widget color="green" text="Escribe sobre tu día" progress="1" type="write"/>
                <Widget color="red" text="Estudiar matemáticas" progress="1" type="diary"/>
            </ScrollView>
            <Subtitle text="Racha de objetivos"/>
            <Paragraph text="Esta semana:"/>
            <View style={{flexDirection: "row", width: "100%", justifyContent :"space-around", marginTop: 10}}>
                <ObjectiveBall></ObjectiveBall>
                <ObjectiveBall></ObjectiveBall>
                <ObjectiveBall></ObjectiveBall>
                <ObjectiveBall></ObjectiveBall>
                <ObjectiveBall></ObjectiveBall>
                <ObjectiveBall></ObjectiveBall>
                <ObjectiveBall></ObjectiveBall> 
            </View>
            <View style={{flexDirection: "row", width: "100%", justifyContent :"space-around", marginTop: 10}}>
                <Text>L</Text>
                <Text>M</Text>
                <Text>M</Text>
                <Text>J</Text>
                <Text>V</Text>
                <Text>S</Text>
                <Text>D</Text>
            </View>
            <Whitespace/>
            <Whitespace/>
        </ScrollView>
    )
    
}

