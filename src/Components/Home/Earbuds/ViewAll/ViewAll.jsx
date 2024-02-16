import React,{useState} from 'react'
import Filter from "./Filter"
// import Sort from './Sort'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import Items from './Items'
import Footer from '../../Footer/Footer';

import Sort from "./Sort"; // Import the Sort component
import ViewItems from "./ViewItem.json"; 

function ViewAll() {

  const [viewAll, setViewAll] = useState(ViewItems);

  const handleSorting = (sortedProducts) => {
    setViewAll(sortedProducts);
  };

  return (
    <>
    
    <div className='p-[3rem]'>
      <div className='flex text-xs'>
        <Link to="/">Home</Link> <MdKeyboardArrowRight />
        <h4>Wireless Earbuds</h4>
      </div>
      <h2 className='pt-5 font-extrabold text-2xl tracking-wide'>Wireless Earbuds</h2>
      <div className='flex justify-between'>
        <Filter/>
        <Sort/>
        {/* <Sort handleSorting={handleSorting} viewAll={viewAll} /> */}
      </div>
      <Items />   
    </div>
    <Footer/>
    </>
  )
}

export default ViewAll