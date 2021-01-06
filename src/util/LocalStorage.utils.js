import react from 'react';
import {useHistory} from "react-router-dom";
import {HOME, LOGIN} from "../routes/routes";

export const setSession = (response) => {

     localStorage.setItem('tuna-in-session-data', JSON.stringify(response));
};

const getSession = () => {
    return JSON.parse(localStorage.getItem('tuna-in-session-data'));
}

export const hasSession = () => {
    return localStorage.getItem('tuna-in-session-data') !== null;
}

export const getToken = () => {
    const sessionData = getSession();
    return sessionData.token;
};

export const GetUserId = () => {
    const history = useHistory();
    const sessionData = getSession();
    if (sessionData){
    const user = sessionData.user._id;
    return user;

    }else {
        history.push(LOGIN);
    }
}

export const deleteToken = () => {
    localStorage.removeItem('tuna-in-session-data', "token");
}