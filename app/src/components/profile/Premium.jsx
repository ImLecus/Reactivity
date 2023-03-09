import { View, Image, StyleSheet, TouchableOpacity, Text} from "react-native"
import {Paragraph} from "../basic/Components"
import * as Theme from "../../data/theme"
import {theme} from "../../data/theme"
const styles = StyleSheet.create({
    listItem : {
        borderBottomWidth: 1,
        borderBottomColor: theme[Theme.colorTheme].text + "55",
        padding: 15, flexDirection: "row", alignItems: "center"
    },
    image: {
        width: 25, height: 25, marginRight: 10
    },
    premium : {
        tintColor: theme[Theme.colorTheme].main
    },
    nopremium : {
        tintColor: theme[Theme.colorTheme].text + "aa"
    },
    header : {
        width: "100%",
        position: "absolute",
        top: 0,
        padding: 30,
        flexDirection: "row",
        justifyContent :"space-between",
        alignItems: "center"
    },
    img: {
        width: 35,
        height: 35,
        borderRadius: 50
    }
})

export default function Premium(props){
    return(
    <>
        <View style={styles.header}>

            <TouchableOpacity onPress={props.action}>

                <Image source={require("../../assets/img/arrow_left.png")} style={{width: 35, height: 35, tintColor: theme[Theme.colorTheme].text}}/>
            
            </TouchableOpacity>

            <Text style={{fontFamily : "Inter", color: theme[Theme.colorTheme].text}}>Reactivity Premium</Text>

            <TouchableOpacity style={{opacity: 0}}>

                <Image source={require("../../assets/img/me.jpg")} style={styles.img}/>

            </TouchableOpacity>

        </View>
        <View>
            <Paragraph text="Premium"/>
        </View>
    </>
    )
}