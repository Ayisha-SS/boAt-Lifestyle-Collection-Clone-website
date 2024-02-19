import React, { useState,useContext,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown,FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import companyLogo from '../../assets/images/boat.jpeg';
import { IoIosSearch,IoIosClose } from "react-icons/io";
import NavDropdown from './NavDropdown';
import AddtoCart from '../CartPage/AddtoCart';
import Log from '../SignIn/Log';
import CollectionsdrpDown from './CollectionsdrpDown';
import { Cart } from '../Context/Context';
import EarbudsItem from '../Home/Earbuds/EarbudsItem';
import Items from '../Home/Earbuds/ViewAll/Items';
import WatchItem from '../Home/Watches/WatchItem';
import AllItem from '../Home/Watches/AllWatch/AllItem';
import NeckItem from '../Home/Neckbands/NeckItem';
import BandsItem from '../Home/Neckbands/AllBands/BandsItem';
import PhoneItem from '../Home/Headphones/PhoneItem';
import HeadphnItem from '../Home/Headphones/AllheadPhones/HeadphnItem';
import SpeakerItem from '../Home/Speaker/SpeakerItem';
import AllspkrItems from '../Home/Speaker/AllSpeaker/AllspkrItems';
import PrtyspkrItem from '../Home/PartySpeaker/PrtyspkrItem';
import AllprtyItem from '../Home/PartySpeaker/AllprtySpkr/AllprtyItem';
import SoundbarItem from '../Home/SoundBars/SoundbarItem';
import SoundbarItems from '../Home/SoundBars/AllsoundBar/SoundbarItems';

function NavBar() {
  const [showPopUp,setShowpopup] = useState(false);
  const [cart,setCart] = useState(false);
  const {products} = useContext(Cart);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (cart) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  }, [cart]);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // navigate(`/wireless-earbuds?query=${searchTerm}`);
      let path;
      if (searchTerm === "wirelsee-earbuds") {
        path = '/wireless-earbuds';
      } else if (searchTerm === 'smart-watch') {
        path = '/smart-watch';
      } else if (searchTerm === 'neckbands') {
        path = '/neckbands';
      } else if (searchTerm === 'headphones') {
        path = '/headphones';
      } else if (searchTerm === 'wireless-speaker') {
        path = '/wireless-speaker';
      } else if (searchTerm === 'party-speaker') {
        path = '/party-speaker';
      } else if (searchTerm === 'soundbar') {
        path = '/soundbar';
      } else {
        path = `/${path}/query=${searchTerm}`
      }
      navigate(path);
    }
  };

  return (
    <>
    <div className='flex  flex-row py-2 m-0 md:px-10 bg-white border-b-2 sticky top-0 z-10 w-[100%]'>
      <div className='w-24 p-1 mr-10'>
        <Link to='/'><img src={companyLogo} alt="Logo" /></Link>
      </div>
      <nav className='flex gap-1 font-thin  cursor-pointer text-base tracking-widest items-center w-100 relative'>
        <Link to="categories" className='flex mr-6 relative py-4 items-center hover:font-bold navdrop'>Categories<FaAngleDown /><CollectionsdrpDown/>
        </Link>
        <Link to="boat" className='mr-6 py-4 items-center hover:font-bold '>boAt Truly Yours</Link>
        <Link to="gift" className='mr-6 py-4 items-center hover:font-bold '>Gift with boAt</Link>
        <Link to="order" className='mr-6 py-4 items-center hover:font-bold '>Corporate Orders</Link>
        <Link to="more" className='flex py-4 items-center relative hover:font-extrabold navdrop'>More<FaAngleDown /><NavDropdown />
</Link>
      </nav>
      <div className='flex items-center ml-52 gap-3'>
        <div className='px-2 ml-4 relative rounded-3xl pl-2  py-2  flex bg-slate-100 gap-1'>
          <IoIosSearch size={25} className='box-content '/>
            <input type="text" placeholder='search' value={searchTerm} className='bg-transparent focus:outline-none' 
              onChange={(event) => {
                setSearchTerm(event.target.value);
            }}
              />
          <IoIosClose className='p-1 box-content bg-white rounded-full' onClick={() => setSearchTerm("")}/>
        </div>      
        <div className='flex gap-2 '>
          <FaRegUser size={25} className='ml-2' onClick={() => setShowpopup(true)}/>
          <HiOutlineShoppingBag size={25} className='ml-2' onClick={() => setCart(true)}/>
          <span className="text-[8px] absolute top-5 right-14 bg-red-500 text-white rounded-full px-2 py-1 text-center">{products.length}</span>
        </div>  
      </div>
    </div>
    {showPopUp && <Log close={setShowpopup}/>}
      {cart && <AddtoCart remove={setCart}/>}
      {searchTerm && 
      // <>
      //   <EarbudsItem searchTerm={searchTerm} setTerm={setSearchTerm}/>
      //   <Items searchTerm={searchTerm} setTerm={setSearchTerm}/> 
      //   <WatchItem searchTerm={searchTerm} />
      //   <AllItem searchTerm={searchTerm} />
      //   <NeckItem searchTerm={searchTerm} />
      //   <BandsItem searchTerm={searchTerm} />
      //   <PhoneItem searchTerm={searchTerm}/>
      //   <HeadphnItem searchTerm={searchTerm} />
      //   <SpeakerItem searchTerm={searchTerm} />
      //   <AllspkrItems searchTerm={searchTerm} />
      //   <PrtyspkrItem searchTerm={searchTerm}/>
      //   <AllprtyItem searchTerm={searchTerm}/>
      //   <SoundbarItem searchTerm={searchTerm} />
      //   <SoundbarItems searchTerm={searchTerm} />
      // </>
       handleSearch()
       }
    </>
  )
}

export default NavBar