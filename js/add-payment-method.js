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

paymentMethodForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
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
});
