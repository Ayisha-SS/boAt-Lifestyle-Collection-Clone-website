
// import React, { useState } from 'react'
// import { BiSortAlt2 } from "react-icons/bi";
// import { MdKeyboardArrowDown } from "react-icons/md";
// function Sort() {
//     const [ViewAll,setViewAll] = useState([]);
//     const [sortBy,setSortBy] = useState("sort");
//     const handleSortChange = (event) => {
// 		console.log("hi");
//       setSortBy(event.target.value);
//       const sortedProducts = [...ViewAll].sort((a,b) => {
//         if (sortBy === "a-z") {
//           return b.name.localeCompare(a.name);
//         } else if (sortBy === "z-a") {
//           return a.name.localeCompare(b.name);
//         } else if (sortBy === "highest") { 
//           return  b.price - a.price;
//         } else if (sortBy === "lowest") { 
//           return a.price - b.price;
//         }
//       });
//       setViewAll(sortedProducts)
//     };
//   return (
//     <div className='pt-5'>
//       <form action="#">
//         <label htmlFor="sort"></label>
//         <select name="sort" id="sort" className='relative flex text-lg font-bold  border-black px-4 py-2 rounded-md bg-[#eff4f7]' onChange={handleSortChange}>
//           <option value="a-z" >Alphabetically,A-Z</option>
//           <option value="" disabled></option>
//           <option value="z-a">Alphabetically,Z-A</option>
//           <option value="" disabled></option>
//           <option value="highest">Price,low to high</option>
//           <option value="" disabled></option>
//           <option value="lowest">Price,high to low</option>
//           <option value="" disabled></option>
//         </select>
//       </form>
//     </div>
//   )
// }
// export default Sort


// import React from 'react';

// function Sort({ setViewAll, viewAll }) {
//   const handleSortChange = (event) => {
//     const sortBy = event.target.value;

//     let sortedProducts;
//     if (sortBy === "a-z") {
//       sortedProducts = [...viewAll].sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sortBy === "z-a") {
//       sortedProducts = [...viewAll].sort((a, b) => b.name.localeCompare(a.name));
//     } else if (sortBy === "highest") {
//       sortedProducts = [...viewAll].sort((a, b) => a.offrprice - b.offrprice);
//     } else if (sortBy === "lowest") {
//       sortedProducts = [...viewAll].sort((a, b) => b.offrprice - a.offrprice);
//     }
//     setViewAll(sortedProducts);
//   };
//   console.log(viewAll);
//   return (
//     <div className='pt-5'>
//       <form action="#">
//         <label htmlFor="sort"></label>
//         <select name="sort" id="sort" className='relative flex text-lg font-bold border-black px-4 py-2 rounded-md bg-[#eff4f7]' onChange={handleSortChange}>
//           <option value="a-z">Alphabetically, A-Z</option>
//           <option value="" disabled></option>
//           <option value="z-a">Alphabetically, Z-A</option>
//           <option value="" disabled></option>
//           <option value="highest">Price, low to high</option>
//           <option value="" disabled></option>
//           <option value="lowest">Price, high to low</option>
//           <option value="" disabled></option>
//         </select>
//       </form>
//     </div>
//   );
// }

// export default Sort;

import React, { useState } from 'react';

const Sort = ({ items }) => {
  const [sortBy, setSortBy] = useState('best-selling');

  let sortedItems = items;
  switch(sortBy) {
    case 'a-z':
      sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'z-a':
      sortedItems = items.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'price-low-to-high':
      sortedItems = items.sort((a, b) => a.price - b.price);
      break;
    case 'price-high-to-low':
      sortedItems = items.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return (
    <div>
      <select onChange={event => setSortBy(event.target.value)}>
        <option value="best-selling">Best Selling</option>
        <option value="a-z">Alphabetically, A-Z</option>
        <option value="z-a">Alphabetically, Z-A</option>
        <option value="price-low-to-high">Price, low to high</option>
        <option value="price-high-to-low">Price, high to low</option>
      </select>
      <ul>
        {sortedItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;