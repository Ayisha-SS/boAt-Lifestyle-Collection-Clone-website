import React, { useContext } from 'react'
import HomLink from '../Home/HomLink'
import { Link } from "react-router-dom"
import { Cart } from '../Context/Context'
import EarbudsItem from '../Home/Earbuds/EarbudsItem';
import CartProducts from './CartProducts';

function AddtoCart({remove}) {

  const {products,total} = useContext(Cart);
  return (
    <div className='p-3 flex flex-col h-[100%] w-[30%] translate-x-0 transition ease-[cubic-bezier(0.75,0,1.75,1)] bg-white  right-0 z-10 top-0 fixed'>
        <div className='flex justify-between'>
          <h6 className='text-xl py-4 font-bold'>Your Cart</h6>
          <span onClick={() => remove(false)} className='text-xl cursor-pointer'>&times;</span>
        </div>
        <div className=' flex flex-col items-center mt-auto mb-auto flex-grow-0'>
            <div className='align-middle overflow-hidden'>
                <img src="" alt="Cart product" />
            </div>
            <h6 className='text-xl font-bold mt-6 mb-4 text-[#1a2024]'>Your cart is feeling lonely</h6>
            <div className='mt-8'>
                <Link to="/" className='px-7 py-3 rounded-xl text-base font-bold text-white bg-black'>Start Shopping</Link>
            </div>
        </div>
        <div>
          <span className='text-xl py-4 font-bold'>Total: &#8377;{total.toFixed(2)}</span>
        </div>

        {products.map((item,index) =>
            <CartProducts
                key={index}
                item={item}
            />

        )}
    </div>
  )
}

export default AddtoCart