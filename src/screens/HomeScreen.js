import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProducts } from '../actions/product';
import { listTopSellers } from '../actions/user';
import { Link } from 'react-router-dom';

const HomeScreen = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts({}));
        dispatch(listTopSellers());
    }, [dispatch]);
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    const userTopSellersList = useSelector(state => state.userTopSellersList);
    const { loading: loadingSellers, error: errorSellers, users: sellers } = userTopSellersList;

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const userId = userInfo && userInfo._id? userInfo._id : userInfo && userInfo.id? userInfo.id : '';

    console.log(products);

    if(userInfo && userInfo.isSeller && !userInfo.isAdmin) {
        return (
            <>
                { props.history.push(`/seller/${userId}`) }
            </>
        )
    }

    return (
                <div>
                    <h2>Top Sellers</h2>
                    {
                        loadingSellers?
                        <LoadingBox /> :
                        errorSellers? 
                        <MessageBox variant="danger">{errorSellers}</MessageBox> :
                        
                            <>
                                {
                                    sellers.length == 0 && <MessageBox variant="danger">No Seller Found</MessageBox>
                                }
                                <Carousel showArrows autoPlay showThumbs={false}>
                                    { sellers.map((seller) => (
                                        <div key={seller._id}>
                                            <Link to={`/seller/${seller._id}`}>
                                                <img src={seller.seller.logo} alt={seller.seller.name} />
                                                <p className="legend">{seller.seller.name}</p>
                                            </Link>
                                        </div>
                                    )) }
                                </Carousel>
                            </>
                        
                    }
                    <h2>Featured Products</h2>
                    {
                        loading?
                        <LoadingBox /> :
                        error? 
                        <MessageBox variant="danger">{error}</MessageBox> :
                        <>
                                {products.length == 0 && <MessageBox variant="danger">No Product Found</MessageBox>}
                                    <div className="row center">
                                        {
                                            products.map(product => (
                                                <Product key={product._id} product={product}></Product>
                                            ))
                                        }

                                    </div>
                                    
                        </>
                        
                    }
                </div>
    );
}

export default HomeScreen
