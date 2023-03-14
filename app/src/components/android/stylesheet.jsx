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
        borderRadius: 5,
        paddingLeft: 20, 
        paddingRight: 20,
        margin: 5, 
        marginBottom: 15,
        elevation: 3
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
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    task: {
        width: "100%",  
        elevation:2,
        borderRadius: 10, 
        padding: 10, 
        marginBottom: 10
    },
    modal : {
        position: "absolute",
        width: "80%",
        left: "10%",
        bottom:"25%",
        borderRadius: 10,
        padding: 20,
        alignItems: "center"
    },
    modalbg: {
        width: "100%",
        height: "100%",
        opacity: 0.2
    },
    input : {
        padding: 5,
        borderBottomWidth: 1,
        width: "80%"
    },
    calification : {
        elevation: 1, 
        marginBottom: 20 , 
        width: 60, 
        height: 60, 
        borderRadius: 50,
        justifyContent: "center", 
        alignItems: "center"
    }
})