import React,{useState,useContext} from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import watch from "../Home.json"
import {Link} from "react-router-dom";
import PopUp from '../Earbuds/PopUp/PopUp';
import { Cart } from '../../Context/Context';

function WatchItem({items,searchTerm,setTerm}) {

  items = watch.watches

  const [popup,setPopup] = useState(false)   //popup
  const [searchedItems,setSearchedItems] = useState(watch)

  const {addToCart,dispatch} = useContext(Cart);

  const handleAdd = (item) =>{
    // console.log(item,"item");
    addToCart(item)
}


//popup
  if(popup){
    document.body.classList.add("overflow-y-hidden")
}else{
    document.body.classList.remove("overflow-y-hidden")
}

  return (
    <>
      
    <div className='pt-5'>
        <div className="flex justify-between mb-3 ">
          <h3 className='text-3xl'>Best <span className='font-bold'>Sellers</span></h3>
          <Link to="smart-watch" className='text-xs font-bold flex text-blue-800'>View All <IoArrowForwardCircleOutline size={16}/></Link>
        </div>
        <div className="flex gap-4 ">
          
          
{/* PRODUCT CARD... */}
        {items
          	.filter((item) => {
				if(searchTerm == undefined){
					// console.log(item,'all');
				return item;

				}else {
					// console.log(item,'searched');
				
				return item.name.toLowerCase().includes(searchTerm.toLowerCase());
				}
        	})
        	.map((item) => {
            return (
              	<div key={item.id} className='outline-none w-[25%] flex flex-col relative rounded-2xl shadow-xl'>
                	<div>
                		<span className='absolute text-[10px] tracking-tight font-bold z-[1] left-0 top-2.5 rounded-r-lg bg-black text-white p-1'>{item.status}</span>
                  		<span className='absolute justify-center  bottom-36 z-[1] left-[15%] text-center border-1 border-solid border-black rounded-2xl py-1.5 w-[70%] text-xs font-bold bg-yellow-500 text-black tracking-tight'>{item.hours}</span>
                	</div>
					<div className="h-80 w-[100%] rounded-t-3x ">
						<img src={item.image} alt={item.name} className='w-[100%] rounded-lg' />
					</div>
					<div className="px-2.5 py-6 bg-slate-100">
						<div className=" text-4">
							<div className='flex justify-between'>
								<h5 className='font-extrabold '>{item.name}</h5>
								<p>{item.color}</p>
							</div>
							<div className='flex pt-2 gap-1 mt-1.5 mb-2.5'>
								<p className='text-sm mb-1 font-bold'>&#8377;{Number(item.price).toFixed(2)}</p>
								<p className='mb-1 text-xs text-gray-400 line-through'>&#8377;{item.oldprice}</p>
								<p className='text-xs pr-1.5 text-green-400'>{item.off}</p>
							</div>
						</div>
						<div className="">
								{/* <button key={item.id}
									onClick={() =>setPopup(true)} 
								className='px-32 whitespace-nowrap	py-2 bg-black text-sm text-white rounded-lg'>Add To Cart</button>  */}
								<button key={item.id}
									onClick={()=>{
										handleAdd(item)}
									}
								className='px-32 whitespace-nowrap	py-2 bg-black text-sm text-white rounded-lg'>Add To Cart</button>
						</div>
					</div>
            	</div>
            	)
          	})}
        </div>
    </div>
	{popup && <PopUp close={setPopup}/>}

    </>
  )
}

export default WatchItem