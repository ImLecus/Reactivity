import { View, Text } from "react-native";
import * as User from "../data/user/user"
export default function Profile(props:any){
    return(
        <View  style={{width: 50, height: 200, backgroundColor: "blue",display: (props.state == 3 ? "flex":"none")}}>
        </View>
        
    )
}