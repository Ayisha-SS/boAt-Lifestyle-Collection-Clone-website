export const initialState = {
    total:0,
    products:[],
    sorting_value:"lowest"
}
const storeReducer = (state,action) =>{
    switch (action.type) {
       case "add":
            return{
                ...state,
                products:action.payload
            } 
        case "remove":
            return{
                ...state,
                products:action.payload
            }
        case "update price":
            return{
                ...state,
                total:action.payload
            }
        
    //increment
        case "set_Increment":
            if(action.payload)
            return{
            ...state,
            products:action.payload
            }
            
    //sort 
        case "GET_SORT_VALUE": 
        let userSortValue = document.getElementById("sort");
        let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        // console.log(sort_value);    
            return{
                    ...state,
                    sorting_value:sort_value,
            };
        case "SORTING_PRODUCTS":
            return

        default:throw Error("Cannot match case in reducer")
    }
}
export default storeReducer;