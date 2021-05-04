import { PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

const productListInitState = {
    products: [],
    loading: false,
    error: null
}

const productDetailsInitState = {
    product: {},
    productId: null,
    loading: false,
    error: null
}
export const productListReducer = (state = productListInitState, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST: 
            return {...state, loading : true};
        case PRODUCT_LIST_SUCCESS:
            return {...state, loading: false, products: action.payload};
        case PRODUCT_LIST_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

export const productDetailsReducer = (state = productDetailsInitState, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true, productId: action.payload };
        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default: 
            return state;
    }
}