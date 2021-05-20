import { applyMiddleware, combineReducers, compose,  createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cart';
import { OrderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/order';
import { productDetailsReducer, productListReducer } from './reducers/product';
import { userRegisterReducer, userSigninReducer } from './reducers/user';


const initState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: OrderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initState, composeEnhancer(applyMiddleware(thunk)));

export default store;