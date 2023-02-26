import { View, Text } from "react-native"
import { Whitespace, Title, Paragraph, Subtitle } from "./Typography";
import { ListElement } from "./ListItem";
import * as Theme from "../data/theme"
export default function Categories(props:any){
    return(
        <View style={{display: (props.state == 1 ? "flex":"none")}}>
            <View style={{padding : 30}}>
                <Whitespace />
                <Title text="Categorías"/>
                <Whitespace />
            </View>
            <ListElement color="purple" src={Theme.icons.walk} text="Ejercicio físico"/>
            <ListElement color="green" src={Theme.icons.mood} text="Estado de ánimo"/>
            <ListElement color="orange" src={Theme.icons.time} text="Tiempo de uso"/>
            <ListElement color="red" src={Theme.icons.write} text="Lectura y estudio"/>
            <ListElement color="gray" src={Theme.icons.add} text="Añadir nueva categoría..."/>
        </View>
    )
}

