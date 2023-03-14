import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
    p : {
        fontFamily: "Inter",
        fontSize: 18,
        zIndex: 10
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
    },
    checkbox : {
        width: 25,
        height: 25,
        marginRight: 20,
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    task: {
        width: "100%", 
        minHeight: 50, 
        elevation:2,
        borderRadius: 10, 
        padding: 10, 
        marginBottom: 10
    }
})