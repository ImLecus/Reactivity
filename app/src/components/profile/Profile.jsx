import { View, Image, StyleSheet, TouchableOpacity, Text} from "react-native"
import {Title, Paragraph, Whitespace} from "../basic/Components"
import Cache from "../../data/cache.json"
import * as Theme from "../../data/theme"
import { style } from "../stylesheet"
const styles = StyleSheet.create({
    listItem : {
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors[Theme.colorTheme].text + "55",
        padding: 15, flexDirection: "row", alignItems: "center"
    },
    image: {
        width: 25, height: 25, marginRight: 10
    }
})

export const Button = ({img, styles, text}) => (

    <TouchableOpacity style={styles.listItem}>

        <Image source={img} style={styles}/>

        <Paragraph text={text} />

    </TouchableOpacity>
)

export default function Profile({action, premium}){
    return(
    <>
        <View style={style.header}>

            <TouchableOpacity onPress={action}>

                <Image source={require("../../assets/img/arrow_left.png")} style={{width: 35, height: 35, tintColor: Theme.colors[Theme.colorTheme].text}}/>
            
            </TouchableOpacity>

            <Text style={{fontFamily : "Inter", color: Theme.colors[Theme.colorTheme].text}}>Perfil</Text>

            <TouchableOpacity style={{opacity: 0}}>

                <Image source={require("../../assets/img/me.jpg")} style={style.profile}/>

            </TouchableOpacity>

        </View>

        <View style={{padding: 30, marginTop: 70, alignItems: "center"}}>

            <Image source={require("../../assets/img/me.jpg")} style={{borderRadius: 100, width: 150, height: 150, marginBottom: 30}}/>

            <Title text={Cache.user.username}/>

            <Paragraph text={Cache.user.mail}/>

            <Whitespace />

            <TouchableOpacity style={{borderRadius: 5, borderWidth: 1, borderColor: Theme.colors[Theme.colorTheme].text + "77", padding: 8, paddingLeft: 16, paddingRight: 16}}>
                <Paragraph text="Editar perfil"/>
            </TouchableOpacity>

            <Whitespace height={50}/>

            <TouchableOpacity style={styles.listItem} onPress={premium}>

                <Image source={require("../../assets/img/premium.png")} style={[styles.image,style.premium]}/>

                <Paragraph text="Premium" color={Theme.colors[Theme.colorTheme].main}/>

            </TouchableOpacity>


            <Button img={require("../../assets/img/friends.png")} styles={[styles.image,style.nopremium]} text="Amigos"/>
            <Button img={require("../../assets/img/star.png")} styles={[styles.image,style.nopremium]} text="Logros"/>
            <Button img={require("../../assets/img/logout.png")} styles={[styles.image,style.nopremium]} text="Cerrar sesión"/>

        </View>
    </>
    
    )
}