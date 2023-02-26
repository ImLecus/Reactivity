import { View } from "react-native"
export default function Widgets(props:any){
    return(
        <View style={{width: 50, height: 200, backgroundColor: "red",display: (props.state == 1 ? "flex":"none")}}>
        </View>
    )
}