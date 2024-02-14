export const initialState = {
    total:0,
    products:[],
    // filters: {
    //     color: '',
    //     priceRange: { min: 0, max: 100 }, // Example price range filter
    //     bestFor: '',
    //     noiseCancellation: '',
    //     features: '',
    //     availability: ''
    //   }
}
const storeReducer = (state,action) => {
    switch (action.type) {
       case "add":
            return{
                ...state,
                products:action.payload
            };
        case "remove":
            return {
                ...state,
                products:action.payload
            };
        case "update price":
            return {
                ...state,
                total:action.payload
            };

        case "set_Decrement":
        case "set_Increment":
            return {
                ...state,
                products: action.payload,
            };

        case "increment":
        case "decrement":
            return {
                ...state,
                products: action.payload,
                total: action.total,
            };

        // case 'SET_FILTER':
        //     return {
        //       ...state,
        //       filters: {
        //         ...state.filters,
        //         [action.payload.filterName]: action.payload.value
        //       }
        //     };

        case "clearCart":
            return initialState;
        
        default:
            throw Error("Cannot match case in reducer")
    }
}
export default storeReducer;