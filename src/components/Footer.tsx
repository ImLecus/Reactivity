import { View, StyleSheet, TouchableHighlight, Image } from "react-native";

const Footer = () => (
    <View style={styles.container}>
        <TouchableHighlight>
            <Image source={require("../assets/home.png")} style={styles.image}></Image>
        </TouchableHighlight>
        <TouchableHighlight>
            <Image source={require("../assets/stats.png")} style={styles.image}></Image>
        </TouchableHighlight>
        <TouchableHighlight>
            <Image source={require("../assets/profile.png")} style={styles.image}></Image>
        </TouchableHighlight>
    </View>
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
        borderTopColor: "gray"
    },
    image: {
        width: 40,
        height: 40,
        opacity: 0.6
    }

})

export default Footer;