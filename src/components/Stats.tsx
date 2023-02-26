import { View, Text, StyleSheet,ScrollView, TouchableWithoutFeedback, Image } from "react-native";
import {Title, Whitespace, Paragraph, Subtitle} from "./Typography"
import StatButton from "./Category";
export default function Stats(props:any){
    return(
        <ScrollView style={{padding:30,display: (props.state == 2 ? "flex":"none")}}>

        </ScrollView>
    )
}