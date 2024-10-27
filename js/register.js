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
    addUIMessage({
      message: "Ocurrió un error interno, contacte a soporte",
      severity: "error",
    });
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

function signUpUser(userData) {
  const { username } = userData;
  if (usernameAlreadyExists(username)) {
    console.warn("El usuario ya existe");
    addUIMessage({
      message: "El usuario ya existe",
      severity: "error",
    });
    return false;
  }
  const users = getUsers();
  return setUsers([...users, userData]);
}

// Capturamos elementos del formulario
const registerForm = document.querySelector(".register-form");
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
    queueMessage({
      message: "Usuario creado con éxito",
      severity: "success",
    });
    registerForm.reset();
    window.location.href = "/pages/login.html";
  }
});
