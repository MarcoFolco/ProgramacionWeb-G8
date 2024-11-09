// Deshabilitamos la edición de items del carrito
cartItemListElement.classList.add("js--disabled");

// Inicializamos data del formulario
const totalLabelElement = document.querySelector(
  ".payment-section__total-price"
);

function updateTotalLabelElement(price) {
  totalLabelElement.textContent = `$${price}.-`;
}

function initPaymentMethodForm() {
  const totalPrice = getCartTotalPrice();
  if (totalPrice == 0) {
    queueMessage({
      message: "No hay nada en el carrito para pagar",
      severity: "warn",
    });
    location.href = "/";
  } else {
    updateTotalLabelElement(totalPrice);
  }
}

initPaymentMethodForm();

// Agregamos gift codes disponibles al select
const giftCodeSelectElement = document.querySelector("#giftCode");

function renderUserGiftCodes() {
  const userGiftCodes = getLoggedUserGiftCodes();
  userGiftCodes.forEach((giftCode) => {
    const optionElement = document.createElement("option");
    optionElement.value = giftCode.code;
    optionElement.textContent = `${giftCode.code} - $${giftCode.amount}`;
    giftCodeSelectElement.appendChild(optionElement);
  });
}

giftCodeSelectElement.addEventListener("input", () => {
  const code = giftCodeSelectElement.value;
  let giftCodeAmount = 0;
  if (code) {
    const giftCode = getLoggedUserGiftCodeByCode(giftCodeSelectElement.value);
    giftCodeAmount = giftCode.amount;
  }
  let totalPrice =
    Math.round((getCartTotalPrice() - giftCodeAmount) * 100) / 100;
  if (totalPrice <= 0) {
    addUIMessage({
      message: "El descuento es mayor al precio total",
      severity: "error",
    });
    totalPrice = getCartTotalPrice();
    giftCodeSelectElement.value = "";
  }
  updateTotalLabelElement(totalPrice);
});

renderUserGiftCodes();

// Manejamos el submit del formulario
const paymentMethodForm = document.querySelector(".payment-form");

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
    return generateNonRepeatedUserGiftCode(username);
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

function removeLoggedUserGiftCode(code) {
  const loggedUser = getLoggedUser();
  if (loggedUser) {
    const giftCodes = getUserGiftCodes(loggedUser.username);
    const updatedGiftCodes = giftCodes.filter(
      (giftCode) => giftCode.code !== code
    );
    loggedUser.giftCodes = updatedGiftCodes;
    updateLoggedUser(loggedUser);
  }
}

function sendGiftCard(username, amount) {
  const giftCode = generateNonRepeatedUserGiftCode(username);
  const gift = {
    code: giftCode,
    amount,
  };
  addUserGiftCode(username, gift);
}

function sendGiftCards(giftCardCartItems) {
  giftCardCartItems.forEach((giftCardCartItem) => {
    sendGiftCard(giftCardCartItem.receiver.email, giftCardCartItem.total);
  });
}

// Validar form
const nameMsgElement = document.querySelector("#name ~ .input-status-msg");
const cardNumberMsgElement = document.querySelector(
  "#cardNumber ~ .input-status-msg"
);
const expiryDateMsgElement = document.querySelector(
  "#expiryDate ~ .input-status-msg"
);
const cvvMsgElement = document.querySelector("#cvv ~ .input-status-msg");

const regexCardNumber = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
const regexExpiryDateNumberFormat = /^\d{2}\/\d{2}$/;
const regexExpiryDateValidFormat = /^(0[1-9]|1[0-2])\/\d{2}$/;
const regexCvv = /^\d{3}$/;

function validatePaymentMethodForm(fieldValues) {
  const { name, cardNumber, expiryDate, cvv } = fieldValues;
  let result = true;
  if (!name) {
    result = false;
    nameMsgElement.classList.add("js--visible");
  } else {
    nameMsgElement.classList.remove("js--visible");
  }
  if (!cardNumber) {
    result = false;
    cardNumberMsgElement.classList.add("js--visible");
    cardNumberMsgElement.textContent = "Este campo es requerido";
  } else if (!regexCardNumber.test(cardNumber)) {
    result = false;
    cardNumberMsgElement.classList.add("js--visible");
    cardNumberMsgElement.textContent =
      "Utilice el formato de 16 números XXXX XXXX XXXX XXXX, respetando espacios en blanco";
  } else {
    cardNumberMsgElement.classList.remove("js--visible");
    cardNumberMsgElement.textContent = "";
  }
  if (!expiryDate) {
    result = false;
    expiryDateMsgElement.classList.add("js--visible");
    expiryDateMsgElement.textContent = "Este campo es requerido";
  } else if (!regexExpiryDateNumberFormat.test(expiryDate)) {
    result = false;
    expiryDateMsgElement.classList.add("js--visible");
    expiryDateMsgElement.textContent = "Respete el formato de MM/AA";
  } else if (!regexExpiryDateValidFormat.test(expiryDate)) {
    result = false;
    expiryDateMsgElement.classList.add("js--visible");
    expiryDateMsgElement.textContent = "Ingrese una fecha válida";
  } else {
    expiryDateMsgElement.classList.remove("js--visible");
    expiryDateMsgElement.textContent = "";
  }
  if (!cvv) {
    result = false;
    cvvMsgElement.classList.add("js--visible");
    cvvMsgElement.textContent = "Este campo es requerido";
  } else if (!regexCvv.test(cvv)) {
    result = false;
    cvvMsgElement.classList.add("js--visible");
    cvvMsgElement.textContent = "Respete el formato de 3 números XXX";
  } else {
    cvvMsgElement.classList.remove("js--visible");
    cvvMsgElement.textContent = "";
  }
  return result;
}

paymentMethodForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  const {
    name: { value: name },
    cardNumber: { value: cardNumber },
    expiryDate: { value: expiryDate },
    cvv: { value: cvv },
  } = submitEvent.target;
  const valid = validatePaymentMethodForm({
    name,
    cardNumber,
    expiryDate,
    cvv,
  });
  if (valid) {
    const cartItems = getLoggedUserCartItems();
    const giftCardCartItems = cartItems.filter(
      (cartItem) => cartItem.type === "gift"
    );
    sendGiftCards(giftCardCartItems);
    updateLoggedUserCartItems([]);
    const usedGiftCode = giftCodeSelectElement.value;
    if (usedGiftCode) {
      removeLoggedUserGiftCode(usedGiftCode);
    }
    queueMessage({
      message: "Pago ejecutado con éxito",
      severity: "success",
    });
    paymentMethodForm.submit();
  } else {
    addUIMessage({
      message: "Verifique los campos del formulario",
      severity: "error",
    });
  }
});
