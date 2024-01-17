// Validaciones de formulario

// Recibe un objeto/array con los valores de formulario

export const validation = (data) => {
    let errors = {
        name: '',
        code: '',
        error:false
    };
    data.code.length == ""?errors.name = 'El campo es requerido':errors.name = '';
    data.name.length == ""?errors.code = 'El campo es requerido':errors.code = '';

    if(data.code.length > 0 || data.name.length > 0){
        errors.error==true
    }else{
        errors.error=false
    }
    return errors;
}

// Devuelve un objeto/array con los errores de validacion