import {StyleSheet} from "react-native"

export const style = StyleSheet.create({
    p : {
        fontFamily: "Inter",
        fontSize: 18
    },
    title : {
        fontFamily: "JosefinSans",
        fontSize: 38,
        fontWeight: "bold"
    },
    subtitle : {
        fontFamily: "JosefinSans",
        fontSize: 24,
        fontWeight: "bold"
    },
    button : {
        padding :5,
        borderRadius: 20,
        paddingLeft: 20, 
        paddingRight: 20,
        margin: 5, 
        marginBottom: 15
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
    profile: {
        width: 35,
        height: 35,
        borderRadius: 50
    }
})