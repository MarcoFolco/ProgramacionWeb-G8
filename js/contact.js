const contactForm = document.querySelector(".contact-form");
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPhone = /^\d{4}-?\d{4}$/;
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const messageMsgField = document.querySelector(
  ".contact-form__message-field-msg"
);

// Elementos de mensaje
const fullNameMsgElement = document.querySelector("#name ~ .input-status-msg");
const emailMsgElement = document.querySelector("#email ~ .input-status-msg");
const phoneMsgElement = document.querySelector("#phone ~ .input-status-msg");
const messageMsgElement = document.querySelector(
  "#message ~ .input-status-msg"
);

// Lógica para el modal
const modal = document.querySelector("#modal");
const modalCancelBtn = document.querySelector(".modal__footer-btn-cancel");

modalCancelBtn.addEventListener("click", () => {
  modal.close();
});

// Lógica de validación del formulario

function checkContactFormFields(fieldValues) {
  const { name, phone, email, message } = fieldValues;
  let result = true;
  if (!name) {
    result = false;
    fullNameMsgElement.classList.add("js--visible");
  } else {
    fullNameMsgElement.classList.remove("js--visible");
  }
  if (!phone) {
    result = false;
    phoneMsgElement.classList.add("js--visible");
    phoneMsgElement.textContent = "Este campo es requerido";
  } else if (!regexPhone.test(phone)) {
    result = false;
    phoneMsgElement.classList.add("js--visible");
    phoneMsgElement.textContent =
      "El teléfono debe tener un formato XXXX-XXXX. El guion es opcional";
  } else {
    phoneMsgElement.textContent = "";
    phoneMsgElement.classList.remove("js--visible");
  }
  if (!email) {
    result = false;
    emailMsgElement.classList.add("js--visible");
    emailMsgElement.textContent = "Este campo es requerido";
  } else if (!regexEmail.test(email)) {
    result = false;
    emailMsgElement.classList.add("js--visible");
    emailMsgElement.textContent = "El email no es válido";
  } else {
    emailMsgElement.textContent = "";
    emailMsgElement.classList.remove("js--visible");
  }
  if (!message) {
    result = false;
    messageMsgElement.classList.add("js--visible");
  } else {
    messageMsgElement.classList.remove("js--visible");
  }
  return result;
}

contactForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  const {
    name: { value: name },
    phone: { value: phone },
    email: { value: email },
    message: { value: message },
  } = submitEvent.target;
  const valid = checkContactFormFields({ name, phone, email, message });
  if (valid) {
    contactForm.reset();
    updateCharacterCount();
    modal.showModal();
  }
});

function updateCharacterCount() {
  const entered = messageField.value.length;
  const maxLength = messageField.getAttribute("maxlength");
  const remaining = maxLength - entered;
  messageMsgField.textContent = `${entered} caracteres ingresados, ${remaining} caracteres restantes.`;
}

messageField.addEventListener("input", () => {
  updateCharacterCount();
});

updateCharacterCount();
