import React, { useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
// import ViewAll from "./ViewItem.json"

function Sort() {
    // const [state,setState] = useState(false)

    const [ViewAll,setViewAll] = useState([]);
    const [sortBy,setSortBy] = useState("sort");

    const handleSortChange = (event) => {
		// console.log("hi");
      setSortBy(event.target.value);

    //   const sortedProducts = [...ViewAll].sort((a,b) => {
    //     if (sortBy === "a-z") {
    //       return b.name.localeCompare(a.name);
    //     } else if (sortBy === "z-a") {
    //       return a.name.localeCompare(b.name);
    //     } else if (sortBy === "highest") {
    //       return  b.price - a.price;
    //     } else if (sortBy === "lowest") {
    //       return a.price - b.price;
    //     }
    //   });
    //   setViewAll(sortedProducts)


	let sortedProducts = [...ViewAll];

    if (event.target.value === 'lowest') {
      sortedProducts = sortedProducts.sort((a, b) => a.offrprice - b.offrprice);
	  console.log("low");
    } else if (event.target.value === 'highest') {
      sortedProducts = sortedProducts.sort((a, b) => b.offrprice - a.offrprice);
	  console.log("high");
    } else if (event.target.value === 'a-z') {
      sortedProducts = sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
	  console.log("a-z");
    } else if (event.target.value === 'z-a') {
      sortedProducts = sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
	  console.log("z-a");
    }

    setViewAll(sortedProducts);
    };

  return (
	
    // <div className='pt-5'>
    //     <button onClick={() => setState(true)} className='relative flex text-lg font-bold  border-black px-4 py-2 rounded-md bg-[#eff4f7]'><BiSortAlt2 />Sort by <MdKeyboardArrowDown /></button>
    //     {state && (
    //       <div className=' absolute pl-8 pr-10 bg-slate-100 border-solid z-10 right-4 mt-2'>
    //         <ul className='my-4 pr-6'>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Featured</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Best selling</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Alphabetically,A-Z</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Alphabetically,Z-A</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Price,low to high</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>Price,high to low</li>
    //           <li className='mb-3 tracking-widest mr-5 text-base font-thin'>New Arrivals</li>
    //         </ul>
    //       </div>
    //     )}
    // </div>

    <div className='pt-5'>
      <form action="#">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" className='relative flex text-lg font-bold  border-black px-4 py-2 rounded-md bg-[#eff4f7]' onChange={handleSortChange}>
          {/* <option value="default">Sort</option> */}
          {/* <option value="sort"><BiSortAlt2 /> Sort</option> */}
          <option value="a-z" >Alphabetically,A-Z</option>
          <option value="" disabled></option>
          <option value="z-a">Alphabetically,Z-A</option>
          <option value="" disabled></option>
          <option value="highest">Price,low to high</option>
          <option value="" disabled></option>
          <option value="lowest">Price,high to low</option>
          <option value="" disabled></option>
        </select>
      </form>
    </div>
  )
}

export default Sort