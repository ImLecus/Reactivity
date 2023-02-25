import { View, Text, StyleSheet,ScrollView, TouchableWithoutFeedback, Image } from "react-native";
import * as User from "../data/user/user";
import * as Font from "expo-font";
import ObjectiveBall from "./ObjectiveBall";
import {Title, Whitespace, Paragraph, Subtitle} from "./Typography"
import StatButton from "./StatButton";
export default function Stats(){
    const fetchFonts = async () => {
        await Font.loadAsync({
            'Montserrat': require('../assets/fonts/Montserrat.ttf'),
            'SourceSansPro' : require('../assets/fonts/SourceSansPro.ttf')
        })
    }
    return(
        <ScrollView style={{padding:30}}>
            <Whitespace/>
            <Title text="Estadísticas" />
            <Paragraph text="Comprueba tu progreso"/>
            <Whitespace/>
            <View style={{alignItems: "center"}}>
                <StatButton color = "green"/>
                <StatButton color = "purple"/>
                <StatButton color = "red"/>
            </View>
            
        </ScrollView>
    )
}