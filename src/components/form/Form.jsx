import React from "react";
import "./Form.module.css";
//import { useState } from 'react';
import { validation } from './Validation.js'

export default function Form(){
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({username: '', password: ''});

    const handleInputChange = (evento) => {
        setUserData({...userData, [evento.target.name] : evento.target.value})
        setErrors(
            validation({
                ...userData,
                [evento.target.name]: evento.target.value,
             }));             
    } 

return (
<div>
    <form>
    <label htmlFor="username">Username: </label>
    <input id="username" name="username" placeholder="Ingrse el usuario..." type="text" value={userData.username} onChange={handleInputChange} className={errors.username && "warning"}/>
    <p>{errors.username}</p>
    <label htmlFor="password">Password: </label>
    <input id="password" name="password" type="password" value={userData.password} onChange={handleInputChange} className={errors.password && "warning"}/>
    <p>{errors.password}</p>
    <input type="submit"/>
    </form>
</div>
);
}