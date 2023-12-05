import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import NavOrder from './Components/NavBar/Navorder';
import MetaTag from './Components/MetaTag';
import HomLink from './Components/Home/HomLink';
import ViewAll from './Components/Home/Earbuds/ViewAll/ViewAll';
import { BrowserRouter, Routes,Route ,Link } from 'react-router-dom';


function App() {
  return (
    <>
      <MetaTag/>
      <NavOrder/>
      <BrowserRouter>
      <NavBar/>
      {/* <HomLink/> */}
        <Routes>
          <Route path='/' element={<HomLink/>}/>
          <Route path='wireless-earbuds' element={<ViewAll/>}/>
        </Routes>
      </BrowserRouter>
      {/* <ViewAll/> */}
    </>
  )
}

export default App