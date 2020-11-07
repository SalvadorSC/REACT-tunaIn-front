export const DecodeToken = (token) => {

    const encToken = token.split('.')[1];
    const tokenData = atob(encToken);
    const parsedTokenData = JSON.parse(tokenData);

    return parsedTokenData;
}