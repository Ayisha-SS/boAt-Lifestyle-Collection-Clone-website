import React from 'react';
import './App.css'
import MetaTag from './Components/MetaTag';
import NavOrder from './Components/NavBar/Navorder';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes,Route ,Link } from 'react-router-dom';
import HomLink from './Components/Home/HomLink';
import ViewAll from './Components/Home/Earbuds/ViewAll/ViewAll';
import AllWatch from './Components/Home/Watches/AllWatch/AllWatch';
import AllBands from './Components/Home/Neckbands/AllBands/AllBands';
import AllheadPhones from './Components/Home/Headphones/AllheadPhones/AllheadPhones';
import AllSpeaker from './Components/Home/Speaker/AllSpeaker/AllSpeaker';
import AllprtySpkr from './Components/Home/PartySpeaker/AllprtySpkr/AllprtySpkr';
import AllsoundBar from './Components/Home/SoundBars/AllsoundBar/AllsoundBar';
import Chatbot from './Components/Home/Chatbot';

import AddtoCart from './Components/CartPage/AddtoCart';
import { Context } from './Components/Context/Context';

function App() {
  return (
    <>
      <MetaTag/>
      <NavOrder/>

      <Context>
		
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route path='/' element={<HomLink/>}/>
				<Route path='wireless-earbuds' element={<ViewAll/>}/>
				<Route path='smart-watch' element={<AllWatch/>}/>
				<Route path='neckbands' element={<AllBands/>}/>
				<Route path='headphones' element={<AllheadPhones/>}/>
				<Route path='wireless-speaker' element={<AllSpeaker/>}/>
				<Route path='party-speaker' element={<AllprtySpkr/>}/>
				<Route path='soundbar' element={<AllsoundBar/>}/>
			</Routes>
		</BrowserRouter>

      </Context>
      <Chatbot/>
    </>
  )
}

export default App