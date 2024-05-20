import React, { useState } from 'react';
import '../css/SignIn.css';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleUserName = (e) => {
        const value = e.target.value;
        setUserName(value);
        value === '' ? setUserNameError('This field should not be empty') : setUserNameError('');
    };

    const validatePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        value === ''? setPasswordError('password should not be empty') : setPasswordError('');
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:6800/customer/login', {
                "username": userName,
                "password": password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            login(response.data.result);
            setLoginSuccess('Login successful!');
            setLoginError('');
            navigate('/');
        } catch (error) {
            if (error.response) {
                setLoginError('incorrect userrname or password');
                console.log(loginError)
            } else {
                setLoginError('An error occurred. Please try again.');
                console.log(loginError);    
            }
            setLoginSuccess('');
        }
    };

    return (
        <div className="background">
            <div className='sign-in-container'>
                <h2>Sign In</h2>

                <input
                    type='text'
                    className={`text-box ${userNameError ? 'error' : ''}`}
                    placeholder='Enter Your Username'
                    onChange={handleUserName}
                />
                {userNameError && <p className="error-text">{userNameError}</p>}

                <input
                    type='password'
                    className={`text-box ${passwordError ? 'error' : ''}`}
                    placeholder='Enter Your Password'
                    onChange={validatePassword}
                />
                {passwordError && <p className="error-text">{passwordError}</p>}


                {loginError && <p className='error-text'>{loginError}</p>}
                <Button variant="contained" className='mt-4' disabled={!!userNameError || !!passwordError} onClick={handleLogin}>
                    Sign In
                </Button>
                <br />
                
            </div>
        </div>
    );
};

export default SignIn;
