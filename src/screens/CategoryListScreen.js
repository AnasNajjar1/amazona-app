import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createCategory, deleteCategory, listCategories } from '../actions/category';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { CATEGORY_CREATE_RESET, CATEGORY_DELETE_RESET } from '../constants/categoryConstants';

const CategoryListScreen = (props) => {

    const { pageNumber = 1 } = useParams();

    const categoryList = useSelector(state => state.categoryList);
    const { loading, error, categories, page, pages } = categoryList;

    const categoryCreate = useSelector(state => state.categoryCreate);
    const { loading: loadingCreate, error: errorCreate, success: successCreate, category: createdCategory } = categoryCreate;

    const categoryDelete = useSelector(state => state.categoryDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = categoryDelete;

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const userId = userInfo._id? userInfo._id : userInfo.id;

    const dispatch = useDispatch();

    useEffect(() => {
        if(successCreate && createdCategory._id) {
            dispatch({ type: CATEGORY_CREATE_RESET });
            props.history.push(`/category/${createdCategory._id}/edit`);
        }
        if(successDelete) {
            dispatch({ type: CATEGORY_DELETE_RESET });
        }
        dispatch(listCategories({ pageNumber }));
    }, [dispatch, createdCategory, successCreate, successDelete, pageNumber]);

    const deleteHandler = (category) => {
        if(window.confirm('Are you sure to delete?')) {
            dispatch(deleteCategory(category._id));
        }  
    }

    const createHandler = () => {
        dispatch(createCategory());
    }
    
    return (
        <div>
            <div className="row">
                <h1>Categories</h1>
                <button type="button" className="primary" onClick={createHandler}>Create Category</button>
            </div>

            { loadingDelete && <LoadingBox /> }
            { errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox> }

            { loadingCreate && <LoadingBox /> }
            { errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox> }
            
            { 
                loading? <LoadingBox /> : 
                error? <MessageBox variant="danger">{error}</MessageBox> :
                (
                    <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category) => (
                                    <tr key={category._id}>
                                        <td>{category._id}</td>
                                        <td>{category.name}</td>
                                        <td>
                                            <button type="button" className="small" onClick={() => props.history.push(`/category/${category._id}/edit`)}>Edit</button>
                                            <button type="button" className="small" onClick={() => deleteHandler(category)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )
            }
        </div>
    )
}

export default CategoryListScreen
