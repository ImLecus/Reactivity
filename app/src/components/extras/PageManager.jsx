import { useState } from "react";

import Home from "../home/Home";
import Profile from "../profile/Profile"
import Journal from "../journal/Journal"
import Califications from "../califications/Califications";

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
        <ThemeContext.Provider value={colorTheme}>
            <View style={{backgroundColor: theme[colorTheme].bg, width: "100%", height: "100%"}}>
                <NavigationContainer>
                    <Stack.Navigator> 

                        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
                        <Stack.Screen name="Journal" component={Journal} options={{headerShown: false}}/>
                        <Stack.Screen name="Califications" component={Califications} options={{headerShown: false}}/>

                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </ThemeContext.Provider>
            
        
        
        
        
        
    )
}