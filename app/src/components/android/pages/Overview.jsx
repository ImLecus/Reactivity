import { View, Image, TouchableOpacity } from "react-native";
import Task from "../other/Task";
import theme from "../../../data/theme.json"
import { Subtitle, Whitespace, Paragraph, ProgressBar } from "../other/Components";
import { ThemeContext } from "../../UserContext";
import Cache from "../../../data/cache.json"
import { useContext } from "react";
import { icons } from "../../../data/icons"
import Streak from "../other/Streak"

import * as FileSystem from 'expo-file-system';

export default function Overview () {
    const [colorTheme,setTheme] = useContext(ThemeContext)

    let todayTasks = []
    Cache.tasks.map(task => {
                    if(task.repeat.includes(new Date().getDay())){
                        todayTasks.push(task)
                    }})
    let progress = 20


    return(
        <View>

            <View style={{ marginTop: 30, padding: 5} }>

                <Subtitle text={"Tus objetivos"}/>

                <Whitespace />
                <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                    <ProgressBar width={"80%"} progress={progress} color={theme[colorTheme].mood.excellent}/>
                    <Paragraph text={progress + "%"}/>
                </View>
                
                <Whitespace />
                <Paragraph text={"Has completado 0 de los " + (todayTasks.length + 1)  + " objetivos establecidos para hoy."}/>

                <Whitespace h={30}/>
                {
                    todayTasks.map(task => (
                        <Task title={task.title} icon={task.icon} description={task.description} id={Cache.tasks.indexOf(task)}/>
                    ))
                }
                <TouchableOpacity onPress={() => {}} style={{width: "100%", minHeight: 60, backgroundColor: (colorTheme == "dark" ? theme[colorTheme].complementary + "30": theme.transparent), borderRadius: 10, padding: 10, marginBottom: 10, borderWidth: (colorTheme == "light"? 1: 0), borderColor: theme[colorTheme].text + "44"}}>
                    
                        <View style={{flexDirection: "row", alignItems: "center"}}>

                            <View style={{width: 40, height: 40, backgroundColor: theme.transparent, borderRadius: 5, opacity: 1, justifyContent: "center", alignItems: "center"}}>
                    
                                <Image source={icons.add} style={{tintColor: theme[colorTheme].complementary + "aa", width: 30, height: 30}}/>
                
                            </View>

                            <View style={{marginLeft: 20}}>
                            
                                <Paragraph text="Añadir nuevo objetivo..." opacity={1}/> 

                            </View>

                        </View>

                </TouchableOpacity>
                <Whitespace/>

                <Subtitle text="Racha de objetivos" />

                <Whitespace />

                <Paragraph text={"¡Enhorabuena! Llevas una racha de 7 días. Fallaste por última vez el 4/3/2023"}/>

                <Whitespace />

                <View style={{flexDirection: "row"}}>
                    <Streak day={16}/>
                    <Streak day={17}/>
                    <Streak day={18}/>
                    <Streak day={19}/>
                    <Streak day={20}/>
                </View>
                <Paragraph text={FileSystem.documentDirectory}/>
                    
            

                <Whitespace h={100}/>
            </View>
        </View>
    )
}