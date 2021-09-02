import { CATEGORY_CREATE_FAILURE, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_RESET, CATEGORY_CREATE_SUCCESS, CATEGORY_DELETE_FAILURE, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_RESET, CATEGORY_DELETE_SUCCESS, CATEGORY_DETAILS_FAILURE, CATEGORY_DETAILS_REQUEST, CATEGORY_DETAILS_RESET, CATEGORY_DETAILS_SUCCESS, CATEGORY_LIST_FAILURE, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_UPDATE_FAILURE, CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_RESET, CATEGORY_UPDATE_SUCCESS } from "../constants/categoryConstants";

const categoryListInitState = {
    categories: [],
    loading: false,
    error: null
}

const categoryDetailsInitState = {
    category: {},
    productId: null,
    loading: false,
    error: null
}

const categoryCreateInitState = {
    category : {},
    success: false,
    loading: false,
    error: null
}

const categoryUpdateInitState = {
    category : {},
    success: false,
    loading: false,
    error: null
}

const categoryDeleteInitState = {
    success: false,
    loading: false,
    error: null
}

export const categoryListReducer = (state = categoryListInitState, action) => {
    switch(action.type) {
        case CATEGORY_LIST_REQUEST: 
            return {...state, loading : true};
        case CATEGORY_LIST_SUCCESS:
            return {...state, loading: false, categories: action.payload };
        case CATEGORY_LIST_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export const categoryDetailsReducer = (state = categoryDetailsInitState, action) => {
    switch(action.type) {
        case CATEGORY_DETAILS_REQUEST:
            return { ...state, loading: true, categoryId: action.payload };
        case CATEGORY_DETAILS_SUCCESS:
            return { ...state, loading: false, category: action.payload };
        case CATEGORY_DETAILS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CATEGORY_DETAILS_RESET:
            return {};
        default: 
            return state;
    }
};

export const categoryCreateReducer = (state = categoryCreateInitState, action) => {
    switch(action.type) {
        case CATEGORY_CREATE_REQUEST:
            return { ...state, loading: true };
        case CATEGORY_CREATE_SUCCESS:
            return { ...state, loading: false, success: true, category: action.payload };
        case CATEGORY_CREATE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CATEGORY_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const categoryUpdateReducer = (state =  categoryUpdateInitState, action) => {
    switch(action.type) {
        case CATEGORY_UPDATE_REQUEST:
            return { ...state, loading: true };
        case CATEGORY_UPDATE_SUCCESS:
            return { ...state, loading: false, success: true, category: action.payload };
        case CATEGORY_UPDATE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CATEGORY_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const categoryDeleteReducer = (state = categoryDeleteInitState, action) => {
    switch(action.type) {
        case CATEGORY_DELETE_REQUEST:
            return { ...state, loadng: true };
        case CATEGORY_DELETE_SUCCESS:
            return { ...state, loading: false, success: true };
        case CATEGORY_DELETE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CATEGORY_DELETE_RESET:
            return  {};
        default: 
            return state;
    }
};
