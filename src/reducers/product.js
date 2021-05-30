import { PRODUCT_CREATE_FAILURE, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_RESET, PRODUCT_CREATE_SUCCESS, PRODUCT_DELETE_FAILURE, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_RESET, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_UPDATE_FAILURE, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_RESET, PRODUCT_UPDATE_SUCCESS } from "../constants/productConstants";

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

const productCreateInitState = {
    product : {},
    success: false,
    loading: false,
    error: null
}

const productUpdateInitState = {
    product : {},
    success: false,
    loading: false,
    error: null
}

const productDeleteInitState = {
    success: false,
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
};

export const productCreateReducer = (state = productCreateInitState, action) => {
    switch(action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_CREATE_SUCCESS:
            return { ...state, loading: false, success: true, product: action.payload };
        case PRODUCT_CREATE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const productUpdateReducer = (state =  productUpdateInitState, action) => {
    switch(action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_UPDATE_SUCCESS:
            return { ...state, loading: false, success: true, product: action.payload };
        case PRODUCT_UPDATE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const productDeleteReducer = (state = productDeleteInitState, action) => {
    switch(action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { ...state, loadng: true };
        case PRODUCT_DELETE_SUCCESS:
            return { ...state, loading: false, success: true };
        case PRODUCT_DELETE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_DELETE_RESET:
            return  {};
        default: 
            return state;
    }
}