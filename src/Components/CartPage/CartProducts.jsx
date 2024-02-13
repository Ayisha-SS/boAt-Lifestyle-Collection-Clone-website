import React,{useContext} from 'react'
import { Cart } from '../Context/Context';
import { MdDelete } from "react-icons/md";
import StripeCheckoutButton from '../StripeCheckout';

const CartProducts = ({item}) => {
    const { removeFromCart, incrementItem,decrementItem } = useContext(Cart);

    const handleRemove = () =>{
        removeFromCart(item);
    };

    // const handleDecrease = () => {
    //     setDecrease(item.type);
    // };

    // const handleIncrease = () => {
    //     setIncrease(item.type);
    // };

  return (
    <>
    
    <div className='flex flex-row items-center justify-between gap-0 px-8 mb-3'>
        <div className="w-[35%] ">
            <img  src={item.image}  alt={item.name} className='w-[100%] rounded-lg'/>
        </div>

        <div>
            <p className='text-base  font-medium mb-3'>{item.name}</p>
            <p className='text-base font-bold '>&#8377;{Number(item.price).toFixed(2)}</p>
        </div>
        <div className="flex items-center mx-">
        <button onClick={() => decrementItem(item.type)} className="text-lg font-bold mr-2">-</button>
            <span className="text-lg font-bold mr-2">{item.amount}</span>
            <button onClick={() => incrementItem(item.type)} className="text-lg font-bold">+</button>
        </div>
        <MdDelete className='ml-3 text-2xl text-center hover:bg-slate-300 cursor-pointer' onClick={() =>{handleRemove(item)}}/>

        <div>
            <StripeCheckoutButton price={item.price * item.amount}/>
        </div>
    </div>
    </>
  )
}

export default CartProducts