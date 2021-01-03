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
    return sessionData;
};

export const getUserId = () => {
    const sessionData = getSession();
    const user = sessionData.user;
    return user._id;
}

export const deleteToken = () => {
    localStorage.removeItem('JWT_KEY');
}