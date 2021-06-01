import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/user';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_REGISTER_RESET } from '../constants/userConstants';

const RegisterScreen = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confimedPassword, setConfirmedPassword] = useState('');

    const redirect = props.location.search? props.location.search.split('=')[1] : '/';

    const userRegister = useSelector(state => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(password !== confimedPassword) {
            alert('password and confirmed password are not identical');
        } else {
            dispatch(register(name, email, password));
        }
    }

    console.log(userInfo);

    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [userInfo, redirect]);

    return (
        <div>
            <form className="form" onSubmit={onSubmitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                {loading && <LoadingBox />}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter name" required onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter email" required onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm password" required onChange={e => setConfirmedPassword(e.target.value)} />
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account? <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen
