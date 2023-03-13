import React from 'react';
import * as Font from "expo-font";
import { View } from 'react-native';

import PageManager from './src/components/other/PageManager';


export default function App() {

  const [fontsloaded] = Font.useFonts({
        JosefinSans: require('./src/assets/fonts/JosefinSans-Bold.ttf'),
        Inter : require('./src/assets/fonts/Inter.ttf')
  })
  if(!fontsloaded) return null
  
  return (
    <View style={{ width: "100%", height: "100%"}}>  
      <PageManager></PageManager>
    </View>
    
  );
}
