import React,{useState} from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import items from "./Speaker.json"
import speaker from "../Home.json"
import {Link, Outlet} from "react-router-dom"


function SpeakerItem({item}) {

    item = speaker.wirelessSpeakers
    const [searchedItems,setSearchedItems] = useState(speaker)

  return (
    <div className='pt-5'>
        <div className="flex justify-between mb-3 ">
            <h3 className='text-3xl'>Best <span className='font-bold'>Sellers</span></h3>
            <Link to="wireless-speaker" className='text-xs flex text-blue-800'>View All <IoArrowForwardCircleOutline size={16}/></Link>
        </div>

        <div className="flex gap-4 ">
{/* PRODUCT CARD... */}
            

    {item.map((item) => {
        return (

        <div className='outline-none w-[25%] flex flex-col relative rounded-2xl shadow-xl'>
                <div>
                    <span className='absolute text-[10px] tracking-tight font-bold z-[1] left-0 top-2.5 rounded-r-lg bg-black text-white p-1'>{item.status}</span>
                    <span className='absolute justify-center  bottom-36 z-[1] left-[15%] text-center border-1 border-solid border-black rounded-2xl py-1.5 w-[70%] text-xs font-bold bg-yellow-500 text-black tracking-tight'>{item.hours}</span>
                </div>
                <div className="h-80 w-[100%] rounded-t-2x ">
                    <img src="src\assets\images\wirless-spkr\74a6b20d-9842-49da-b279-022812b81e1f_300x.png" alt="Airpode-131" className='w-[100%]'/>
                </div>
                <div className="px-2.5 py-6 bg-slate-100">
                    <div className=" text-4">
                        <div className='flex justify-between'>
                            <h5 className='font-extrabold '>{item.name}</h5>
                            <p>{item.color}</p>
                        </div>
                        <div className='flex pt-2 gap-1 mt-1.5 mb-2.5'>
                        <p className='text-sm mb-1 font-bold'>&#8377;{item.offer}</p>
                        <p className='mb-1 text-xs text-gray-400'>&#8377;{item.price}</p>
                        <p className='text-xs pr-1.5 text-green-400'>{item.off}</p>
                        </div>
                    </div>
                    <div className="">
                        <button className='px-32 whitespace-nowrap	py-2 bg-black text-sm text-white rounded-lg'>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    })}


        </div>
    </div>
  )
}

export default SpeakerItem