import { getToken } from "./LocalStorage.utils";


export const DecodeToken = () => {
    const token = getToken();
    const encToken = token.split('.')[1];
    const tokenData = atob(encToken);
    const parsedTokenData = JSON.parse(tokenData);

    return parsedTokenData;
}