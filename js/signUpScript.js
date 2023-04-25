var signUpScript = {};

/* Funcion onLoad() de la pagina de registro. */
$(document).ready(function () {
    signUpScript.clearInputsFormSign();
});

/* Constante de tipo objeto que almacena todos los ids de los inputs del formulario de registro para que jquery pueda obtener el valor facilmente. */
signUpScript.inputs = {
    email: "#emailSignUp",
    password: "#passwordSignUp",
    name: "#nameSignUp",
    telephone: "#telephoneSignUp",
    address: "#addressSignUp"
};

/* Funcion que obtiene todos los valores del formulario de registro (que el usuario ingreso). */
signUpScript.getValuesOfInputs = () => {
    return {
        email: $(signUpScript.inputs.email).val().trim(),
        password: $(signUpScript.inputs.password).val().trim(),
        name: $(signUpScript.inputs.name).val().trim(),
        telephone: $(signUpScript.inputs.telephone).val().trim(),
        address: $(signUpScript.inputs.address).val().trim()
    };
};

/* Funcion que limpia todos los campos del formulario de registro.). */
signUpScript.clearInputsFormSign = () => {
    $(signUpScript.inputs.email).val("");
    $(signUpScript.inputs.password).val("");
    $(signUpScript.inputs.name).val("");
    $(signUpScript.inputs.telephone).val("");
    $(signUpScript.inputs.address).val("");
};


/* Funcion que válida que todos la informacion ingresada por el usario en el formualario de registro sea correcta. */
signUpScript.validateFormSign = (event) => {
    let valuesForm = signUpScript.getValuesOfInputs();

    if (validates.isEmptyValue(valuesForm.email)) {
        toasts.ShowAlertWarning('El campo de "Email" no puede ser vacío.');
        return false;
    };

    if (!validates.isCorrectStringSize(valuesForm.email, 3, 128)) {
        toasts.ShowAlertWarning('El campo de "Email" debe al menos contener entre 3 y 128 caracteres.');
        return false;
    };

    if (!validates.isCorrectFormatEmail(valuesForm.email)) {
        toasts.ShowAlertWarning('El campo de "Email" tiene que tener un formato de correo válido.');
        return false;
    };
    
    if (!validates.isCorrectStringSize(valuesForm.password, 8, 16)) {
        toasts.ShowAlertWarning('El campo de "Contraseña " debe al menos contener entre 8 y 16 caracteres.');
        return false;
    };

    if (validates.isEmptyValue(valuesForm.name)) {
        toasts.ShowAlertWarning('El campo de "Nombre" no puede ser vacío.');
        return false;
    };

    if (!validates.isCorrectStringSize(valuesForm.name, 3, 128)) {
        toasts.ShowAlertWarning('El campo de "Nombre" debe al menos contener entre 3 y 128 caracteres.');
        return false;
    };    

    if (!validates.isIntegerGreaterThanZero(valuesForm.telephone)) {
        toasts.ShowAlertWarning('El campo de "Teléfono" tiene que ser un valor numérico.');
        return false;
    };

    if (!validates.isCorrectStringSize(valuesForm.telephone, 8, 11)) {
        toasts.ShowAlertWarning('El campo de "telephone" debe al menos contener entre 8 y 11 caracteres.');
        return false;
    };

    return true;
};