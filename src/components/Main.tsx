import { View, Text, StyleSheet,ScrollView, TouchableWithoutFeedback, Image } from "react-native";
import Cache from "../data/cache.json";

import Widget from "./Widget";
import ObjectiveBall from "./ObjectiveBall";
import {Title, Whitespace, Paragraph, Subtitle} from "./Typography"
import * as Theme from "../data/theme"

export default function Main(props:any){
        

    return(
        <ScrollView style={{padding:30, backgroundColor: Theme.colors[Theme.colorTheme].bg, display: (props.state == 0? "flex":"none")}}>
            <Whitespace/>
            <Whitespace/>
            <Title text={"Bievenido de nuevo, "+ Cache.user.username}/>
            <Paragraph text="Un día menos para cumplir tus objetivos."/>
            <Whitespace/>

            <View>
                <Subtitle text="Recomendado para hoy"/>
                <ScrollView horizontal style={{flexDirection: "row", marginTop: 25, paddingBottom: 10}}>
                    <Widget color="purple" text="Camina 2km" max="2.00" progress="1.4" type="walk"/>
                    <Widget color="green" text="Escribe sobre tu día" progress="1" type="write"/>
                    <Widget color="red" text="Estudiar matemáticas" progress="1" type="diary"/>
                </ScrollView>
            </View>
            
            <View>
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
            </View>
            <Whitespace/>
            <View>
                <Subtitle text="Tiempo de uso"/>
                <Title text="1h 45min"/>
                <Paragraph text="No tienes objetivos de tiempo de uso"/>
            </View>

            <Whitespace/>
            <Whitespace/>
        </ScrollView>
    )
    
}

