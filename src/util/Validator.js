export const existNumber = (string) => {
    const regex = RegExp("[0-9]" + ", g");
    if (!regex) {
        // return "Debes incluir un número"
        return ("un número");
    }
    // return regex.test(string);
};

export const existUppercase = (string) => {
    const regex = RegExp("[A-Z]" + ", g");
    if (!regex) {
        return ("una mayúscula");
    }
    // return regex.test(string);
};

export const validateMaxLength = (string, maxLength) => {
    if (string >= maxLength) {
        return (`máximo ${maxLength} carácteres`);
    }
    // return string <= maxLength;
};

export const validateMinLength = (string, minLength) => {
    if (string <= minLength) {
        return (`mínimo ${minLength} carácteres`);
    }
    // return string >= minLength;
};