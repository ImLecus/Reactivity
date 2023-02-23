import { View, Text, TouchableWithoutFeedback, Image} from "react-native"
export default function Header(props:any){
    return( 

        <View style={{
            backgroundColor:"#02c39a",
            alignItems: "center",
            height: 70,
            flexDirection: "row",
            padding: 20,
            paddingTop: 30,
            borderBottomWidth: 1,
            borderBottomColor: "#000000"
        }}>
        <TouchableWithoutFeedback>
            <Image source={require("../assets/arrow_left.png")} style={{width: 25, height: 25}}></Image>
        </TouchableWithoutFeedback>
            <Text style={{color:"white", paddingLeft: 20, fontWeight: "bold"}}>{props.name}</Text>
        </View> 
    )
}

