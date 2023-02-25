import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import * as Theme from "../data/theme"
const Footer = () => (
    <>
        <View style={{position: "absolute", top: 0, height:30, width:"100%", backgroundColor: Theme.colors[Theme.colorTheme].bg, elevation: 20,}} />
        <View style={styles.container}>
            <TouchableHighlight>
                <Image source={require("../assets/img/home.png")} style={styles.image}></Image>
            </TouchableHighlight>
            <TouchableHighlight>
                <Image source={require("../assets/img/applications.png")} style={styles.image}></Image>
            </TouchableHighlight>
            <TouchableHighlight>
                <Image source={require("../assets/img/stats.png")} style={styles.image}></Image>
            </TouchableHighlight>
            <TouchableHighlight>
                <Image source={require("../assets/img/profile.png")} style={styles.image}></Image>
            </TouchableHighlight>
        </View>
    </>
    
)

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

export default Footer;