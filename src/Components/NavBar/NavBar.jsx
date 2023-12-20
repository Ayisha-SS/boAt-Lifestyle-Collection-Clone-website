import React, { useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown,FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import companyLogo from '../../assets/images/boat.jpeg';
import { IoIosSearch,IoIosClose } from "react-icons/io";
import NavDropdown from './NavDropdown';
import SignUp from '../SignIn/SignUp';
import AddtoCart from '../CartPage/AddtoCart';
// import { Cart } from '../Context/Context'
import Log from '../SignIn/Log';
import EarbudsItem from '../Home/Earbuds/EarbudsItem';
import CollectionsdrpDown from './CollectionsdrpDown';
import { Cart } from '../Context/Context';

function NavBar() {
  const [showPopUp,setShowpopup] = useState(false);
  const [cart,setCart] = useState(false);
  const {products} = useContext(Cart);
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
    <div className='flex  flex-row  m-0 md:px-10 bg-white bor shadow-[0_3px_2px_rgba(0,0,0,0.2)] sticky top-0 z-10 w-[100%]'>
      <div className='w-24 p-1 mr-10'>
        <Link to='/'><img src={companyLogo} alt="Logo" /></Link>
      </div>
      <nav className='flex gap-1 font-thin  cursor-pointer text-base tracking-widest items-center w-100 relative'>
        <Link to="categories" spy={true} smooth={true} duration={500} className='flex mr-6 relative py-4 items-center hover:font-bold navdrop'>Categories<FaAngleDown /><CollectionsdrpDown/>
        </Link>
        <Link to="boat" spy={true} smooth={true} duration={500} className='mr-6 py-4 items-center hover:font-bold '>boAt Truly Yours</Link>
        <Link to="gift" spy={true} smooth={true} duration={500} className='mr-6 py-4 items-center hover:font-bold '>Gift with boAt</Link>
        <Link to="order" spy={true} smooth={true} duration={500} className='mr-6 py-4 items-center hover:font-bold '>Corporate Orders</Link>
        <Link to="more" spy={true} smooth={true} duration={500} className='flex py-4 items-center relative hover:font-extrabold navdrop'>More<FaAngleDown /><NavDropdown />
</Link>
      </nav>
      <div className='flex items-center ml-52 gap-3'>
      <div className='px-2 ml-4 relative rounded-3xl pl-2  py-2  flex bg-slate-100 gap-1'>
        <IoIosSearch size={25} className='box-content '/><input type="text" placeholder='search' value={searchTerm} className='bg-transparent focus:outline-none' 
        onChange={(event) => {
          setSearchTerm(event.target.value);
      }}/>
        <IoIosClose className='p-1 box-content bg-white rounded-full' onClick={() =>setSearchTerm("")}/>
      </div>      
      <div className='flex gap-2 '>
      <FaRegUser size={25} className='ml-2' onClick={() => setShowpopup(true)}/>
      <HiOutlineShoppingBag size={25} className='ml-2' onClick={() => setCart(true)}/>
        <span className="text-[10px] absolute top-4 right-12 bg-red-500 text-white rounded-full px-2 py-1 mx-1 text-center">{products.length}</span>
      </div>  
      </div>
    </div>
    {showPopUp && <Log close={setShowpopup}/>}
      {cart && <AddtoCart remove={setCart}/>}
      {searchTerm && <EarbudsItem searchTerm={searchTerm} setTerm={setSearchTerm}/>}
    
    </>
  )
}

export default NavBar