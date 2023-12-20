import React,{useContext} from 'react'
import { Cart } from '../Context/Context';
import { CiCircleMinus,CiCirclePlus } from "react-icons/ci";

const CartProducts = ({item}) => {
    // console.log(item,"item");
    const {removeFromCart} = useContext(Cart);

    const handleRemove = () =>{
        removeFromCart(item);
    }
  return (
    <div className='flex flex-row items-center gap-0 px-8 mb-3'>
        <div className="w-[35%] ">
            {/* {console.log(Cart)} */}
            <img  src={item.image}  alt={item.name} className='w-[100%] rounded-lg'/>
        </div>
        <div className='flex flex-col text-sm mx-2 border-[2px] p-1'>
            <CiCirclePlus />
            {/* <input type="text" placeholder='2' className='w-5 text-center outline-dashed my-2 ml-2'/> */}
            <span className='text-xs mx-1'>2</span>
            <CiCircleMinus onClick={() => increment(type)}/>
        </div>
        <div className='ml-2'>
            <p className='text-base  font-medium'>{item.name}</p>
            <p className='text-base font-bold '>&#8377;{Number(item.price).toFixed(2)}</p>
        </div>
       <button className='bg-black text-white text-base font-bold rounded-lg px-3 py-1 ml-6 mb-2 hover:bg-slate-500 '
        onClick={ ()=>{handleRemove(item)}}
       >
        Remove</button>
    </div>
  )
}

export default CartProducts