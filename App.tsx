import React from 'react';
import { useState } from 'react';
import * as Font from "expo-font";
import { View } from 'react-native';

import PageManager from './src/components/extras/PageManager';
import Header from './src/components/extras/Header';

import * as Theme from "./src/data/theme"

export default function App() {

  const [active,setActive] = useState(0)
  const [fontsloaded] = Font.useFonts({
        JosefinSans: require('./src/assets/fonts/JosefinSans-Bold.ttf'),
        Inter : require('./src/assets/fonts/Inter.ttf')
  })
  if(!fontsloaded) return null
  
 

  return (
    <View style={{backgroundColor: Theme.colors[Theme.colorTheme].bg, width: "100%", height: "100%"}}>  
      <Header></Header>
      <PageManager></PageManager>
    </View>
    
  );
}
