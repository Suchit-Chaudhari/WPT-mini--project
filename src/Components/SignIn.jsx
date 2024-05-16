import React, { useEffect, useState } from 'react';

import '../css/SignIn.css';
import { Button, TextField } from '@mui/material';

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUserName = (e) => {
        setUserName(e.target.value);
        console.log(userName);
    }

    
    const validatePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        
        if (!passwordRegex.test(value)) {
        setPasswordError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
        } else {
        setPasswordError('');
        }
        console.log(password)
    };
    return (
        <div className="background">
            <div className='sign-in-container'>
            <h2> Sign In</h2>
            <TextField 
                fullWidth 
                id="userName"
                label="Enter Your Username" 
                variant="standard" 
                className='my-3' 
                required 
                onChange={handleUserName}/>
            <TextField 
                fullWidth 
                id="password" 
                label="Enter Your Password" 
                variant="standard" 
                className='my-3' 
                type='password' 
                required 
                onChange={validatePassword}
                error={!!passwordError} 
                helperText={passwordError}/>
            <Button variant="contained" className='my-3' required>Sign In</Button>
        </div>
        </div>
        
    );
};

export default SignIn;
