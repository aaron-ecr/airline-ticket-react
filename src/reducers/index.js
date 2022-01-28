const initialState = {
  cart: []
  
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FLIGHTS', 'GET_FILTERS', 'GET_ROUTES':
      return { ...state, loading: true };
    case 'GET_FLIGHTS_SUCCESS':
      return { ...state, flights: action.json, loading: false };
    case 'GET_FILTERS_SUCCESS':
      return { ...state, filters: action.json, loading: false }; 
    case 'GET_ROUTES_SUCCESS':
      return { ...state, routes: action.json, loading: false };   
    case 'ADD' :
        return { ...state, cart:[...state.cart, action.item]};    
    case 'REMOVE' :
          return {...state, cart:[...state.cart.filter( i => i.Id !== action.item.Id)]};  
    case 'REMOVE_ALL' :
      return {...state, cart:[]};   
          
    default:
      return state;
   }
};
export default reducer;