import React from "react"
import { View, Text} from "react-native"
export default function Header(){
    return(
        <View style={{
            backgroundColor:"#02c39a",
            padding: 20
        }}>
            <Text style={{color:"white", paddingLeft: 20 }}>Diario</Text>
        </View> 
    )
}

