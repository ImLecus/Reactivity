import { View, Text, StyleSheet, Image } from "react-native";
import { Paragraph } from "./Typography"

const styles = StyleSheet.create({
    widget : {
        width: 250,
        height: 250,
        padding: 20,
        borderRadius: 10,
        margin: 5,
        elevation: 10,
        marginBottom: 20,
        marginLeft: 10
    },
    progressBarBottom: {  
        width: "80%", 
        height: 15,
        backgroundColor: "#00000044",
        borderRadius: 5,
        margin: 5,
        elevation: 0
    },
    progressBar : {
        height: 15,
        borderRadius: 5,
        opacity: 4, 
    },
    image : {
        width: 30,
        height: 30,
        tintColor: "#fff"
    }
})

export default function Widget(props:any){

    let progress = props.progress? props.progress : 0
    let max = props.max? props.max : 1
    let color = props.color ? props.color : "white"


    const colors:any = {
        white:"#fff",
        green:"#06d6a0",
        purple:"#9381ff"
    }
    const lightColors:any = {
        green: "#c7f9cc",
        purple: "#b8b8ff"
    }
    const icons:any = {
        walk: require("../assets/walk.png"),
        write: require("../assets/book_fill.png")
    }

    return(
        <View style={[styles.widget,{backgroundColor: colors[color]}]}>

            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Paragraph text={props.text} color="white" />
                <Image source={icons[props.type]} style={styles.image}></Image>
            </View>
            

            <View style={styles.progressBarBottom}>

                <View style={[styles.progressBar,
                    {
                        backgroundColor: lightColors[color],
                        width: (100 * progress/max  + "%")
                    }
                ]}/>

            </View>

            <Text style={{color: "white", margin: 5}}>

                Progreso: {progress} / {max} completado

            </Text>
        </View>
    )
}

