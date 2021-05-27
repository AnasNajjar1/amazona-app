import { ORDER_CREATE_FAILURE, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_DELETE_FAILURE, ORDER_DELETE_REQUEST, ORDER_DELETE_RESET, ORDER_DELETE_SUCCESS, ORDER_DELIVER_FAILURE, ORDER_DELIVER_REQUEST, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAILURE, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_MINE_LIST_FAILURE, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCESS, ORDER_PAY_FAILURE, ORDER_PAY_REQUEST, ORDER_PAY_RESET, ORDER_PAY_SUCCESS } from "../constants/orderConstants"

const orderCreateInitState = {
    loading: false,
    success: false,
    order: {},
    error: null
}

const orderDetailsInitState = {
    loading: false,
    order: {},
    error: null
}

const orderPayInitState = {
    loading: false,
    order: {},
    success: false,
    error: null
}

const orderListInitState = {
    loading: false,
    orders: [],
    error: null
}

const orderDeleteInitState = {
    loading: false,
    order: {},
    success: false,
    error: null
}


export const OrderCreateReducer = (state = orderCreateInitState, action) => {
    switch(action.type) {
        case ORDER_CREATE_REQUEST:
            return { ...state, loading: true };
        case ORDER_CREATE_SUCCESS:
            return { ...state, loading: false, success: true, order: action.payload };
        case ORDER_CREATE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return {};
        
        default:
            return state;
    }

};

export const orderDetailsReducer = (state = orderDetailsInitState, action) => {
    switch(action.type) {
        case ORDER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ORDER_DETAILS_SUCCESS: 
            return { ...state, loading: false, order: action.payload };
        case ORDER_DETAILS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default: 
            return state;
    }
};

export const orderPayReducer = (state = orderPayInitState, action) => {
    switch(action.type) {
        case ORDER_PAY_REQUEST:
            return { ...state, loading: true };
        case ORDER_PAY_SUCCESS:
            return { ...state, loading: false, success: true, order: action.payload };
        case ORDER_PAY_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ORDER_PAY_RESET:
            return {};
        default:
            return state;
    }
};

export const orderMineListReducer = (state = orderListInitState, action) => {
    switch(action.type) {
        case ORDER_MINE_LIST_REQUEST:
            return { ...state, loading: true };
        case ORDER_MINE_LIST_SUCCESS:
            return { ...state, loading: false, orders: action.payload };
        case ORDER_MINE_LIST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const orderListReducer = (state = orderListInitState, action) => {
    switch(action.type) {
        case ORDER_LIST_REQUEST:
            return { ...state, loading: true };
        case ORDER_LIST_SUCCESS:
            return { ...state, loading: false, orders: action.payload };
        case ORDER_LIST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const orderDeleteReducer = (state = orderDeleteInitState, action) => {
    switch(action.type) {
        case ORDER_DELETE_REQUEST:
            return { ...state, loading: true };
        case ORDER_DELETE_SUCCESS:
            return { ...state, loading: false, success: true, order: action.payload };
        case ORDER_DELETE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ORDER_DELETE_RESET:
            return {};
        default:
            return state;
    }
};

export const orderDeliverReducer = (state = orderPayInitState, action) => {
    switch(action.type) {
        case ORDER_DELIVER_REQUEST:
            return { ...state, loading: true };
        case ORDER_DELETE_SUCCESS:
            return { ...state, loading: false, success: true, order: action.payload };
        case ORDER_DELIVER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ORDER_DELETE_RESET:
            return {};
        default:
            return state;
    }
};

