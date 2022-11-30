const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)

export function validation (userData) {
    const errors = {}

    if (!userData.username) {
        errors.username = "Por favor complete este campo";
     } else if (!regexEmail.test(userData.username)) {
        errors.username = "El usuario debe ser un email";
     } else if (userData.username.length > 35) {
        errors.username = "No puede tener mas de 35 caracteres"
     } else if(!regexPassword.test(userData.password)) {
        errors.password = "La contraseña debe tener al menos un número"
     } else if(userData.password.length < 6 && userData.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
     }
     return errors;
};


