import { USER_DETAILS_FAILURE, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS, USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_UPDATE_PROFILE_FAILURE, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_RESET, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants"

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
}