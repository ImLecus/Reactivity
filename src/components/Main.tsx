import { View, Text, StyleSheet } from "react-native";

const Main = () => (
    <View>
        <Title text="Bievenido de nuevo, Marcos"/>
    </View>
)

const Title = (props:any) => (
    <Text style={styles.title}>{props.text}</Text>
)

const styles = StyleSheet.create({
    title : {
        fontSize: 24
    }
})

export default Main;