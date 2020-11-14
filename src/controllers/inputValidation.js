import { checkFormErrors, concatErrorString } from "../util/FormValidator";

export const inputValidation = (value, validators, options) => {
  console.log(value)
  const inputErrors = checkFormErrors(value, validators, options);
  let result;
  if(inputErrors && inputErrors.length){
    result = concatErrorString(inputErrors);
  }
  return result;
}
