export const serverRequest = (resources, method, body) => {
    const token = localStorage.getItem('token');
    const url = `http://localhost:3000/${resources}`;
    const JSONBody = JSON.stringify(body);
    const options = {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authoritation': token
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSONBody
    }
    return fetch(url, options).then(response => {
        if (response.status > 400) {
            response.json();
        } else {
            console.log(response.status);
        }

    });
}


