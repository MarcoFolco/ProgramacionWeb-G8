// Usar datos del formulario para cambiar la gift card
// Form elements
const giftCardForm = document.querySelector(".gift-card__form");
const amountField = document.querySelector("#amount");
const initallyCheckedFields = document.querySelectorAll(
  ".gift-card__form [checked]"
);

// Preview card elements
const previewNameLabel = document.querySelector(".gift-card__preview-name");
const previewCard = document.querySelector(".gift-card__preview-image");
const amountLabel = document.querySelector(".gift-card__preview-price");

// Validamos el monto, y lo forzamos a un limite de ser necesario
function validateAmountValue(amountValue) {
  const minValue = +amountField.min;
  const maxValue = +amountField.max;
  amountValue = Math.floor(amountValue * 10) / 10;
  amountField.value = amountValue;
  if (amountValue < minValue || amountValue > maxValue) {
    addUIMessage({
      message: "El monto debe estar entre $1 y $1000",
      severity: "warn",
    });
    if (amountValue < minValue) {
      amountField.value = minValue;
      amountValue = minValue;
    } else {
      amountField.value = maxValue;
      amountValue = maxValue;
    }
  }
  return amountValue;
}

function updatePreview(inputName, inputValue) {
  switch (inputName) {
    case "name":
      previewNameLabel.textContent = inputValue;
      break;
    case "color":
      previewCard.style.color = `var(--gift-card-color-${inputValue})`;
      break;
    case "size":
      previewCard.style.fontSize = inputValue;
      break;
    case "amount":
      const amountValue = validateAmountValue(+inputValue);
      amountLabel.textContent = `$${amountValue || "000"}.-`;
      break;
    case "position":
      amountLabel.style = null;
      switch (inputValue) {
        case "positionBottomRight":
          amountLabel.style.bottom = "0";
          amountLabel.style.right = "0";
          break;
        case "positionTopLeft":
          amountLabel.style.top = "0";
          amountLabel.style.left = "0";
          break;
        case "positionTopRight":
          amountLabel.style.top = "0";
          amountLabel.style.right = "0";
          break;
      }
      break;
    case "bgColor":
      previewCard.style.backgroundColor = `var(--gift-card-bg-${inputValue})`;
      break;
  }
}

giftCardForm.addEventListener("change", (changeEvent) => {
  // Tenemos que identificar que campo cambio
  const { name, value } = changeEvent.target;
  updatePreview(name, value);
});

// Seteamos los valores default del formulario en la card

function applyInitialState() {
  initallyCheckedFields.forEach((checkedField) => {
    const { name, value } = checkedField;
    updatePreview(name, value);
  });
  previewNameLabel.textContent = "DESTINATARIO";
  amountLabel.textContent = "$000.-";
}

applyInitialState();

// Capturamos el valor del formulario y lo guardamos en localStorage
function isValidUsername(username) {
  const users = getUsers();
  return !!users.find((user) => user.username === username);
}

function isLoggedUsername(username) {
  const loggedUser = getLoggedUser();
  return loggedUser.username === username;
}

// Se debe asegurar de no generar un codigo repetido
function generateRandomGiftCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const giftCodeLength = 4;
  let code = "";

  for (let i = 0; i < giftCodeLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return code;
}

/*
 * Funcion recursiva que genera un gift code.
 * Si el gift code ya existe para ese usuario, se llama a si misma para generar otro
 * Asi sucesivamente hasta generar uno no repetido
 */
function generateNonRepeatedUserGiftCode(username) {
  const giftCode = generateRandomGiftCode();
  const userGiftCodes = getUserGiftCodes(username);
  if (!!userGiftCodes.find((giftCode) => giftCode.code === giftCode)) {
    return generateUserGiftCode(username);
  }
  return giftCode;
}

function addUserGiftCode(username, gift) {
  const user = getUser(username);
  const giftCodes = user.giftCodes || [];
  giftCodes.push(gift);
  user.giftCodes = giftCodes;
  updateUser(user);
}

function saveGiftCard(username, amount) {
  const giftCode = generateNonRepeatedUserGiftCode(username);
  const gift = {
    code: giftCode,
    amount,
  };
  addUserGiftCode(username, gift);
}

// Form validation
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameMsgElement = document.querySelector("#name ~ .input-status-msg");
const emailMsgElement = document.querySelector("#email ~ .input-status-msg");
const amountMsgElement = document.querySelector(
  "div:has(#amount) ~ .input-status-msg"
);

function validateGiftCardForm(fieldValues) {
  const { name, email, amount } = fieldValues;
  let result = true;
  if (!name) {
    result = false;
    nameMsgElement.classList.add("js--visible");
  } else {
    nameMsgElement.classList.remove("js--visible");
  }
  if (!email) {
    result = false;
    emailMsgElement.classList.add("js--visible");
    emailMsgElement.textContent = "Este campo es requerido";
  } else if (!regexEmail.test(email)) {
    result = false;
    emailMsgElement.classList.add("js--visible");
    emailMsgElement.textContent = "El email no es válido";
  } else if (isLoggedUsername(email)) {
    result = false;
    emailMsgElement.textContent = "No puedes ingresar tu propio email";
    emailMsgElement.classList.add("js--visible");
  } else if (!isValidUsername(email)) {
    result = false;
    emailMsgElement.textContent =
      "El email debe pertenecer a un usuario existente";
    emailMsgElement.classList.add("js--visible");
  } else {
    emailMsgElement.textContent = "";
    emailMsgElement.classList.remove("js--visible");
  }
  if (!amount) {
    result = false;
    amountMsgElement.classList.add("js--visible");
  } else {
    amountMsgElement.textContent = "";
    amountMsgElement.classList.remove("js--visible");
  }
  return result;
}

giftCardForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  const {
    name: { value: name },
    email: { value: email },
    amount: { value: amount },
  } = submitEvent.target;
  const valid = validateGiftCardForm({ name, email, amount });
  if (valid) {
    const cartItem = {
      type: "gift",
      total: +amount,
      receiver: {
        email,
        name,
      },
    };
    addLoggedUserCartItem(cartItem);
    // saveGiftCard(email, amount);
    queueMessage({
      message: "Gift card agregada al carrito con éxito",
      severity: "success",
    });
    giftCardForm.submit();
  } else {
    addUIMessage({
      message: "Verifique los campos del formulario",
      severity: "error",
    });
  }
});
