import React from 'react'
import EarbudsHead from './EarbudsHead'
import EarbudsItem from './EarbudsItem'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import ViewAll from "./ViewAll/ViewAll"

function EarBuds() {
  return (
    <div className='bg-gradient-to-b from-[#edfefe] to-[#eeffff] container pb-2'>
        <EarbudsHead/>
        <EarbudsItem/>
        {/* <BrowserRouter>
          <Routes>
            <Route path='a' element={<ViewAll />}/>
          </Routes>         
        </BrowserRouter> */}
    </div>
  )
}

export default EarBuds