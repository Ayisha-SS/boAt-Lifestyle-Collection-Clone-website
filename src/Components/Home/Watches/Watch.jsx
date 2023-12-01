import React from 'react'
import WatchHead from './WatchHead'
import WatchItem from './WatchItem'

function Watch() {
  return (
    <div className='bg-gradient-to-b from-[#ffffff] to-[#fff1d6] container'>
        <WatchHead/>
        <WatchItem/>
    </div>
  )
}

export default Watch