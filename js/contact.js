const contactForm = document.querySelector(".contact-form");
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const messageMsgField = document.querySelector(
  ".contact-form__message-field-msg"
);
const modal = document.querySelector("#modal");
const modalCancelBtn = document.querySelector(".modal__footer-btn-cancel");

modalCancelBtn.addEventListener("click", () => {
  modal.close();
});

contactForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  if (!regexEmail.test(emailField.value)) {
    addUIMessage({
      message: "El email es inválido",
      severity: "error",
    });
  } else {
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
