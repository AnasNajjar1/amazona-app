import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProducts } from '../actions/product';

const HomeScreen = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts({}));
    }, [dispatch]);
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
    console.log(products);
    return (
        <div>
            {
                loading?
                 <LoadingBox /> :
                error? 
                 <MessageBox variant="danger">{error}</MessageBox> :
                 <div className="row center">
                    {
                        products.map(product => (
                            <Product key={product._id} product={product}></Product>
                        ))
                    }

                </div>
            }
        </div>
    );
}

export default HomeScreen
