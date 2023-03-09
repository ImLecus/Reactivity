import { useState } from "react";

import Home from "../home/Home";
import Profile from "../profile/Profile"

import { ThemeContext } from "../UserContext";
import { theme } from "../../data/theme";

import { View } from "react-native";
import Cache from "../../data/cache.json"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function PageManager(){

    const [colorTheme,setTheme] = useState(Cache.user.preferences.theme)

    return(
    
                <View style={{backgroundColor: theme[colorTheme].bg, width: "100%", height: "100%"}}>
                <ThemeContext.Provider value={colorTheme}>

                       <NavigationContainer>
                            <Stack.Navigator> 

                                <Stack.Screen name="Home" component={Home}/>
                                <Stack.Screen name="Perfil" component={Profile}/>

                            </Stack.Navigator>
                        </NavigationContainer>

                </ThemeContext.Provider>
            </View>
        
        
        
        
        
    )
}