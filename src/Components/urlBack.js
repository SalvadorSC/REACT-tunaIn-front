export const serverRequest = (resources, method, body) => {
    const url = `http://localhost:3000/${resources}`;
    const JSONBody = JSON.stringify(body);
    const options = {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSONBody
    }
    return fetch(url, options).then(response => response.json());
}


