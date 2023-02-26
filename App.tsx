import Footer from './src/components/Footer';
import Main from './src/components/Main';
import Profile from './src/components/Profile';
import React from 'react';
import { useState } from 'react';
import * as Font from "expo-font";

export default function App() {

  const [active,setActive] = useState(0)
  const [fontsloaded] = Font.useFonts({
        JosefinSans: require('./src/assets/fonts/JosefinSans.ttf'),
        Inter : require('./src/assets/fonts/Inter.ttf')
  })
  if(!fontsloaded) return null
  
 

  return (
    <>
      <Main state={active}/>
      <Profile state={active} />
      <Footer state={active} function={setActive}/>
    </>
    
  );
}
