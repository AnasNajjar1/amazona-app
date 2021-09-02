import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsCategory, updateCategory } from '../actions/category';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { CATEGORY_UPDATE_RESET } from '../constants/categoryConstants';
import { storage } from '../firebase';

const CategoryEditScreen = (props) => {

    const categoryId = props.match.params.id;

    const [name, setName] = useState('');
    const [fileImage, setFileImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');

    const categoryDetails = useSelector(state => state.categoryDetails);
    const { loading, error, category } = categoryDetails;

    console.log(category._id);

    const categoryUpdate = useSelector(state => state.categoryUpdate);
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = categoryUpdate;

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();

    useEffect(() => {
        if(successUpdate) {
            dispatch({ type: CATEGORY_UPDATE_RESET });
            props.history.push('/categorylist');
        }
        if(!category || (category._id !== categoryId) || successUpdate) {
            dispatch({ type: CATEGORY_UPDATE_RESET });
            dispatch(detailsCategory(categoryId));
        } else {
            setName(category.name);
            setImage(category.image);
        }
    }, [category, dispatch, categoryId, successUpdate]);

    console.log(category);

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(updateCategory({
            _id: categoryId,
            name,
            image,
        }));
        
    };

    const uploadHandler = async (e) => {
        e.preventDefault();

        const uploadTask = storage.ref(`images/${String(fileImage.lastModified)}`).put(fileImage);
        uploadTask.on("state_changed", snapshot => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
        }, error => { console.log("error image : ", error) }, () => {
            storage.ref("images").child(String(fileImage.lastModified)).getDownloadURL().then(
                url => {
                    console.log('url ', String(url));
                    setImage(String(url));
                }
            )
            .catch(console.log(error));
        });
    }

    



    const uploadFileHandler = async (e) => {


        if(e.target.files[0]) {
            setFileImage(e.target.files[0]);
        }

        // const file = e.target.files[0];
        // const bodyFormData = new FormData();
        // bodyFormData.append('image', file);
        // setLoadingUpload(true);

        // try {
        //     const { data } = await axios.post(`${API}/api/uploads`, bodyFormData, {
        //         headers: { 
        //             'Content-Type' :  'multipart/form-data',
        //             Authorization: `Bearer ${userInfo.token}`
        //         }
        //     });
        //     setImage(data);
        //     setLoadingUpload(false);
        // } catch (error) {
        //     setErrorUpload(error.message);
        //     setLoadingUpload(false);
        // }
        
    };

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Edit Category {categoryId}</h1>
                </div>
                {loadingUpdate && <LoadingBox />}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                {
                    loading? <LoadingBox /> :
                    error? <MessageBox variant="danger">{error}</MessageBox> :
                    <>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="image">Image</label>
                            <img src={category.image} alt="image" />
                        </div>
                        <div>
                            <label htmlFor="imageFile">Image File</label>
                            <input type="file" id="imageFile" label="Choose Image" onChange={uploadFileHandler} />
                            <button className="buttonIn" onClick={uploadHandler}>Upload</button>
                            <progress value={progress} max="100" />
                            { loadingUpload && <LoadingBox /> }
                            { errorUpload && <MessageBox variant="danger">{errorUpload}</MessageBox> }
                        </div>
                        <div>
                            <label/>
                            <button className="primary" type="submit">Update</button>
                        </div>
                    </>
                }
            </form>
        </div>
    )
}

export default CategoryEditScreen
