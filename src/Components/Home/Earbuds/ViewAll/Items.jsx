import React, { useState, useContext } from "react";
import ViewAll from "./ViewItem.json";
import { Cart } from "../../../Context/Context";

function Items({ searchTerm }) {

  const [viewAll, setViewAll] = useState(ViewAll);

  const { addToCart } = useContext(Cart);
  const handleAdd = (item) => {
    addToCart(item)
  };

  // Filter items based on search term
  const filteredItems = viewAll.filter((item) =>
    searchTerm ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true
  );

    return (
      <>
        <div className="pt-6 flex flex-wrap gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className=" relative border w-[32%] rounded-xl bg-[#fafafa] flex p-1"
            >
              <div className="w-[40%] mb-2 relative">
                <img
                  src={item.image}
                  alt="Airpode-131"
                  className="w-[100%] rounded-lg"
                />
              </div>
              <div>
                <span className="absolute left-1 text-[10px] top-5 bg-black text-white tracking-wide font-bold z-[1] rounded-r-lg p-1">
                  {item.status}
                </span>
                <span className="absolute bottom-3 left-1 bg-yellow-500 font-bold px-[37px] pt-2 pb-1 rounded-b-lg text-xs">
                  {item.hours}
                </span>
              </div>
              <div className="pl-2.5 pr-1.5 py-1">
                <div className="flex gap-16">
                  <div className="flex">
                    <div className="w-4">
                      <img src="src\assets\images\Rating.jpeg" alt="Rating" />
                    </div>
                    <p className="ml-1 text-xs">{item.rating}</p>
                    <b className="mx-1 text-xs">|</b>
                    <p className="mr-1 text-xs">{item.verify}</p>
                    <div className="w-3">
                      <img
                        src="src\assets\images\Tick-mark.png"
                        alt="Verification"
                      />
                    </div>
                  </div>
                  <div className="flex bg-slate-200 rounded-md px-1">
                    <div className="w-3">
                      <img src="src\assets\images\flipkart.png" alt="flipkart" />
                    </div>
                    <p className="text-[10px]">{item.seller}</p>
                  </div>
                </div>
                <h4 className="font-bold text-base mt-1">{item.name}</h4>
                <div className="flex gap-1 pt-1 pb-2">
                  <p className="font-bold text-sm">&#8377;{item.price}</p>
                  <p className="font-medium text-xs text-slate-400 line-through">
                    &#8377;{item.orgnlprce}
                  </p>
                  <p className="font-medium text-xs">{item.offer}</p>
                </div>
                <hr />
                <div>
                  <div className="text-[10px] flex gap-3 pt-3">
                    <p className="bg-slate-200 rounded-md px-1">{item.featr1}</p>
                    <p className="bg-slate-200 rounded-md px-1">{item.featr2}</p>
                  </div>
                  <div className="pt-16">
                    <button key={item.id}
                      className="bg-black text-white py-3  w-[100%] rounded-xl tracking-[-0.4px] text-sm"
                      onClick={() => {
                        handleAdd(item)
                      }}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  
}

export default Items;

