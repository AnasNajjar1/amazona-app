import { USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

const initState = {
    loading: false,
    userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) : null
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
        default: 
            return state;
    }
};