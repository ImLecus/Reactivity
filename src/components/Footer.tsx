import { View, StyleSheet, TouchableWithoutFeedback, Image,Alert } from "react-native"
import { useState } from "react"
import * as Theme from "../data/theme"
const Footer = (props:any) => {

    return(
    <>
        <View style={{position: "absolute", top: 0, height:30, width:"100%", backgroundColor: Theme.colors[Theme.colorTheme].bg, elevation: 20,}} />
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {props.function(0)}}>
                <Image source={props.state == 0 ?require("../assets/img/home_fill.png") :require("../assets/img/home.png")} style={styles.image}></Image>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {props.function(1)}}>
                <Image source={props.state == 1 ?require("../assets/img/applications_fill.png") :require("../assets/img/applications.png")} style={styles.image}></Image>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {props.function(2)}}>
                <Image source={props.state == 2 ?require("../assets/img/stats_fill.png") :require("../assets/img/stats.png")} style={styles.image}></Image>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {props.function(3)}}>
                <Image source={props.state == 3 ?require("../assets/img/profile_fill.png") :require("../assets/img/profile.png")} style={styles.image}></Image>
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
        opacity: 0.6,
        tintColor: Theme.colors[Theme.colorTheme].complementary
    },
    active:{
        width: 35,
        height: 35,
        opacity: 0.8
    }

})

export default Footer