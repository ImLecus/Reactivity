import { View, Image, StyleSheet, TouchableOpacity} from "react-native"
import Title from "../basic/Title"
import Paragraph from "../basic/Paragraph"
import { Whitespace } from "../basic/Whitespace"
import Cache from "../../data/cache.json"
import * as Theme from "../../data/theme"

const styles = StyleSheet.create({
    listItem : {
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors[Theme.colorTheme].text + "55",
        padding: 15, flexDirection: "row", alignItems: "center"
    },
    image: {
        width: 25, height: 25, marginRight: 10
    },
    premium : {
        tintColor: Theme.colors[Theme.colorTheme].main
    },
    nopremium : {
        tintColor: Theme.colors[Theme.colorTheme].text + "aa"
    }
})

export default function Profile(){
    return(
    <View style={{padding: 30, marginTop: 70, alignItems: "center"}}>
        <Image source={require("../../assets/img/me.jpg")} style={{borderRadius: 100, width: 150, height: 150, marginBottom: 30}}/>
        <Title text={Cache.user.username}/>
        <Paragraph text={Cache.user.mail}/>
        <Whitespace />
        <TouchableOpacity style={{borderRadius: 5, borderWidth: 1, borderColor: Theme.colors[Theme.colorTheme].text + "77", padding: 8, paddingLeft: 16, paddingRight: 16}}>
            <Paragraph text="Editar perfil"/>
        </TouchableOpacity>
        <Whitespace height={50}/>
        <TouchableOpacity style={styles.listItem}>
            <Image source={require("../../assets/img/premium.png")} style={[styles.image,styles.premium]}/>
            <Paragraph text="Premium" color={Theme.colors[Theme.colorTheme].main}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Image source={require("../../assets/img/friends.png")} style={[styles.image,styles.nopremium]}/>
            <Paragraph text="Amigos" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Image source={require("../../assets/img/star.png")} style={[styles.image,styles.nopremium]}/>
            <Paragraph text="Logros" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
        <Image source={require("../../assets/img/logout.png")} style={[styles.image,styles.nopremium]}/>
            <Paragraph text="Cerrar sesión" />
        </TouchableOpacity>

    </View>
    )
}