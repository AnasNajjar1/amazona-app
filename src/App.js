import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { signout } from './actions/user';
import AdminRoute from './components/AdminRoute';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import SellerRoute from './components/SellerRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderListScreen from './screens/OrderListScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SearchScreen from './screens/SearchScreen';
import SellerScreen from './screens/SellerScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';

function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <main>
          <Route path="/seller/:id" component={SellerScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/product/:id/edit" component={ProductEditScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/shipping" component={ShippingAddressScreen} />
          <Route path="/payment" component={PaymentMethodScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/orderhistory" component={OrderHistoryScreen} />
          <Route path="/search/name/:name?" component={SearchScreen} exact />
          <Route path="/" component={HomeScreen} exact />
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <AdminRoute path="/user/:id/edit" component={UserEditScreen}></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute path="/productlist" component={ProductListScreen} exact></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderListScreen} exact></AdminRoute>
          <SellerRoute path="/productlist/seller" component={ProductListScreen}></SellerRoute>
          <SellerRoute path="/orderlist/seller" component={OrderListScreen}></SellerRoute>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
