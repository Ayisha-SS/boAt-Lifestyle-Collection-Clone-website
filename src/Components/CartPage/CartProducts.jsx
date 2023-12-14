import React,{useContext} from 'react'
import { Cart } from '../Context/Context'

const CartProducts = ({item}) => {
    const {removeFromCart} = useContext(Cart);

    const handleRemove = () =>{
        removeFromCart(item);
    }
  return (
    <div className='flex flex-row items-center gap-0 px-10'>
        <div className='w-40'>
            <img src={item.image} alt={item.name} />
        </div>
        <div>
            <p className='text-xl font-medium'>{item.name}</p>
            <p className='text-lg'>&#8377;{Number(item.price).toFixed(2)}</p>
        </div>
       <button className='bg-gray-500 text-white text-lg font-bold rounded-full p-4 hover:bg-red-500'
        onClick={handleRemove}
       >
        Remove</button>
    </div>
  )
}

export default CartProducts