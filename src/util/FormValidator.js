export const FormValidator = (value, requirements, validators) => {
    const error = [];

    validators.forEach(validator => {
        if (validator === validateMaxLength) {
            validator(value, requirements.maxLength)
            if (!validator(value, equirements.maxLength)) {
                // return false;
                return error.push(validator)
            }
        } else if (validator === validateMinLength) {
            validator(value, requirements.minLength)
            if (!validator(value, equirements.minLength)) {
                return error.push(validator)
            }
        } else if (!validator(value)) {
            // return false;
            return error.push(validator)
        } return true;
    });
}
