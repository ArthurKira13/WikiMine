//"JavaScript"
function validateEmail() {
  toggleButtonDisable();
  toggleEmailError();
}
function validatePassword() {
  toggleButtonDisable();
  togglePasswordError();
}
function runPage() {
  window.location.href = "../Pages/Home/home.html";
}

function toggleEmailError() {
  const email = form.email().value;
  form.requiredEmail().style.display = email ? "none" : "block";
  form.invalidEmail().style.display = validEmail(email) ? "none" : "block";
  function validEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
}
function togglePasswordError() {
  const password = form.password().value;
  form.requiredPassword().style.display = password ? "none" : "block";
}
function toggleButtonDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.sign().disabled = !emailValid || !passwordValid;

  function isEmailValid() {
    const email = form.email().value;
    if (!email) {
      return false;
    }
    return validEmail(email);
  }

  function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
      return false;
    }
    return true;
  }
  function validEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
}
const form = {
  email: () => document.getElementById("email"),
  password: () => document.getElementById("password"),
  invalidPassword: () => document.getElementById("password-invalid-error"),
  invalidEmail: () => document.getElementById("email-invalid-error"),
  requiredPassword: () => document.getElementById("password-required-error"),
  requiredEmail: () => document.getElementById("email-required-error"),
  recoverPassword: () => document.getElementById("recover-password"),
  sign: () => document.getElementById("sign-button"),
};
