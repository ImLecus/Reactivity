import { View, Text, StyleSheet, Image } from "react-native";
import { Paragraph } from "./Typography"
import * as Theme from "../data/theme"
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
        tintColor: Theme.colors[Theme.colorTheme].bg
    }
})

export default function Widget(props:any){

    let progress = props.progress? props.progress : 0
    let max = props.max? props.max : 1
    let color = props.color ? props.color : "white"


    

    return(
        <View style={[styles.widget,{backgroundColor: Theme.colors[Theme.colorTheme][color]}]}>

            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Paragraph text={props.text} color="white"/>
                <Image source={Theme.icons[props.type]} style={styles.image}></Image>
            </View>
            

            <View style={styles.progressBarBottom}>

                <View style={[styles.progressBar,
                    {
                        backgroundColor: Theme.lightColors[color],
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

