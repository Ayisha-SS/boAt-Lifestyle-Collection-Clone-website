import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import NavOrder from './Components/NavBar/Navorder';
import MetaTag from './Components/MetaTag';
import HomLink from './Components/Home/HomLink';
import ViewAll from './Components/Home/Earbuds/ViewAll/ViewAll';


function App() {
  return (
    <>
      <MetaTag/>
      <NavOrder/>
      <NavBar/>
      <HomLink/>
      {/* <ViewAll/> */}
    </>
  )
}

export default App