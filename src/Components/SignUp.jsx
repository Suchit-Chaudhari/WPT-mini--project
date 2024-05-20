import React, { useState } from 'react';
import '../css/SignUp.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if any required field is empty
        if (!firstName || !lastName || !userName || !email || !password) {
            console.error('Please fill in all required fields.');
            alert("enter all fields");  
            return;
        }
    
        const requestBody = {
            "username": userName,
            "email": email,
            "password": password,
            "first_name": firstName,
            "last_name": lastName,
        };
    
        try {
            const response = await axios.post('http://localhost:6800/customer/', requestBody);
    
            if (response.status === 200) {
                navigate('/sign-in');
            } else {
                const errorData = response.data;
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleFirstName = (e) => {
        
        const value = e.target.value;
        setFirstName(value);
        value === '' ? setFirstNameError('This field should not be empty') : setFirstNameError('');
    };

    const handleLastName = (e) => {
        const value = e.target.value;
        setLastName(value);
        value === '' ? setLastNameError('This field should not be empty') : setLastNameError('');
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
                    className={`text-box ${firstNameError ? 'error' : ''}`}
                    placeholder='Enter Your First Name'
                    onChange={handleFirstName}
                    required    
                />
                {firstNameError && <p className="error-text">{firstNameError}</p>}

                <input
                    type='text'
                    className={`text-box ${lastNameError ? 'error' : ''}`}
                    placeholder='Enter Your Last Name'
                    onChange={handleLastName}
                    required
                />
                {lastNameError && <p className="error-text">{lastNameError}</p>}

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

                <Button
                    variant="contained"
                    className='my-3'
                    disabled={
                        !!firstNameError || !!lastNameError || !!userNameError || !!emailError || !!passwordError
                    }
                    onClick={handleSubmit}

                >
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default SignUp;
