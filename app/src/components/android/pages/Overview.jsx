import { View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, TextInput } from "react-native";
import Task from "../other/Task";
import theme from "../../../data/theme.json"
import { Subtitle, Whitespace, Paragraph, ProgressBar, Checkbox, Button } from "../other/Components";
import { ThemeContext } from "../../UserContext";
import Cache from "../../../data/cache.json"
import { useContext, useState } from "react";
import { icons } from "../../../data/icons"
import Streak from "../other/Streak"

import * as FileSystem from 'expo-file-system';
import { style } from "../stylesheet";

export default function Overview () {
    const [colorTheme,setTheme] = useContext(ThemeContext)
    const [modalVisible, setModalVisible] = useState(true)
    const [modalText,setModalText] = useState("Nombre")

    let todayTasks = []
    Cache.tasks.map(task => {
                    if(task.repeat.includes(new Date().getDay())){
                        todayTasks.push(task)
                    }})
    let progress = 20
    
    const resetModal = () => {
        setModalText("Nombre")
        setModalVisible(true)
    }

    return(
        <View>
            
            <Modal transparent={true} visible={modalVisible} animationType="slide">
            <TouchableWithoutFeedback onPress={()=>{setModalVisible(false)}} style={{display: (modalVisible == true)? "flex":"none"}}>
                <View style={[style.modalbg,{backgroundColor: theme[colorTheme].text}]}/>
            </TouchableWithoutFeedback>
                <View style={[style.modal,{backgroundColor: theme[colorTheme].bg}]}>
                    <Subtitle text={"Crear nuevo objetivo"}/>
                    <Whitespace />
                    <Paragraph text={"Título"} bold opacity={0.5}/>
                    <Whitespace />
                    <TextInput placeholder="Escribe un nombre..." onChangeText={setModalText} style={[style.input,style.p,{borderColor: theme[colorTheme].gray, color: theme[colorTheme].text, textDecorationColor: theme[colorTheme].transparent}]}/>
                    <Whitespace />
                    <Paragraph text={"Repetir los días..."} bold opacity={0.5}/>
                    <Whitespace />
                    <View style={{flexDirection: "row", justifyContent: "space-around", width:"100%"}}>
                        <Paragraph text={"L"}/>
                        <Paragraph text={"M"}/>
                        <Paragraph text={"X"}/>
                        <Paragraph text={"J"}/>
                        <Paragraph text={"V"}/>
                        <Paragraph text={"S"}/>
                        <Paragraph text={"D"}/>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-around", width:"100%"}}>
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                    </View>
                    <Whitespace h={40}/>
                    <Button text={"Hecho"} action={() => {setModalVisible(false)}}/>
                </View>
            </Modal>
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
                <TouchableOpacity onPress={() => {resetModal()}} style={{width: "100%", minHeight: 60, backgroundColor: (colorTheme == "dark" ? theme[colorTheme].complementary + "30": theme.transparent), borderRadius: 10, padding: 10, marginBottom: 10, borderWidth: (colorTheme == "light"? 1: 0), borderColor: theme[colorTheme].text + "44"}}>
                    
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