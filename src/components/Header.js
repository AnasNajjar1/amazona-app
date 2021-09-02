import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { signout } from '../actions/user';
import SearchBox from './SearchBox';

const Header = ({ setSidebarIsOpen }) => {

    const cart = useSelector(state => state.cart);
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const { cartItems } = cart;

    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout());
      }

    return (
        <header className="row">
          <div>
            <button type="button" className="open-sidebar" onClick={() => setSidebarIsOpen(true)}>
              <i className="fa fa-bars"></i>
            </button>
            <Link className="brand" to="/">amazona</Link>
          </div>
          <div>
            <Route render={({ history }) => <SearchBox history={history}></SearchBox>}></Route>
          </div>
          <div>
            {((userInfo && !userInfo.isSeller) || !userInfo) && <Link to="/cart">Cart
              {
                cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )
              }
            </Link>}
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/profile">User Profile</Link>
                    </li>
                    {userInfo && !userInfo.isSeller && (
                      <li>
                        <Link to="/orderhistory">Order History</Link>
                      </li>
                      )
                    }
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )
            }

            {
              userInfo && userInfo.isSeller &&
              (
                <div className="dropdown">
                  <Link to="#seller">Seller {' '} <i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/productlist/seller">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist/seller">Orders</Link>
                    </li>
                  </ul>
                </div>
              )
            }

            {
              userInfo && userInfo.isAdmin &&
              (
                <div className="dropdown">
                  <Link to="#admin">Admin {' '} <i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/categorylist">Categories</Link>
                    </li>
                    <li>
                      <Link to="/productlist">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist">Orders</Link>
                    </li>
                    <li>
                      <Link to="/userlist">Users</Link>
                    </li>
                  </ul>
                </div>
              )
            }

          </div>
        </header>
    )
}

export default Header
