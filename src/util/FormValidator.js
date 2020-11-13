import {validateMaxLength, validateMinLength} from "./Validator";
export const FormValidator = (value, requirements, validators) => {
    const error = [];

    validators.forEach(validator => {
        if (validator === validateMaxLength) {
            validator(value, requirements.maxLength)
            if (!validator(value, requirements.maxLength)) {
                // return false;
                return error.push(validator)
            }
        } else if (validator === validateMinLength) {
            validator(value, requirements.minLength)
            if (!validator(value, requirements.minLength)) {
                return error.push(validator)
            }
        } else if (!validator(value)) {
            // return false;
            return error.push(validator)
        } return true;
    });
}
