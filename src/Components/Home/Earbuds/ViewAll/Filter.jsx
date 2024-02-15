import React, { useEffect, useState } from "react";
import { PiArrowsLeftRightDuotone } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import ViewAll from "./ViewItem.json"

function Filter() {
  const [modal, setModal] = useState(false);
  const [colorFilter, setColorFilter] = useState('');
  const [viewAll,setViewAll] = useState(ViewAll);


  const applyFilter = () => {
    let filteredProducts = ViewAll;
    if (colorFilter) {
      filteredProducts = filteredProducts.filter(product => product.color === colorFilter);
    }
    setViewAll(filteredProducts)
  };

  // const getFilter = () =>{
  //   return viewAll;
  // }
  useEffect(()=>{
    applyFilter()
  },[colorFilter])


  // const handleModal = () =>{
  //   setModal(!modal)
  // }

  return (
    <div className="pt-5">
      <button
        onClick={() => setModal(true)}
        className="flex text-lg font-bold border-black px-4 py-2 rounded-md bg-[#eff4f7]"
      >
        <PiArrowsLeftRightDuotone />
        Filter By <MdKeyboardArrowDown />
      </button>
      {modal && (
        <div className="p-3 flex flex-col h-[100%] w-[25%] translate-x-0 transition ease-[cubic-bezier(0.75,0,1.75,1)] bg-white  left-0 z-10 top-0 fixed">
          <div className="flex justify-between">
            <span className="flex text-xl font-bold cursor-default">
              <PiArrowsLeftRightDuotone className="mr-2" />
              Filter By
            </span>
            <span
              className="text-4xl flex justify-center items-center w-8 h-8 bg-[#d0d9dE] rounded-full cursor-pointer"
              onClick={() => setModal(false)}
            >
              &times;
            </span>
          </div>
          <div className="mt-6 overflow-y-auto">
            <div className="h-[70vh] w-[45%] bg-slate-200">
              <ul className="text-base px-3 py-4">
                <li className="mb-6 cursor-pointer font-bold">Category</li>
                <li className="mb-6 cursor-pointer" onClick={()=>setColorFilter('blue')}>Color</li>
                <li className="mb-6 cursor-pointer">Price</li>
                <li className="mb-6 cursor-pointer">Best For</li>
                <li className="mb-6 cursor-pointer">Noise Cancellation</li>
                <li className="mb-6 cursor-pointer">Features</li>
                <li className="mb-6 cursor-pointer">Availability</li>
              </ul>
            </div>
            <div></div>
            <div className="pt-12">
              <button className="w-[40%] py-4 bg-[#D0D9DE] mr-2 rounded-xl">
                Clear All
              </button>
              <button className="w-[40%] py-4 bg-black text-white rounded-xl">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const getFilter = (viewAll, colorFilter) => {
  let filteredProducts = viewAll;
  if (colorFilter) {
    filteredProducts = filteredProducts.filter(product => product.color === colorFilter);
  }
  return filteredProducts;
};
// export {getFilter};
export { Filter, getFilter };