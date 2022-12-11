import React from "react";
import "./Form.module.css";
//import { useState } from 'react';
import { validation } from './Validation.js'
import styles from "./Form.module.css"

export default function Form(props){
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

    const handleSubmit = (evento) => {
        evento.preventDefault()
        props.login(userData)
      }

return (
<div>
    <form onSubmit={handleSubmit}>
    <label class={styles.userpass} htmlFor="username">Username: </label>
    <input id="username" name="username" placeholder="Ingrse el usuario..." type="text" value={userData.username} onChange={handleInputChange} className={errors.username && "warning"}/>
    <p class={styles.danger}>{errors.username}</p>
    <label class={styles.userpass} htmlFor="password">Password: </label>
    <input id="password" name="password" type="password" value={userData.password} onChange={handleInputChange} className={errors.password && "warning"}/>
    <p class={styles.danger}>{errors.password}</p>
    <input class={styles.submit}type="submit"/>
    </form>
</div>
);
}