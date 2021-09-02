import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { Link } from 'react-router-dom';
import { listProductCategories } from '../actions/product';

const SideBar = ({ sidebarIsOpen, setSidebarIsOpen }) => {

    const categoryList = useSelector(state => state.categoryList);
    const { loading: loadingCategories, error: errorCategories, categories } = categoryList;

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
                        <li key={c._id}>
                            <Link to={`/search/category/${c._id}`} onClick={() => setSidebarIsOpen(false)}>{c.name}</Link>
                        </li>
                    )))
                }
            </ul>
        </aside>
    )
}

export default SideBar
