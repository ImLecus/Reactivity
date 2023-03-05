import { View, TouchableOpacity, Text } from "react-native";
import * as Theme from "../../data/theme"
export const Button = (props:any) => (
    <TouchableOpacity onPress={props.action}>
        <View style={{
            backgroundColor: props.active == props.page ? Theme.colors[Theme.colorTheme].main : "#00000000",
            padding :5,
            borderRadius: 20,
            paddingLeft: 20, paddingRight: 20,
            margin: 5, marginBottom: 15
            
            }}>
            <Text style={{color : Theme.colors[Theme.colorTheme].text, fontWeight: "bold" }}>{props.text}</Text>
        </View>
    </TouchableOpacity>
)