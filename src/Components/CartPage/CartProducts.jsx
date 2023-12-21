import React,{useContext} from 'react'
import { Cart } from '../Context/Context';
import { MdDelete } from "react-icons/md";
import CartAmount from './CartAmount';

const CartProducts = ({item,amount}) => {
    // console.log(item,"item");
    const {removeFromCart,setDecrease,setIncrease} = useContext(Cart);

    const handleRemove = () =>{
        removeFromCart(item);
    }

   

  return (
    <div className='flex flex-row items-center justify-between gap-0 px-8 mb-3'>
            <div className="w-[35%] ">
                {/* {console.log(Cart)} */}
                <img  src={item.image}  alt={item.name} className='w-[100%] rounded-lg'/>
            </div>
        {/* <div className='flex flex-col text-sm mx-2 border-[2px] p-1'>
            <span className='text-xs mx-1'>2</span>
        </div> */}
        <div className=''>
            <p className='text-base  font-medium mb-3'>{item.name}</p>
            <p className='text-base font-bold '>&#8377;{Number(item.price).toFixed(2)}</p>
            
            <CartAmount
                amount = {amount}
                setDecrease={() => setDecrease(type)}
                setIncrease={() => setIncrease(type)}
            />
           
        </div>
       {/* <button className='bg-black text-white text-base font-bold rounded-lg px-3 py-1 ml-6 mb-2 '
        onClick={ ()=>{handleRemove(item)}}
       >
        Remove</button> */}
        <MdDelete className='ml-3 text-4xl text-center rounded-xl hover:bg-slate-300 ' onClick={() =>{handleRemove(item)}}/>
    </div>
  )
}

export default CartProducts