import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import {Helmet} from "react-helmet";
import NavOrder from './Components/NavBar/Navorder';


function App() {
  return (
    <>
    <Helmet>
      <title>Boat</title>
    </Helmet>
      <NavOrder/>
      <NavBar/>
    </>
  )
}

export default App