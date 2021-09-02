import axios from "axios";
import { CATEGORY_CREATE_FAILURE, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS, CATEGORY_DELETE_FAILURE, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_DETAILS_FAILURE, CATEGORY_DETAILS_REQUEST, CATEGORY_DETAILS_SUCCESS, CATEGORY_LIST_FAILURE, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_UPDATE_FAILURE, CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_SUCCESS } from "../constants/categoryConstants";
import { API } from "../urlConfig";

export const listCategories = () => async (dispatch) => {
    dispatch({
        type: CATEGORY_LIST_REQUEST
    });
    try {
        const { data } = await axios.get(`${API}/api/categories`);
        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAILURE,
            payload: error.message
        });
    }
};

export const detailsCategory = (categoryId) => async (dispatch) => {
    dispatch({ type: CATEGORY_DETAILS_REQUEST, payload: categoryId });
    try {
        const { data } = await axios.get(`${API}/api/categories/${categoryId}`);
        dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ 
            type: CATEGORY_DETAILS_FAILURE,
            payload: error.response && error.response.data.message ?
                     error.response.data.message : error.message
        });
    }
};

export const createCategory = () => async (dispatch, getState) =>  {
    dispatch({ type: CATEGORY_CREATE_REQUEST });
    const { userSignin: { userInfo } } = getState();

    try {
        const { data } = await axios.post(`${API}/api/categories`, {}, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: data.category });
    } catch (error) {
        const message = error.response && error.response.data.message ?
                        error.response.data.message : error.message;
        dispatch({ type: CATEGORY_CREATE_FAILURE, payload: message });
    }
};

export const updateCategory = (category) => async (dispatch, getState) => {
    dispatch({ type: CATEGORY_UPDATE_REQUEST, payload: category });
    const { userSignin: { userInfo } } = getState();

    try {
        const { data }  = await axios.put(`${API}/api/categories/${category._id}`, category, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ?
                        error.response.data.message : error.message;
        dispatch({ type: CATEGORY_UPDATE_FAILURE, payload: message });
    }
};

export const deleteCategory = (categoryId) => async (dispatch, getState) => {
    dispatch({ type: CATEGORY_DELETE_REQUEST, payload: categoryId });
    const { userSignin: { userInfo } } = getState();

    try {
        const { data } = await axios.delete(`${API}/api/categories/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({ type: CATEGORY_DELETE_SUCCESS });
    } catch (error) {
        const message = error.response && error.response.data.message ?
                        error.response.data.message : error.message;
        dispatch({ type: CATEGORY_DELETE_FAILURE, payload: message });
    }
};