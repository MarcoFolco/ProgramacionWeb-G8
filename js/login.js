function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function getUser(username) {
  const users = getUsers();
  return users.find((user) => user.username == username);
}

// Capturamos elementos del formulario
const loginForm = document.querySelector(".login-form");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");

function credentialsAreValid(credentials) {
  const { email, password } = credentials;
  const users = getUsers();
  return !!users.find(
    (user) => user.username == email && user.password == password
  );
}

loginForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  const credentials = {
    email: emailField.value,
    password: passwordField.value,
  };
  if (credentialsAreValid(credentials)) {
    queueMessage({
      message: "Logueado con éxito",
      severity: "success",
    });
    localStorage.setItem(
      "loggedUser",
      JSON.stringify(getUser(credentials.email))
    );
    loginForm.submit();
  } else {
    addUIMessage({
      message: "Correo electrónico o contraseña incorrectos",
      severity: "error",
    });
  }
});
