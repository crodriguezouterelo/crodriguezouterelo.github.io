function validateNombre() {
  const msg_nombre = "Introduce un nombre";
  const nombre = document.getElementById("nombre");

  if (nombre.value == "") {
    nombre.parentElement.classList.add("form-error");
    document.getElementById("error_nombre").innerHTML = msg_nombre;
    document.getElementById("error_nombre").style.display = "block";
    return false;
  } else {
    nombre.parentElement.classList.remove("form-error");
    document.getElementById("error_nombre").style.display = "none";
    return true;
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function validateNIF() {
  var msg_nif;
  const nif = document.getElementById("nif");
  const nifRGEX = /^[0-9]{8}[A-Z]{1}$/i; // Patrón/modelo del identificador NIF
  var nifCheck = nifRGEX.test(nif.value); // Se verifica el valor con el patrón

  if (nif.value == "") {
    nif.parentElement.classList.add("form-error");
    msg_nif = "Introduce un NIF";
    document.getElementById("error_nif").innerHTML = msg_nif;
    document.getElementById("error_nif").style.display = "block";
    return false;
  } else if (nifCheck == false) {
    nif.parentElement.classList.add("form-error");
    msg_nif = "Formato de NIF incorrecto";
    document.getElementById("error_nif").innerHTML = msg_nif;
    document.getElementById("error_nif").style.display = "block";
    return false;
  } else {
    nif.parentElement.classList.remove("form-error");
    document.getElementById("error_nif").style.display = "none";
    return true;
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function validateDate() {
  var msg_date;
  const date = document.getElementById("date");
  const dateRGEX = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
  var dateCheck = dateRGEX.test(date.value); // Se verifica el valor con el patrón

  if (date.value == "") {
    date.parentElement.classList.add("form-error");
    msg_date = "Introduce una fecha de nacimiento";
    document.getElementById("error_date").innerHTML = msg_date;
    document.getElementById("error_date").style.display = "block";
    return false;
  } else if (dateCheck == false) {
    date.parentElement.classList.add("form-error");
    msg_date = "Formato de fecha incorrecto";
    document.getElementById("error_date").innerHTML = msg_date;
    document.getElementById("error_date").style.display = "block";
    return false;
  } else {
    var parts = date.value.split("/");
    if (isTheDateValid(parts[0], parts[1], parts[2])) {
      var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
      var dtCurrent = new Date();
      msg_date = "Se ha introducido una edad inferior a los 18 años";

      if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        date.parentElement.classList.add("form-error");
        document.getElementById("error_date").innerHTML = msg_date;
        document.getElementById("error_date").style.display = "block";
        return false;
      } else if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
        if (dtCurrent.getMonth() < dtDOB.getMonth()) {
          date.parentElement.classList.add("form-error");
          document.getElementById("error_date").innerHTML = msg_date;
          document.getElementById("error_date").style.display = "block";
          return false;
        }
        if (dtCurrent.getMonth() == dtDOB.getMonth()) {
          if (dtCurrent.getDate() < dtDOB.getDate()) {
            date.parentElement.classList.add("form-error");
            document.getElementById("error_date").innerHTML = msg_date;
            document.getElementById("error_date").style.display = "block";
            return false;
          }
        }
      } else {
        date.parentElement.classList.remove("form-error");
        document.getElementById("error_date").style.display = "none";
        return true;
      }
    } else {
      date.parentElement.classList.add("form-error");
      msg_date = "Formato de fecha incorrecto";
      document.getElementById("error_date").innerHTML = msg_date;
      document.getElementById("error_date").style.display = "block";
      return false;
    }
  }
}

function isTheDateValid(DD, MM, YY) {
  // Se eliminan los posibles ceros a la izquierda
  var dd = parseInt(DD);
  var mm = parseInt(MM);
  var yy = parseInt(YY);

  // Lista de los días de cada mes
  var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (mm == 1 || mm > 2) {
    if (dd > ListofDays[mm - 1]) {
      return false;
    } else {
      return true;
    }
  } else if (mm == 2) {
    var lyear = false;
    if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
      lyear = true;
      console.log("Es " + lyear + " que el año introducido es bisiesto");
    }
    if (lyear == false && dd >= 29) {
      return false;
    } else if (lyear == true && dd > 29) {
      return false;
    } else {
      return true;
    }
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function validateEmail() {
  var msg_email;
  const email = document.getElementById("email");
  const emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailCheck = emailRGEX.test(email.value); // Se verifica el valor con el patrón

  if (email.value == "") {
    email.parentElement.classList.add("form-error");
    msg_email = "Introduce una dirección de email";
    document.getElementById("error_email").innerHTML = msg_email;
    document.getElementById("error_email").style.display = "block";
    return false;
  } else if (emailCheck == false) {
    email.parentElement.classList.add("form-error");
    msg_email = "Formato de email incorrecto";
    document.getElementById("error_email").innerHTML = msg_email;
    document.getElementById("error_email").style.display = "block";
    return false;
  } else {
    email.parentElement.classList.remove("form-error");
    document.getElementById("error_email").style.display = "none";
    return true;
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function validateWeb() {
  var msg_web;
  const web = document.getElementById("web");
  const webRGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  var webCheck = webRGEX.test(web.value); // Se verifica el valor con el patrón

  if (web.value != "" && webCheck == false) {
    web.parentElement.classList.add("form-error");
    msg_web = "Formato de URL incorrecto";
    document.getElementById("error_web").innerHTML = msg_web;
    document.getElementById("error_web").style.display = "block";
    return false;
  } else {
    web.parentElement.classList.remove("form-error");
    document.getElementById("error_web").style.display = "none";
    return true;
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function validatePassword() {
  var msg_password, msg_password0, msg_password1, msg_password2;
  const password = document.getElementById("password");

  // Contraseña vacía
  if (password.value == "") {
    password.parentElement.classList.add("form-error");
    msg_password = "Introduce una contraseña";
    document.getElementById("error_password").innerHTML = msg_password;
    document.getElementById("error_password").style.display = "block";
  } else {
    document.getElementById("error_password").style.display = "none";
  }

  // Limitación 1: 8 caracteres
  const passwordRGEX0 = /^.{8,}$/;
  var passwordCheck0 = passwordRGEX0.test(password.value); // Se verifica el valor con el patrón

  if (password.value != "" && passwordCheck0 == false) {
    password.parentElement.classList.add("form-error");
    msg_password0 = "La contraseña ha de tener mínimo 8 caracteres";
    document.getElementById("error_password0").innerHTML = msg_password0;
    document.getElementById("error_password0").style.display = "block";
  } else {
    document.getElementById("error_password0").style.display = "none";
  }

  // Limitación 2: al menos 1 número
  const passwordRGEX1 = /^(?=.*\d).{1,}$/;
  var passwordCheck1 = passwordRGEX1.test(password.value); // Se verifica el valor con el patrón

  if (password.value != "" && passwordCheck1 == false) {
    password.parentElement.classList.add("form-error");
    msg_password1 = "La contraseña ha de tener mínimo un carácter numérico";
    document.getElementById("error_password1").innerHTML = msg_password1;
    document.getElementById("error_password1").style.display = "block";
  } else {
    document.getElementById("error_password1").style.display = "none";
  }

  // Limitación 3: al menos 1 letra
  const passwordRGEX2 = /^(?=.*[A-Za-z]).{1,}$/;
  var passwordCheck2 = passwordRGEX2.test(password.value); // Se verifica el valor con el patrón

  if (password.value != "" && passwordCheck2 == false) {
    password.parentElement.classList.add("form-error");
    msg_password2 =
      "La contraseña ha de tener mínimo un carácter alfabético (letra)";
    document.getElementById("error_password2").innerHTML = msg_password2;
    document.getElementById("error_password2").style.display = "block";
  } else {
    document.getElementById("error_password2").style.display = "none";
  }

  if (
    password.value != "" &&
    passwordCheck0 == true &&
    passwordCheck1 == true &&
    passwordCheck2 == true
  ) {
    password.parentElement.classList.remove("form-error");
    return true;
  } else {
    return false;
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function validatePasswordConfirm() {
  var msg_passwordConfirm;
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("passwordConfirm");

  if (password.value != passwordConfirm.value) {
    passwordConfirm.parentElement.classList.add("form-error");

    if (password.value != "" && passwordConfirm.value == "") {
      msg_passwordConfirm = "Has de verificar la contraseña introducida";
    } else {
      msg_passwordConfirm = "Las contraseñas introducidas no coinciden";
    }

    document.getElementById(
      "error_passwordConfirm"
    ).innerHTML = msg_passwordConfirm;
    document.getElementById("error_passwordConfirm").style.display = "block";
    return false;
  } else {
    passwordConfirm.parentElement.classList.remove("form-error");
    document.getElementById("error_passwordConfirm");
    document.getElementById("error_passwordConfirm").style.display = "none";
    return true;
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function validateForm() {
  const msg_correct = "El formulario se ha enviado correctamente";
  document.getElementById("correct").innerHTML = msg_correct;

  if (
    validateNombre() &&
    validateNIF() &&
    validateDate() &&
    validateEmail() &&
    validateWeb() &&
    validatePassword() &&
    validatePasswordConfirm()
  ) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("correct").style.display = "none";

    validateNombre();

    validateNIF();

    validateDate();

    validateEmail();

    validateWeb();

    validatePassword();

    validatePasswordConfirm();
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function clearForm() {
  var form = document.getElementById("signup_form");
  form.reset();

  $("#signup_main ul li").css("display", "none");
  $(".form-group").removeClass("form-error");
}
