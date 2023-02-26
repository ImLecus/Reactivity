import Footer from './src/components/Footer';
import Main from './src/components/Main';
import Widgets from './src/components/Widgets';
import Stats from './src/components/Stats';
import Profile from './src/components/Profile';
import React from 'react';
import { useState } from 'react';

export default function App() {

  
  const [active,setActive] = useState(0)

  return (
    <>
      <Main state={active}/>
      <Stats state={active} />
      <Widgets state={active} />
      <Profile state={active} />
      <Footer state ={active} function={setActive}/>
    </>
    
  );
}
