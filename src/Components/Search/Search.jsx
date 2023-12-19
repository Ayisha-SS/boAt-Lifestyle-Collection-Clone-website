import React, { useState } from 'react'
import { IoIosSearch,IoIosClose } from "react-icons/io";
// import ViewAll from "../Home/Earbuds/item.json"


function Search({searchTerm,setTerm}) {
  return (
    <div>
        {ViewAll.filter((item) =>{
            if(searchTerm == ""){
                return item;
            }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return item;
            }
        })}
    </div>
  )
}

export default Search