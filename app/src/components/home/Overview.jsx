import { View, ScrollView } from "react-native";
import Subtitle from "../basic/Subtitle";
import Widget from "./Widget";
import Task from "./Task";
import ProgressBar from "../basic/ProgressBar";
import Paragraph from "../basic/Paragraph";
import { Whitespace } from "../basic/Whitespace";

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
                    todayTasks.map(task => (
                        <Task title={task.title} icon={task.icon} description={task.description} id={Cache.tasks.indexOf(task)}/>
                    ))
                }
                <Whitespace height={500}/>
            </View>
        </ScrollView>
    )
}