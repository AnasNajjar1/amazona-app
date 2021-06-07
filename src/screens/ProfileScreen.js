import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/user';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const ProfileScreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
   

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdateProfile;
    
    useEffect(() => {
        if(JSON.stringify(user) === '{}' || (userInfo.name !== user.name) || (userInfo.email !== user.email)) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, user, userInfo]);
    const submitHandler = (e) => {
        e.preventDefault();

        if(password!==confirmPassword) {
            alert('Password and Confirmed Password are not matched');
        } else {
            dispatch(updateUserProfile({ userId: userInfo.id, name, email, password }));
        }
    };


    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                </div>
                {
                    loading? <LoadingBox /> :
                    error? <MessageBox variant="danger">{error}</MessageBox>
                    : 
                    <>
                        {loadingUpdate && <LoadingBox />}
                        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                        {successUpdate && <MessageBox variant="success">Profile Updated Successfully</MessageBox>}
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="text" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input id="confirmPassword" type="text" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div>
                            <label/>
                            <button className="primary" type="submit">
                                Update
                            </button>
                        </div>
                    </>
                }
            </form>
        </div>
    )
}

export default ProfileScreen
