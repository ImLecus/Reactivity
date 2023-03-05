import { View } from "react-native"

import * as Theme from "../../data/theme"

export default function Sidebar(props:any){
    return(
        <View style={{width: "60%",height: "100%", backgroundColor: Theme.colors[Theme.colorTheme].bg,position: "absolute",borderRightColor: Theme.colors[Theme.colorTheme].text + "55",borderRightWidth: 1,elevation: 30,}}>

        </View>
    )
}