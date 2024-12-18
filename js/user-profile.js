// Llenar los formularios con la data del usuario logueado
const userDataForm = document.querySelector(".profile__user-data-form");
const emailField = document.querySelector("#email");
const nameField = document.querySelector("#name");

const userPasswordForm = document.querySelector(".profile__user-password-form");
const currentPasswordField = document.querySelector("#currentPassword");
const newPasswordField = document.querySelector("#newPassword");
const newPasswordRepeatedField = document.querySelector("#newPasswordRepeated");

function fillUserDataForm() {
  const loggedUser = getLoggedUser();
  emailField.value = loggedUser.username;
  nameField.value = loggedUser.fullName;
}

fillUserDataForm();

// Cambiar nombre del usuario

function updateLoggedUserName(newName) {
  const loggedUser = getLoggedUser();
  loggedUser.fullName = newName;
  updateLoggedUser(loggedUser);
}

userDataForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  const newUserName = nameField.value;
  updateLoggedUserName(newUserName);
  addUIMessage({
    message: "Nombre actualizado con éxito",
    severity: "success",
  });
});

// Cambiar contraseña del usuario

function currentPasswordIsValid(currentPassword) {
  const loggedUser = getLoggedUser();
  return loggedUser.password === currentPassword;
}

function newPasswordsMatch(newPassword, newPasswordRepeated) {
  return newPassword === newPasswordRepeated;
}

function newPasswordSameAsCurrentPassword(currentPassword, newPassword) {
  return currentPassword === newPassword;
}

function updatedLoggedUserPassword(newPassword) {
  const loggedUser = getLoggedUser();
  loggedUser.password = newPassword;
  updateLoggedUser(loggedUser);
}

userPasswordForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  const currentPassword = currentPasswordField.value;
  const newPassword = newPasswordField.value;
  const newPasswordRepeated = newPasswordRepeatedField.value;
  if (!currentPasswordIsValid(currentPassword)) {
    addUIMessage({
      message: "La contraseña actual no es válida",
      severity: "error",
    });
    return;
  }
  if (!newPasswordsMatch(newPassword, newPasswordRepeated)) {
    addUIMessage({
      message: "Las contraseñas nuevas no coinciden",
      severity: "error",
    });
    return;
  }
  if (newPasswordSameAsCurrentPassword(currentPassword, newPassword)) {
    addUIMessage({
      message: "La contraseña nueva no puede ser igual a la actual",
      severity: "error",
    });
    return;
  }
  updatedLoggedUserPassword(newPassword);
  addUIMessage({
    message: "Contraseña actualizada con éxito",
    severity: "success",
  });
  userPasswordForm.reset();
});

// Desloguear usuario
const logoutUserButton = document.querySelector(".profile__logout-button");

logoutUserButton.addEventListener("click", () => {
  logoutUser();
  queueMessage({
    message: "Salió de la cuenta con éxito",
    severity: "success",
  });
  window.location.href = "/";
});

// Borrar la cuenta del usuario
const deleteAccountButton = document.querySelector(
  ".profile__delete-account-button"
);
const modalElement = document.querySelector("#modal");
const modalCloseBtnElement = document.querySelector(
  ".modal__footer-btn-cancel"
);
const modalAcceptBtnElement = document.querySelector(
  ".modal-confirm-delete .modal__footer-btn-accept"
);

modalCloseBtnElement.addEventListener("click", () => modalElement.close());

function removeLoggedUser() {
  const loggedUser = getLoggedUser();
  let users = getUsers();
  users = users.filter((user) => user.username !== loggedUser.username);
  setUsers(users);
  logoutUser();
}

modalAcceptBtnElement.addEventListener("click", () => {
  removeLoggedUser();
  queueMessage({
    message: "Cuenta eliminada con éxito",
    severity: "success",
  });
});

deleteAccountButton.addEventListener("click", () => {
  modalElement.showModal();
});
