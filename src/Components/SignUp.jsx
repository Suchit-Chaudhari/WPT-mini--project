import React, { useState } from 'react';
import '../css/SignUp.css';
import { Button } from '@mui/material';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleFullName = (e) => {
        const value = e.target.value;
        setFullName(value);
        value === '' ? setFullNameError('This field should not be empty') : setFullNameError('');
    };

    const handleUserName = (e) => {
        const value = e.target.value;
        setUserName(value);
        value === '' ? setUserNameError('This field should not be empty') : setUserNameError('');
    };

    const validateEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        !emailRegex.test(value) ? setEmailError('Enter a valid email address') : setEmailError('');
    };

    const validatePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        !passwordRegex.test(value)
            ? setPasswordError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.')
            : setPasswordError('');
    };

    return (
        <div className='background'>
            <div className="sign-up-container">
                <h2>Sign-Up</h2>
                <input
                    type='text'
                    className={`text-box ${fullNameError ? 'error' : ''}`}
                    placeholder='Enter Your Full Name'
                    onChange={handleFullName}
                />
                {fullNameError && <p className="error-text">{fullNameError}</p>}

                <input
                    type='text'
                    className={`text-box ${userNameError ? 'error' : ''}`}
                    placeholder='Enter Your Username'
                    onChange={handleUserName}
                />
                {userNameError && <p className="error-text">{userNameError}</p>}

                <input
                    type='email'
                    className={`text-box ${emailError ? 'error' : ''}`}
                    placeholder='Enter Your Email'
                    onChange={validateEmail}
                />
                {emailError && <p className="error-text">{emailError}</p>}

                <input
                    type='password'
                    className={`text-box ${passwordError ? 'error' : ''}`}
                    placeholder='Enter Your Password'
                    onChange={validatePassword}
                />
                {passwordError && <p className="error-text">{passwordError}</p>}

                <Button variant="contained" className='my-3' disabled={!!fullNameError || !!userNameError || !!emailError || !!passwordError}>
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default SignUp;
