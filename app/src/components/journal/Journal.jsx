import { View } from "react-native"
import Cache from "../../data/cache.json"
import Header from "../extras/Header"
import Note from "./Note"
export default function Journal({navigation}){

    return(
    <>
        <Header navigation={navigation} id={1}/>
        <View style={{padding: 30, marginTop: 70}}>
            {
                Cache.journal.map(note => (
                    <Note date={note.date} mood={note.mood} message={note.message} id={Cache.journal.indexOf(note)}/>
                ))
            }
        </View>     

    </>
    
    )
}