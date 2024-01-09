import React, { useReducer,createContext, useEffect,useState  } from 'react'
import reducer, { initialState } from './Reducers';
import storeReducer from './Reducers';


export const Cart = createContext();

export const Context = ({children}) => {
  const [state,dispatch] = useReducer(storeReducer,initialState);

  //add item...
  const addToCart = (item) =>{
    const updateCart = [...state.products,item];
    updatePrice(updateCart)

    dispatch({
        type:"add",
        payload:updateCart
    })
  }

  //remove item...
  const removeFromCart = (item) =>{
    const updateCart = state.products.filter((currentProduct) => currentProduct.type !== item.type);
    updatePrice(updateCart)

    dispatch({
        type:"remove",
        payload:updateCart
    })
  }

  //update price...
  const updatePrice = (products) =>{
    let total = 0;
    products.forEach(item => {
    	total += item.price
    });

    dispatch({
        type:"update price",
        payload:total
    })
  }

//decrement item...
	const setDecrease = (type) =>{
		const updatedProduct = state.products.map((currentProduct) =>currentProduct.type === action.payload)
		const decAmount = currentProduct.amount - 1;
		dispatch({
			type:"set_Decrement",
			payload:type
		})
  	}

//increment item...
	const setIncrease = (type) =>{
		dispatch({
			type:"set_Increment",
			payload:type
		})
	}

//logout...
  const [userData,setUserData] = useState({});
  const updateUserData = (action) => {
    switch (action.type){
      case "LOGOUT":
        setUserData(null);
        localStorage.clear();
        break;
      case "LOGIN":
        setUserData(action.payload);
      default:
        break;
    }
  };
	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("user_data")));
	}, []);

  const value = {
    total:state.total,
    products:state.products,
    addToCart,
    removeFromCart,
	  setDecrease,
	  setIncrease,
    userData,
    updateUserData,
   
    
  }

  return <Cart.Provider value={value}>
    {children}
  </Cart.Provider>
    
}

