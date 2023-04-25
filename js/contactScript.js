
var contactScript = {};

/* Constante de tipo objeto que almacena todos los ids de los inputs del formulario de contacto para que jquery pueda obtener el valor facilmente. */
contactScript.inputs = {
    subject: "#subject",
    name: "#name",
    email: "#email",
    telephone: "#telephone",
    address: "#address",
    comments: "#comments"
};

/* Funcion que obtiene todos los valores del formulario de contacto (que el usuario ingreso). */
contactScript.getValuesOfInputs = () => {
    return {
        subject: $(contactScript.inputs.subject).val().trim(),
        name: $(contactScript.inputs.name).val().trim(),
        email: $(contactScript.inputs.email).val().trim(),
        telephone: $(contactScript.inputs.telephone).val().trim(),
        address: $(contactScript.inputs.address).val().trim(),
        comments: $(contactScript.inputs.comments).val().trim(),
    };
};

/* Funcion que válida que todos la informacion ingresada por el usario en el formualario sea correcta. */
contactScript.validateFormContact = (event) => {
    let valuesForm = contactScript.getValuesOfInputs();

    if (validates.isEmptyValue(valuesForm.subject)) {
        toasts.ShowAlertWarning('El campo de "Asunto" no puede ser vacío.');
        return false;
    };

    if (!validates.isCorrectStringSize(valuesForm.subject, 3, 128)) {
        toasts.ShowAlertWarning('El campo de "Asunto" debe al menos contener entre 3 y 128 caracteres.');
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

    if (!validates.isIntegerGreaterThanZero(valuesForm.telephone)) {
        toasts.ShowAlertWarning('El campo de "Teléfono" tiene que ser un valor numérico.');
        return false;
    };

    if (!validates.isCorrectStringSize(valuesForm.telephone, 8, 11)) {
        toasts.ShowAlertWarning('El campo de "telephone" debe al menos contener entre 8 y 11 caracteres.');
        return false;
    };

    if (validates.isEmptyValue(valuesForm.comments)) {
        toasts.ShowAlertWarning('El campo de "Mensaje" no puede ser vacío.');
        return false;
    };

    if (!validates.isCorrectStringSize(valuesForm.comments, 3, 512)) {
        toasts.ShowAlertWarning('El campo de "Mensaje" debe al menos contener entre 3 y 512 caracteres.');
        return false;
    };

    return true;
};