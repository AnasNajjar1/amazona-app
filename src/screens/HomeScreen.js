import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProducts } from '../actions/product';
import { listTopSellers } from '../actions/user';
import { Link, useParams } from 'react-router-dom';

const HomeScreen = (props) => {

    const { name = 'all', category = 'all', min = 0, max = 0, rating = 0, order = 'newest', pageNumber = 1 } = useParams();

    const getFilterUrl = (filter) => {
        const filterPage  = filter.page || pageNumber;
        const filterCategory  = filter.category || category;
        const filterName = filter.name || name;
        const filterRating = filter.rating || rating;
        const sortOrder = filter.order || order;
        const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
        const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
        return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts({}));
        dispatch(listTopSellers());
    }, [dispatch]);
    const productList = useSelector(state => state.productList);
    const { loading, error, products, page, pages } = productList;

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
                                                <img src={seller.seller.logo} alt={seller.name} />
                                                <p className="legend">{seller.name}</p>
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
                                    <div className="row center pagination">
                                        {
                                            [...Array(pages).keys()].map(x => (
                                                <Link className={x+1 === page? 'active' : ''} key={x+1} to={getFilterUrl({ page: x+1 })}>{x+1}</Link>
                                            ))
                                        }
                                    </div>
                                    
                        </>
                        
                    }
                </div>
    );
}

export default HomeScreen
