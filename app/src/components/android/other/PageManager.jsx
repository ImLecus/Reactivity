import { useState } from "react";

import Home from "../pages/Home";
import Profile from "../pages/Profile"
import Journal from "../pages/Journal"
import Califications from "../pages/Califications";
import Settings from "../pages/Settings";

import { ThemeContext } from "../../UserContext";
import theme from "../../../data/theme.json";

import Cache from "../../../data/cache.json"

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function PageManager(){

    const [colorTheme,setTheme] = useState(Cache.user.preferences.theme)
    return(   
        <ThemeContext.Provider value={[colorTheme,setTheme]}>
                <NavigationContainer  theme={{...DefaultTheme, colors: {...DefaultTheme.colors, background: theme[colorTheme].bg,}}}>
                    <Stack.Navigator> 
                            <Stack.Screen name="Home"               component={Home}            options={{headerShown: false}}/>
                            <Stack.Screen name="Profile"            component={Profile}         options={{headerShown: false}}/>
                            <Stack.Screen name="Journal"            component={Journal}         options={{headerShown: false}}/>
                            <Stack.Screen name="Califications"      component={Califications}   options={{headerShown: false}}/>
                            <Stack.Screen name="Settings"           component={Settings}        options={{headerShown: false}}/>
                    </Stack.Navigator>
                </NavigationContainer>
        </ThemeContext.Provider>  
        
    )
}