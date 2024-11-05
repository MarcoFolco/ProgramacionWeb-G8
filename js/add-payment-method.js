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
  queueMessage({
    message: "Pago ejecutado con éxito",
    severity: "success",
  });
  paymentMethodForm.submit();
});
