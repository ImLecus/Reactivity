import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import Subtitle from "../basic/Subtitle";
import Task from "./Task";
import ProgressBar from "../basic/ProgressBar";
import Paragraph from "../basic/Paragraph";
import { Whitespace } from "../basic/Whitespace";
import * as Theme from "../../data/theme"

import Cache from "../../data/cache.json"
export default function Overview (props) {
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

                <TouchableOpacity onPress={() => {}} style={{width: "100%", minHeight: 60, backgroundColor: (Theme.colorTheme == "dark" ? Theme.colors[Theme.colorTheme].complementary + "30": Theme.colors.transparent), borderRadius: 10, padding: 10, marginBottom: 10, borderWidth: (Theme.colorTheme == "light"? 1: 0), borderColor: Theme.colors[Theme.colorTheme].text + "44"}}>
                    
                        <View style={{flexDirection: "row", alignItems: "center"}}>

                            <View style={{width: 40, height: 40, backgroundColor: Theme.colors.transparent, borderRadius: 5, opacity: 1, justifyContent: "center", alignItems: "center"}}>
                    
                                <Image source={Theme.icons.add} style={{tintColor: Theme.colors[Theme.colorTheme].complementary + "aa", width: 30, height: 30}}/>
                
                            </View>

                            <View style={{marginLeft: 20}}>
                            
                                <Paragraph text="Añadir nuevo objetivo..." opacity={1}/> 

                            </View>

                        </View>

                </TouchableOpacity>

                <Whitespace height={500}/>
            </View>
        </ScrollView>
    )
}