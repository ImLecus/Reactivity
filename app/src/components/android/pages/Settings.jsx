import { View, Image, StyleSheet, TouchableOpacity, Text} from "react-native"
import ReturnHeader from "../other/ReturnHeader"

export default function Settings({navigation}){
    
    return(
    <>
        <ReturnHeader returnTo={"Profile"} title={"Configuración"} navigation={navigation}/>
    </>
    
    )
}