import { getToken, hasSession } from "../util/LocalStorage.utils";
const API_URL = window.location.hostname === "tuna-in.netlify.app" ? "https://tunain3.herokuapp.com/" : `http://localhost:3300`;

export const serverRequest = (resources, method, body) => {
    //const token = getToken();
    const token = hasSession() ? getToken() : '';
    /* const url = `http://localhost:3300/${resources}`; */
    const url =  `${API_URL}/${resources}`
    const JSONBody = JSON.stringify(body);
    const options = {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
            
            // 'Authorization': token
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSONBody
    }

    return fetch(url, options)
        .catch(error => (error))
        .then(res => {
            if (res.status >= 400) {
                return Promise.reject(res);
            }

            if (method === 'DELETE') {
                return Promise.resolve();
            }
            return res.json();
        })
        .then(resJson => {
            return Promise.resolve(resJson);
        })
        .catch(err => Promise.reject(err));

}