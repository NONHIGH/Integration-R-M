export default function ValidateUser(userForm) {
    let errors = {};
    const emailRegExp = /^[\w-\.]{1,35}@([\w-]+\.)+[\w-]+$/;
    const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,10}$/;
  
    if (!emailRegExp.test(userForm.email)) {
      errors.email = "Debes ingresar un correo electrónico válido.";
    }
    if (!passwordRegExp.test(userForm.password)) {
      errors.password =
        "Debes ingresar una contraseña válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.";
    }
    return errors;
  }
  