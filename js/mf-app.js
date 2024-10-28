function userIsLoggedIn() {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedUser"));
  return !!isLoggedIn;
}

function logoutUser() {
  localStorage.setItem("loggedUser", null);
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function getUser(username) {
  const users = getUsers();
  return users.find((user) => user.username === username);
}

function getUserGiftCodes(username) {
  const user = getUser(username);
  return user.giftCodes || [];
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

function updateUser(updatedUser) {
  let users = getUsers();
  users = users.map((user) =>
    user.username === updatedUser.username ? updatedUser : user
  );
  setUsers(users);
}

function getLoggedUser() {
  return JSON.parse(localStorage.getItem("loggedUser"));
}

function updateLoggedUser(updatedUser) {
  localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
  // También actualizar en lista de usuarios
  const users = getUsers();
  const updatedUserIndex = users.findIndex(
    (user) => user.username === updatedUser.username
  );
  users[updatedUserIndex] = updatedUser;
  setUsers(users);
}

// Mostramos mensajes pendientes al usuario
const messagesElement = document.querySelector(".ui-messages");

// Muestra el mensaje la próxima vez que se carge una página (para redireccionar y luego mostrar mensaje)
function queueMessage(messageData) {
  const messages = JSON.parse(sessionStorage.getItem("UIMessages") || "[]");
  messages.push(messageData);
  sessionStorage.setItem("UIMessages", JSON.stringify(messages));
}

// Muestra el mensaje en UI.
// Severity es el color del mensaje: info (azul), success (verde), warn (amarillo), error (rojo)
function addUIMessage(messageData) {
  const { message, severity } = messageData;
  const messageElement = document.createElement("article");
  messageElement.classList.add("ui-message", `ui-message--${severity}`);
  messageElement.innerHTML = `<p class="ui-message--text text text--lg text--primary">${message}</p>`;
  messagesElement.appendChild(messageElement);
  setTimeout(() => {
    messagesElement.removeChild(messageElement);
  }, 5000);
}

function displayUIMessageQueue() {
  const messages = JSON.parse(sessionStorage.getItem("UIMessages") || "[]");
  messages.forEach((message) => addUIMessage(message));
  sessionStorage.setItem("UIMessages", JSON.stringify([]));
}

displayUIMessageQueue();

// Verificamos aquellas páginas que el usuario no debería ver al estar logueado
const forbiddenLoggedInURLs = [
  "/pages/login.html",
  "/pages/register.html",
  "/pages/password-recovery.html",
];

function loggedUserCanViewPage() {
  const currentURL = new URL(window.location.href);
  // Verifica solo lo que está luego de la / en la URL.
  if (userIsLoggedIn() && forbiddenLoggedInURLs.includes(currentURL.pathname)) {
    queueMessage({
      message: "No puedes ver esa página si ya estás logueado",
      severity: "warn",
    });
    window.location.href = "/";
  }
}

loggedUserCanViewPage();

// Verificamos aquellas páginas que el usuario no debería ver si no está logueado
const forbiddenAnonymousURLs = [
  "/pages/user-profile.html",
  "/pages/gift-card.html",
];

function anonymousUserCanViewPage() {
  const currentURL = new URL(window.location.href);
  // Verifica solo lo que está luego de la / en la URL.
  if (
    !userIsLoggedIn() &&
    forbiddenAnonymousURLs.includes(currentURL.pathname)
  ) {
    queueMessage({
      message: "No puedes ver esa página si no estás logueado",
      severity: "warn",
    });
    window.location.href = "/pages/login.html";
  }
}

anonymousUserCanViewPage();

// Ocultamos botón de Iniciar sesión si el usuario ya está logueado
const loginSidebarUl = document.querySelector("ul.login-register-buttons");

function hideLoginSidebarButtonIfLogged() {
  if (userIsLoggedIn()) {
    loginSidebarUl.classList.add("js--hidden");
  }
}

hideLoginSidebarButtonIfLogged();

// Ocultamos el botón de profile si no estamos logueados
const userProfileButton = document.querySelector(
  ".header__user-profile-button"
);

function hideUserProfileButtonIfNotLogged() {
  if (!userIsLoggedIn()) {
    userProfileButton.classList.toggle("js--hidden");
  }
}

hideUserProfileButtonIfNotLogged();
