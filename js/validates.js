
var validates = {};

/* Funcion que válida si una cadena(value) es vacía  o no. */
validates.isEmptyValue = (value) => {
    if ((value == null || value == "" | value == undefined)) {
        return true;
    } else {
        return false;
    }
};

/* Funcion que válida si una cadena(value) es un número entero positivo mayor de cero. */
validates.isIntegerGreaterThanZero = (value) => {
    let number = Number(value);
    let isInteger = Number.isInteger(number);
    let isPositive = number > 0;
    return isInteger && isPositive;
};

/* Funcion que válida si una cadena(value) tiene el formato correcto de correo. */
validates.isCorrectFormatEmail = (value) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(value);
};

/* Funcion que válida si una cadena(str) tiene el tamaño mínimo(minLength) o máximo(maxLength) indicado. */
validates.isCorrectStringSize = (str, minLength, maxLength) => {
    let length = str.length;
    if (length < minLength || length > maxLength) {
      return false;
    }
    return true;
  };


