import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";



export default function Main(){
    const [fontsLoaded] = useFonts({
        'Montserrat': require('../assets/fonts/Montserrat.ttf'),
        'SourceSansPro' : require('../assets/fonts/SourceSansPro.ttf')
    });

    return(
        <View style={{padding:30}}>
            <Whitespace/>
            <Title text="Bievenido de nuevo, Marcos"/>
            <Paragraph text="Un día menos para cumplir tus objetivos."/>
            <Whitespace/>
            <Subtitle text="Recomendado para hoy"/>
        </View>
    )
    
}

const Title = (props:any) => (<Text style={styles.title}>{props.text}</Text>)
const Subtitle = (props:any) => (<Text style={styles.subtitle}>{props.text}</Text>)
const Paragraph = (props:any) => (<Text style={styles.paragraph}>{props.text}</Text>)
const Whitespace = () => (<View style={{height: 50, width: 10}}></View>)
const styles = StyleSheet.create({
    title : {
        fontSize: 40,
        fontFamily: "Montserrat",
        fontWeight: "bold",
        margin: 5
    },
    paragraph : {
        fontSize: 18,
        fontFamily: "SourceSansPro",
        fontWeight: "normal",
        margin: 5,
        opacity: 0.7
    },
    subtitle : {
        fontSize: 24,
        fontFamily: "Montserrat",
        fontWeight: "bold",
        margin: 5,
        opacity: 0.7
    }
})