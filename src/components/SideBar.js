import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { Link } from 'react-router-dom';
import { listProductCategories } from '../actions/product';

const SideBar = ({ sidebarIsOpen, setSidebarIsOpen }) => {

    const productCategoryList = useSelector(state => state.productCategoryList);
    const {loading: loadingCategories , error: errorCategories, categories } = productCategoryList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductCategories());
    }, [dispatch]);

    return (
        <aside className={sidebarIsOpen? 'open' : ''}>
            <ul className="categories">
                <li>
                    <strong>Categories</strong>
                    <button onClick={() => setSidebarIsOpen(false)} className="close-sidebar" type="button"> 
                        <i className="fa fa-close"></i>
                    </button>
                </li>
                {
                    loadingCategories? <LoadingBox /> : 
                    errorCategories? <MessageBox variant="danger">{errorCategories}</MessageBox> :
                    ( categories.map((c) => (
                        <li key={c}>
                            <Link to={`/search/category/${c}`} onClick={() => setSidebarIsOpen(false)}>{c}</Link>
                        </li>
                    )))
                }
            </ul>
        </aside>
    )
}

export default SideBar
