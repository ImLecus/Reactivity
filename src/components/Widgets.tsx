import { View, Text } from "react-native"
import { Whitespace, Title, Paragraph, Subtitle } from "./Typography";
export default function Widgets(props:any){
    return(
        <View style={{height: 200,display: (props.state == 1 ? "flex":"none")}}>
            <Whitespace />
            <ListElement />
            <ListElement />
            <ListElement />
            <ListElement />
            <ListElement />
            <ListElement />
        </View>
    )
}

const ListElement = (props:any) => (
    <View style={{width:"100%",borderBottomWidth: 1, borderBottomColor: "#00000077", padding: 12}}>
        <Text>ola</Text>
    </View>
)