import { View, StyleSheet, TouchableWithoutFeedback, Image,Alert } from "react-native"
import * as Theme from "../data/theme"
import { Paragraph } from "./Typography";
const Footer = (props:any) => {

    return(
    <>
        <View style={{position: "absolute", top: 0, height:70, width:"100%", backgroundColor: Theme.colors[Theme.colorTheme].main, elevation: 30,}}>
            <TouchableWithoutFeedback>
                <View style={{alignItems: "center", flexDirection: "row", height: "100%"}}>
                    <Image source={require("../assets/img/menu.png")} style={[styles.image, {tintColor : Theme.colors[Theme.colorTheme].bg, marginLeft: 20,top: 10}]}></Image>
                    <View style={{position: "absolute", left:75, top: 25}}>
                        <Paragraph text="Domingo, 26 de febrero" color={Theme.colors[Theme.colorTheme].bg} opacity={1}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {props.function(0); }}>
                <View style={{padding:5, backgroundColor: (props.state == 0? "#00000010" : Theme.colors.transparent), borderRadius: 15}}>
                    <Image source={require("../assets/img/home.png")} style={[styles.image, {tintColor : (props.state == 0? Theme.colors[Theme.colorTheme].main : Theme.colors[Theme.colorTheme].complementary) }]}></Image>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={{padding:5, backgroundColor: Theme.colors[Theme.colorTheme].main,  borderRadius: 50}}>
                    <Image source={require("../assets/img/add.png")} style={styles.add}></Image>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {props.function(1)}}>
            <View style={{padding:5, backgroundColor: (props.state == 1? "#00000010" : Theme.colors.transparent), borderRadius: 15}}>
                    <Image source={require("../assets/img/profile.png")} style={[styles.image, { tintColor : (props.state == 1? Theme.colors[Theme.colorTheme].main : Theme.colors[Theme.colorTheme].complementary) }]}></Image>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        justifyContent: "space-around",
        flexDirection : "row",
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "gray",
        elevation: 1,
        backgroundColor: Theme.colors[Theme.colorTheme].bg
    },
    image: {
        width: 35,
        height: 35,
    },
    add : {
        width: 35,
        height: 35,
        tintColor : "white" , 
    },
    active:{
        width: 35,
        height: 35,
        opacity: 0.8
    }

})

export default Footer