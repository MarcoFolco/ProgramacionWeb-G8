// Capturamos elementos que muestran informan al usuario
const formMessageElement = document.querySelector(".js-login-form__state");

function userIsLoggedIn() {
  const isLoggedIn = localStorage.getItem("userLogged");
  return !!isLoggedIn;
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function setUsers(usersArray) {
  if (!Array.isArray(usersArray)) {
    return false;
  }
  try {
    localStorage.setItem("users", JSON.stringify(usersArray));
    return true;
  } catch (error) {
    console.error(error);
    formMessageElement.classList.remove("hidden");
    formMessageElement.textContent =
      "Ocurrió un error interno, contacte a soporte";
    return false;
  }
}

function userExists(username, password) {
  const users = getUsers();
  if (!users) return false;
  return !!users.find(
    (validUser) =>
      validUser.username === username && validUser.password === password
  );
}

function usernameAlreadyExists(username) {
  const users = getUsers();
  return !!users.find((validUser) => validUser.username === username);
}

function logInUser(username, password) {
  const users = userExists(username, password);
  if (!users) return false;
  localStorage.setItem("userLogged", true);
  return true;
}

function addNewUser(userData) {
  const { username } = userData;
  if (usernameAlreadyExists(username)) {
    console.warn("El usuario ya existe");
    formMessageElement.classList.remove("hidden");
    formMessageElement.textContent = "El usuario ya existe";
    return false;
  }
  const users = getUsers();
  return setUsers([...users, userData]);
}

function signUpUser(userData) {
  return addNewUser(userData);
}

// Verificamos que el usuario no esté logueado, de otra forma no debe poder acceder a esta página
const loggedIn = userIsLoggedIn();
if (loggedIn) {
  window.location.href = "/";
}

// Capturamos elementos del formulario
const registerForm = document.querySelector(".login-form");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");

// Intentamos crear el usuario

registerForm.addEventListener("submit", (event) => {
  const userData = {
    fullName: nameField.value,
    username: emailField.value,
    password: passwordField.value,
  };
  event.preventDefault();
  const signUpSuccessful = signUpUser(userData);
  if (signUpSuccessful) {
    registerForm.reset();
    window.location.href = "/pages/login.html";
  }
});
