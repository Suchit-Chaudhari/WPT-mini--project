import React, { useState } from 'react';
import '../css/SignIn.css';
import { Button, TextField, Typography } from '@mui/material';

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUserName = (e) => {
        const value = e.target.value;
        setUserName(value);
        value === '' ? setUserNameError('This field should not be empty') : setUserNameError('');
    };

    const validatePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

        if (!passwordRegex.test(value)) {
            setPasswordError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
        } else {
            setPasswordError('');
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

                <Button variant="contained" className='mt-4' disabled={!!userNameError || !!passwordError}>
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default SignIn;
