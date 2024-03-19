import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })    
    }

}