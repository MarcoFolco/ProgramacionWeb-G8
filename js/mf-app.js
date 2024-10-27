// Mostramos mensajes pendientes al usuario
const messagesElement = document.querySelector(".ui-messages");

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
  console.log(messages);
  messages.forEach((message) => addUIMessage(message));
  sessionStorage.setItem("UIMessages", JSON.stringify([]));
}

displayUIMessageQueue();
