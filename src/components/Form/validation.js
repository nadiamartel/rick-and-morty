
const validation = (userData) => {
    let errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
         errors.email = "El email ingresado no es correcto";
    }
    if(!userData.email){
        errors.email = "Debe ingresar un email valido";
    }
    if(userData.email.length > 35){
        errors.email = "El email no puede superar los 35 caracteres"; 
    }
    if(!/^(?=.*\d).{6,10}$/.test(userData.password)){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres y tener al menos un numero";
    }
    return errors;
}

export default validation;