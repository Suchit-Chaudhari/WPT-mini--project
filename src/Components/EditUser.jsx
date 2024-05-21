import React, { useState } from 'react';
import '../css/SignUp.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {

    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString)[0]; 
    

    const [id, setId] = useState(user.id);
    const [firstName, setFirstName] = useState(user.first_name);
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState(user.last_name);
    const [lastNameError, setLastNameError] = useState('');
    const [userName, setUserName] = useState(user.username);
    const [userNameError, setUserNameError] = useState('');
    const [email, setEmail] = useState(user.email);
    const [emailError, setEmailError] = useState('');
    
    // const [password, setPassword] = useState('');
    // const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

   

const handleUpdate = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:6800/customer/update', {
            "id" : id,
            "username": userName,
            "email": email,
            "first_name": firstName,
            "last_name": lastName
        });

        if (response.status === 200) {
            console.log('User updated successfully');
            
            // Optionally, you can navigate to another page or perform additional actions upon successful update
        } else {
            console.error('Failed to update user');
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
        const containsInvalidCharacters = /[^\w]/.test(value); // Regular expression to check for invalid characters
    
        setUserName(value);
        if (value === '') {
            setUserNameError('This field should not be empty');
        } else if (containsInvalidCharacters) { // Check if value contains invalid characters
            setUserNameError('Username cannot contain spaces, commas, or hyphens');
        } else {
            setUserNameError('');
        }
    };
    

    const validateEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        !emailRegex.test(value) ? setEmailError('Enter a valid email address') : setEmailError('');
    };

    // const validatePassword = (e) => {
    //     const value = e.target.value;
    //     setPassword(value);
    //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    //     !passwordRegex.test(value)
    //         ? setPasswordError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.')
    //         : setPasswordError('');
    // };

    return (
        <div className='background'>
            <div className="sign-up-container">
                <h2>Edit Profile</h2>
                <label htmlFor="first name">first name</label>
                <input
                    type='text'
                    className={`text-box ${firstNameError ? 'error' : ''}`}
                    placeholder='Enter Your First Name'
                    onChange={handleFirstName}
                    value={firstName}
                />
                {firstNameError && <p className="error-text">{firstNameError}</p>}
                <label htmlFor="last name">last name</label>
                <input
                    type='text'
                    className={`text-box ${lastNameError ? 'error' : ''}`}
                    placeholder='Enter Your Last Name'
                    onChange={handleLastName}
                    value={lastName}
                />
                {lastNameError && <p className="error-text">{lastNameError}</p>}

                <label htmlFor="Username">Username</label>
                <input
                    type='text'
                    className={`text-box ${userNameError ? 'error' : ''}`}
                    placeholder='Enter Your Username'
                    onChange={handleUserName}
                    value={userName}
                />
                {userNameError && <p className="error-text">{userNameError}</p>}

                <label htmlFor="Email">Email</label>
                <input
                    type='email'
                    className={`text-box ${emailError ? 'error' : ''}`}
                    placeholder='Enter Your Email'
                    onChange={validateEmail}
                    value={email}
                />
                {emailError && <p className="error-text">{emailError}</p>}

                {/* <input
                    type='password'
                    className={`text-box ${passwordError ? 'error' : ''}`}
                    placeholder='Enter Your Password'
                    onChange={validatePassword}
                />
                {passwordError && <p className="error-text">{passwordError}</p>} */}

                <Button
                    variant="contained"
                    className='my-3'
                    disabled={
                        !!firstNameError || !!lastNameError || !!userNameError || !!emailError 
                    }
                    onClick={handleUpdate}
                >
                    Update
                </Button>
            </div>
        </div>
    );
};

export default EditUser;
