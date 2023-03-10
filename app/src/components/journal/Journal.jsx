import { View } from "react-native"
import Cache from "../../data/cache.json"
import Header from "../extras/Header"
import { useState } from "react"
import { Title, Paragraph, Whitespace, Button, Subtitle } from "../basic/Components"
export default function Journal({navigation}){

    return(
    <>
        {
            // Header que lleva al menú
        }
        <Header navigation={navigation} id={1}/>
        <View style={{padding: 30, marginTop: 70}}>
            <Paragraph text="9 de marzo"/>
        </View>     

    </>
    
    )
}