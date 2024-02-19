import React from 'react';
import './App.css'
import MetaTag from './Components/MetaTag';
import NavOrder from './Components/NavBar/NavOrder';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomLink from './Components/Home/HomLink';
import ViewAll from './Components/Home/Earbuds/ViewAll/ViewAll';
import AllWatch from './Components/Home/Watches/AllWatch/AllWatch';
import AllBands from './Components/Home/Neckbands/AllBands/AllBands';
import AllheadPhones from './Components/Home/Headphones/AllheadPhones/AllheadPhones';
import AllSpeaker from './Components/Home/Speaker/AllSpeaker/AllSpeaker';
import AllprtySpkr from './Components/Home/PartySpeaker/AllprtySpkr/AllprtySpkr';
import AllsoundBar from './Components/Home/SoundBars/AllsoundBar/AllsoundBar';
import Chatbot from './Components/Home/Chatbot';
import { Context } from './Components/Context/Context';
import SignUp from './Components/SignIn/SignUp';
import Log from './Components/SignIn/Log';
import LogIn from './Components/SignIn/LogIn';
import TrulyYours from './Components/TrulyYours/TrulyYours';


function App() {
	return (
    <>
      <MetaTag/>
      <NavOrder/>

      <Context>

		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route path="boat" element={<TrulyYours/>}/>
				<Route path='/' element={<HomLink/>}/>
				<Route path='wireless-earbuds' element={<ViewAll/>}/>
				<Route path='smart-watch' element={<AllWatch/>}/>
				<Route path='neckbands' element={<AllBands/>}/>
				<Route path='headphones' element={<AllheadPhones/>}/>
				<Route path='wireless-speaker' element={<AllSpeaker/>}/>
				<Route path='party-speaker' element={<AllprtySpkr/>}/>
				<Route path='soundbar' element={<AllsoundBar/>}/>
				<Route path='signup' element={<SignUp/>}/>
				<Route path='login' element={<LogIn/>}/>
			</Routes>
		</BrowserRouter>

		{/* <BrowserRouter>
			<Routes>
				<Route
					path={['/','/wireless-earbuds','/smart-watch','/neckbands','/headphones','/wireless-speaker','/party-speaker','/soundbar','/boat','/signup']} 
					element = {
						<>
							<NavBar />
							<Route path="/" element={<HomLink />} />
							<Route path="wireless-earbuds" element={<ViewAll />} />
							<Route path="smart-watch" element={<AllWatch />} />
							<Route path="neckbands" element={<AllBands />} />
							<Route path="headphones" element={<AllheadPhones />} />
							<Route path="wireless-speaker" element={<AllSpeaker />} />
							<Route path="party-speaker" element={<AllprtySpkr />} />
							<Route path="soundbar" element={<AllsoundBar />} />
							<Route path="/boat" element={<TrulyYours />} />
							<Route path="/signup" element={<SignUp />} />
						</>
					} />
					<Route 
						path={['/login']} 
						element={
							<>
								<Route path="/login" element={<LogIn />} />
							</>
						} />
			</Routes>
		</BrowserRouter> */}

      </Context>
	  
      <Chatbot/>
	  
	  
    </>
  )
}

export default App




