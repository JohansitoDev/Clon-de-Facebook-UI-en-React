//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Login from './components/Login';
import Navbar from './components/Navbar';

function App(){
  return(
    <ion-app>
      <ion-toolbar>
        <Navbar/>
      </ion-toolbar>
      <ion-content>
        <h2>MI pagina principal</h2>
      </ion-content>
    </ion-app>
  )
}
export default App
