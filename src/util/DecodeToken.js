export const DecodeToken = (token) => {

<<<<<<< HEAD
  //  const encToken = token.split('.')[1];
    const tokenData = atob(token);
    console.log(token);
=======
    //Hacemos un split a token que está en formato JSON
    //encToken devuelve el Payload del token
    //Payload contiene la información encriptada del usuario, en este caso el id (pero podría contener más información, según se lo definamos en el backend)
    const encToken = token.split('.')[1];

    //atob() desencripta el token (en este caso solo el Payload)
    //tokenData contiene el payload (info del usuario, en este caso el id) desencriptado
    const tokenData = atob(encToken);

    //parsedTokenData contiene el token Data en formato string
>>>>>>> adcfa9d5936290bcb8278ef5227c44d3413146d8
    const parsedTokenData = JSON.parse(tokenData);

    return parsedTokenData;
}