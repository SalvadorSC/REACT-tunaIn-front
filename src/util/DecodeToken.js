export const DecodeToken = (token) => {

  //  const encToken = token.split('.')[1];
    const tokenData = atob(token);
    console.log(token);
    const parsedTokenData = JSON.parse(tokenData);

    return parsedTokenData;
}