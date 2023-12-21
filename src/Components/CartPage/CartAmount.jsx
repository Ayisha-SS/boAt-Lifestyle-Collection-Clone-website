import React from 'react'
import { FiPlus,FiMinus } from "react-icons/fi";

const CartAmount = ({amount,setDecrease,setIncrease}) => {
  return (
    <div>
        <div className='flex justify-between'>
        <FiMinus className='bg-black text-white rounded-full' size={20}
        onClick={() => setDecrease()}/>
        <span>{amount}</span>
        <FiPlus className='bg-black text-white rounded-full' size={20}
        onClick={() => setIncrease()}
        />
        </div>
    </div>
  )
}

export default CartAmount