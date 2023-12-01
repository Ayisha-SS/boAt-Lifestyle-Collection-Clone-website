import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import NavOrder from './Components/NavBar/Navorder';
import MetaTag from './Components/MetaTag';
import HomLink from './Components/Home/HomLink';


function App() {
  return (
    <>
      <MetaTag/>
      <NavOrder/>
      <NavBar/>
      <HomLink/>
    </>
  )
}

export default App