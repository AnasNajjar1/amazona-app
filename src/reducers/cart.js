import { CART_ADD_ITEM, CART_ADD_ITEM_FAILURE, CART_EMPTY, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

const initState = {
    cartItems: localStorage.getItem('cartItems')?
               JSON.parse(localStorage.getItem('cartItems'))
               : [],
    shippingAddress: localStorage.getItem('shippingAddress')?
                     JSON.parse(localStorage.getItem('shippingAddress'))
                     : {},
    paymentMethod: 'PayPal',
    error: null
}

export const cartReducer  = (state = initState, action) => {
    switch(action.type) {
        case CART_ADD_ITEM: 
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            if(existItem) {
                return {
                    ...state, 
                    error: null,
                    cartItems: state.cartItems.map((x) => x.product === existItem.product? item : x)
                }
            } else {
                return {
                    ...state,
                    error: null,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_ADD_ITEM_FAILURE:
            return {...state, error: action.payload}
        case CART_REMOVE_ITEM:
            return {...state, error: null, cartItems: state.cartItems.filter(x => x.product !== action.payload)};
        case CART_SAVE_SHIPPING_ADDRESS:
            return {...state,  shippingAddress: action.payload};
        case CART_SAVE_PAYMENT_METHOD:
            return {...state, paymentMethod: action.payload};
        case CART_EMPTY:
            return {...state, error: null, cartItems: []};
        default: 
            return state;
    }
}