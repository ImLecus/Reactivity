import { View, Image, StyleSheet, TouchableOpacity, Text} from "react-native"
import {Title, Paragraph, Whitespace} from "../basic/Components"
import Cache from "../../data/cache.json"
import theme from "../../data/theme.json"
import { style } from "../stylesheet"
import { useContext } from "react"
import { ThemeContext } from "../UserContext"


export const Button = ({img, styles, text,listItem}) => (

    <TouchableOpacity style={listItem}>

        <Image source={img} style={styles}/>

        <Paragraph text={text} />

    </TouchableOpacity>
)

export default function Profile({navigation}){
    const colorTheme = useContext(ThemeContext)[0]
    const styles = StyleSheet.create({
    listItem : {
        borderBottomWidth: 1,
        borderBottomColor: theme[colorTheme].text + "55",
        padding: 15, flexDirection: "row", alignItems: "center"
    },
    image: {
        width: 25, height: 25, marginRight: 10
    },
    premium : {
        tintColor: theme[colorTheme].main
    },
    nopremium : {
        tintColor: theme[colorTheme].text + "aa"
    }
})
    return(
    <>
        <View style={[style.header, {}]}>

            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>

                <Image source={require("../../assets/img/arrow_left.png")} style={{width: 35, height: 35, tintColor: theme[colorTheme].text}}/>
            
            </TouchableOpacity>

            <Text style={{fontFamily : "Inter", color: theme[colorTheme].text}}>Perfil</Text>

            <TouchableOpacity style={{opacity: 0}}>

                <Image source={require("../../assets/img/me.jpg")} style={style.profile}/>

            </TouchableOpacity>

        </View>

        <View style={{padding: 30, marginTop: 70, alignItems: "center"}}>

            <Image source={require("../../assets/img/me.jpg")} style={{borderRadius: 100, width: 150, height: 150, marginBottom: 30}}/>

            <Title text={Cache.user.username}/>

            <Paragraph text={Cache.user.mail}/>

            <Whitespace />

            <TouchableOpacity style={{borderRadius: 5, borderWidth: 1, borderColor: theme[colorTheme].text + "77", padding: 8, paddingLeft: 16, paddingRight: 16}}>
                <Paragraph text="Editar perfil"/>
            </TouchableOpacity>

            <Whitespace height={50}/>

            <TouchableOpacity style={styles.listItem}>

                <Image source={require("../../assets/img/premium.png")} style={[styles.image,styles.premium]}/>

                <Paragraph text="Premium" color={theme[colorTheme].main}/>

            </TouchableOpacity>


            <Button img={require("../../assets/img/friends.png")} styles={[styles.image,styles.nopremium]} text="Amigos" listItem={styles.listItem}/>
            <Button img={require("../../assets/img/star.png")} styles={[styles.image,styles.nopremium]} text="Logros" listItem={styles.listItem}/>
            <Button img={require("../../assets/img/logout.png")} styles={[styles.image,styles.nopremium]} text="Cerrar sesión" listItem={styles.listItem}/>

        </View>
    </>
    
    )
}