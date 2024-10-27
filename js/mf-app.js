function userIsLoggedIn() {
  const isLoggedIn = localStorage.getItem("loggedUser");
  return !!isLoggedIn;
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

function userIsLoggedIn() {
  const loggedUser = localStorage.getItem("loggedUser");
  return !!loggedUser;
}

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

// Ocultamos botón de Iniciar sesión si el usuario ya está logueado
const loginSidebarUl = document.querySelector("ul.login-register-buttons");

function hideLoginSidebarButtonIfLogged() {
  if (userIsLoggedIn()) {
    loginSidebarUl.classList.add("js--hidden");
  }
}

hideLoginSidebarButtonIfLogged();
