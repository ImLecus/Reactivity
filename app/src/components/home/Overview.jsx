import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import Task from "./Task";
import ProgressBar from "../basic/ProgressBar";
import * as Theme from "../../data/theme"
import {theme} from "../../data/theme"
import { Subtitle, Whitespace, Paragraph } from "../basic/Components";
import { ThemeContext } from "../UserContext";
import Cache from "../../data/cache.json"
import { useContext } from "react";
export default function Overview (props) {
    const colorTheme = useContext(ThemeContext)
    let date = new Date()
    let todayTasks = []
    let completedTasks = 0
    Cache.tasks.map(task => {
                    if(task.completed == (date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())){
                        completedTasks ++;
                    }
                    else{
                        task.completed = ""
                    }
                    if(task.repeat.includes(date.getDay())){
                        todayTasks.push(task)
                    }})
    
    let progress = 100 * completedTasks / (todayTasks.length + 1)
    return(
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{display: (props.active == 0 ? "flex" : "none")  , marginTop: 30} }>

                <Subtitle text="Progreso diario" />

                <Whitespace />

                <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "baseline"}}>

                    <ProgressBar progress={progress}/>

                    <Paragraph text={progress + "%"}/>

                </View>

                <Whitespace />

                <Paragraph text={"Has completado "+ completedTasks +" de los " + (todayTasks.length + 1)  + " objetivos establecidos para hoy."}/>

                <Whitespace />

                <Subtitle text={"Tus objetivos"}/>

                <Whitespace />
                {
                    // Añadir todas las tareas cuyo día coincida con el de hoy
                    todayTasks.map(task => (
                        <Task title={task.title} icon={task.icon} description={task.description} id={Cache.tasks.indexOf(task)}/>
                    ))
                }

                <TouchableOpacity onPress={() => {}} style={{width: "100%", minHeight: 60, backgroundColor: (colorTheme == "dark" ? theme[colorTheme].complementary + "30": theme.transparent), borderRadius: 10, padding: 10, marginBottom: 10, borderWidth: (colorTheme == "light"? 1: 0), borderColor: theme[colorTheme].text + "44"}}>
                    
                        <View style={{flexDirection: "row", alignItems: "center"}}>

                            <View style={{width: 40, height: 40, backgroundColor: theme.transparent, borderRadius: 5, opacity: 1, justifyContent: "center", alignItems: "center"}}>
                    
                                <Image source={Theme.icons.add} style={{tintColor: theme[colorTheme].complementary + "aa", width: 30, height: 30}}/>
                
                            </View>

                            <View style={{marginLeft: 20}}>
                            
                                <Paragraph text="Añadir nuevo objetivo..." opacity={1}/> 

                            </View>

                        </View>

                </TouchableOpacity>

                <Whitespace h={500}/>
            </View>
        </ScrollView>
    )
}