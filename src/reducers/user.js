import { USER_DELETE_FAILURE, USER_DELETE_REQUEST, USER_DELETE_RESET, USER_DELETE_SUCCESS, USER_DETAILS_FAILURE, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LIST_FAILURE, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS, USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_UPDATE_FAILURE, USER_UPDATE_PROFILE_FAILURE, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_RESET, USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_RESET, USER_UPDATE_SUCCESS } from "../constants/userConstants"

const initState = {
    loading: false,
    userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) : null,
    error: null
}

const userDetailsInitState = {
    loading: false,
    user: {},
    error: null
}

const userUpdateInitState = {
    loading: false,
    success: false,
    user: {},
    error: null
}

const userListInitState = {
    loading: false,
    users: [],
    error: null
}

const userDeleteInitState = {
    loading: false,
    success: false,
    error: null
}

export const userSigninReducer = (state = initState, action) => {
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return { ...state, loading: true };
        case USER_SIGNIN_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case USER_SIGNIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case USER_SIGNOUT:
            return {};
        default: 
            return state;
    }
};

export const userRegisterReducer = (state = initState, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return { ...state, loading: true };
        case USER_REGISTER_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case USER_REGISTER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case USER_REGISTER_RESET:
            return {};
        default: 
            return state;
    }
};

export const userDetailsReducer = (state = userDetailsInitState, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case USER_DETAILS_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case USER_DETAILS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case USER_DETAILS_RESET:
            return {};
        default:
            return state;
    }
};

export const userUpdateProfileReducer = (state = userUpdateInitState, action) => {
    switch(action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true };
        case USER_UPDATE_PROFILE_SUCCESS:
            return { ...state, loading: false, success: true, user: action.payload };
        case USER_UPDATE_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state;
    }
};

export const userListReducer = (state = userListInitState, action) => {
    switch(action.type) {
        case USER_LIST_REQUEST:
            return { ...state, loading: true };
        case USER_LIST_SUCCESS:
            return { ...state, loading: false, users: action.payload };
        case USER_LIST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default: 
            return state;
    }
};

export const userDeleteReducer = (state = userDeleteInitState, action) => {
    switch(action.type) {
        case USER_DELETE_REQUEST:
            return { ...state, loading: true };
        case USER_DELETE_SUCCESS:
            return { ...state, loading: false, success: true };
        case USER_DELETE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case USER_DELETE_RESET:
            return {};
        default: 
            return state;
    }
};

export const userUpdateReducer = (state = userUpdateInitState, action) => {
    switch(action.type) {
        case USER_UPDATE_REQUEST:
            return { ...state, loading: true };
        case USER_UPDATE_SUCCESS:
            return { ...state, loading: false, success: true, user: action.payload };
        case USER_UPDATE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case USER_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};