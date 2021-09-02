import { applyMiddleware, combineReducers, compose,  createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cart';
import { categoryCreateReducer, categoryDeleteReducer, categoryDetailsReducer, categoryListReducer, categoryUpdateReducer } from './reducers/category';
import { OrderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer } from './reducers/order';
import { productCategoryListReducer, productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productReviewCreateReducer, productUpdateReducer } from './reducers/product';
import { userDeleteReducer, userDetailsReducer, userListReducer, userRegisterReducer, userSigninReducer, userTopSellersListReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/user';


const initState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productCategoryList: productCategoryListReducer,
    productDetails: productDetailsReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    productReviewCreate: productReviewCreateReducer,

    categoryList: categoryListReducer,
    categoryDetails: categoryDetailsReducer,
    categoryCreate: categoryCreateReducer,
    categoryUpdate: categoryUpdateReducer,
    categoryDelete: categoryDeleteReducer,
    
    cart: cartReducer,

    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userTopSellersList: userTopSellersListReducer,

    orderCreate: OrderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initState, composeEnhancer(applyMiddleware(thunk)));

export default store;