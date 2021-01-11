
export const setSession = (response) => {

     localStorage.setItem('tuna-in-session-data', JSON.stringify(response));
};

export const getSession = () => {
    return JSON.parse(localStorage.getItem('tuna-in-session-data'));
}

export const hasSession = () => {
    return getSession() !== null;
}

export const getToken = () => {
    const sessionData = getSession();
    if(!sessionData){
        return undefined;
    }
    return sessionData.token;
};

export const getUserId = () => {
    if(hasSession()){
        return getSession().user._id;
    }else{
        return undefined;
    }
}

export const deleteToken = () => {
    localStorage.removeItem('tuna-in-session-data');
}