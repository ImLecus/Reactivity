import { View, Text, StyleSheet,ScrollView, TouchableWithoutFeedback, Image } from "react-native";
import {Title, Whitespace, Paragraph, Subtitle} from "./Typography"
import StatButton from "./StatButton";
export default function Stats(props:any){
    return(
        <ScrollView style={{padding:30,display: (props.state == 2 ? "flex":"none")}}>
            <Whitespace/>
            <Title text="Estadísticas" />
            <Paragraph text="Comprueba tu progreso"/>
            <Whitespace/>
            <View style={{alignItems: "center"}}>
                <StatButton color="green"/>
                <StatButton color="purple"/>
                <StatButton color="red"/>
            </View>
            
        </ScrollView>
    )
}