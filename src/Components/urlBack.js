import { getToken } from "../util/LocalStorage.utils";

export const serverRequest = (resources, method, body) => {
    const token = getToken();
    const url = `http://localhost:3300/${resources}`;
    const JSONBody = JSON.stringify(body);
    const options = {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authoritation': 'Bearer ' + token
            // 'Authoritation': token
            // Authorization: 'Bearer ' + jwtToken
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSONBody
    }

    let response
    return fetch(url, options)
        .catch(error => (error))
        .then(res => {
            if (res.status >= 400) {
                response = res;
            }
            return res.json();
        })
        .then(resJson => {
            return new Promise((resolve, reject) => {
                if (response) {
                    reject(resJson);
                } else {
                    resolve(resJson)
                }
            });
        });
}


