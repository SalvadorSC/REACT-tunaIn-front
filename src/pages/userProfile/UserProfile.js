import './UserProfile.css'
import React from "react";
import { useEffect, useState } from 'react'
import {
    // BrowserRouter as Router,
    Link,
} from "react-router-dom";
//import { getToken } from '../../util/LocalStorage.utils';
import { serverRequest } from '../../hooks/urlBack';

export const Userprofile = () => {
    const [user, setUser] = useState({})
    const id = '5fa5a980030a6306d4629ff5';
    useEffect(() => {
        serverRequest(`data/user/${id}`, 'GET')
            .then(console.log)
            .then(response => setUser(response.JSON))
            .catch(console.log)
    }, [id])
    /*
        //const [canales, setCanales] = useState("No tienes ningún canal")
        const [user, setUser] = useState({})
        const url = "http://localhost:3000/data/user/";
        const id = '5fa47b8ef73fa9088fd050de';
        //((`${url}+${id}`
        useEffect(() => {
            const bearer = 'Bearer ' + getToken();
            fetch((`${url}${id}`), {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
                .then(response => response.json())
                .then(data => setUser(data));
        }, [id]);
    */
    return (
        <>
            <p>{user.nombre}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p>{user.fechaNacimiento}</p>
            <Link to="/editUserProfile"><button>Edit</button></Link>
        </>
    )
}
