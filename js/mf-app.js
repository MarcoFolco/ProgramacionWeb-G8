function getCourses() {
  return JSON.parse(localStorage.getItem("courses") || "[]");
}

function getCourseById(courseId) {
  const courses = getCourses();
  return courses.find((course) => course.id == courseId);
}

function getCoursesByCategory(category) {
  const courses = getCourses();
  return courses.filter((course) => course.category == category);
}

function generateModalityTagHTML(modality) {
  return `<span class="tag tag--${
    modality === "presencial" ? "presential" : "online"
  } course-mode heading heading--md"
                >${modality.charAt(0).toUpperCase() + modality.slice(1)}</span
              >`;
}

function generateCourseCardHTML(
  course,
  fromPage = false,
  includeShortDescription = false
) {
  return `<article class="card card--course">
            <div class="card__img-container">
              <img
                src="${fromPage ? ".." : "."}/images/${course.image}"
                alt="Una imagen representativa del curso."
                class="img"
              />
              <span class="tag course-price">$${course.price}.-</span>
              ${generateModalityTagHTML(course.modality)}
            </div>
            <div class="card__content course-content">
              <p class="heading heading--xl">
                <strong>${
                  course.duration
                }</strong> <small class="text--md">hs</small>
              </p>
              <div class="course-content__details">
                <h2 class="heading heading--md" title="${course.name}">${
    course.name
  }</h2>
                ${
                  includeShortDescription
                    ? `<small class="text text--sm">${course.shortDescription}</small>`
                    : ""
                }
                <a
                  class="btn btn--ghost btn--sm"
                  href=".${fromPage ? "" : "/pages"}/course-detail.html?id=${
    course.id
  }"
                  >Ver Detalle</a
                >
                <a
                  ${
                    course.modality == "presencial"
                      ? `href=".${
                          fromPage ? "" : "/pages"
                        }/course-enterprise-inscription.html?id=${course.id}"`
                      : ""
                  }
                  class="btn btn--primary btn--md js--${
                    course.modality === "online" ? "buy" : "subscribe"
                  }-btn" data-course-id="${course.id}"
                  >${
                    course.modality === "online" ? "Comprar" : "Inscribirte"
                  }</a
                >
              </div>
            </div>
          </article>`;
}

// Tomamos N cursos random del listado
function generateRandomCoursesArray(amountOfCourses) {
  const randomCourses = [];
  const courses = getCourses();
  while (amountOfCourses) {
    const courseIndex = Math.floor(Math.random() * courses.length);
    const [course] = courses.splice(courseIndex, 1);
    randomCourses.push(course);
    amountOfCourses--;
  }
  return randomCourses;
}

// Tomamos N cursos random del listado
function generateRandomCoursesOfCategoryArray(
  amountOfCourses,
  category,
  ignoreIds = []
) {
  const randomCourses = [];
  const courses = getCourses();
  const categoryCourses = courses.filter(
    (course) => course.category == category && !ignoreIds.includes(course.id)
  );
  while (amountOfCourses) {
    const courseIndex = Math.floor(Math.random() * categoryCourses.length);
    const [course] = categoryCourses.splice(courseIndex, 1);
    randomCourses.push(course);
    amountOfCourses--;
  }
  return randomCourses;
}

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

function getLoggedUserGiftCodes() {
  const loggedUser = getLoggedUser();
  if (loggedUser) {
    return getUserGiftCodes(loggedUser.username);
  }
  return [];
}

function getLoggedUserGiftCodeByCode(code) {
  const userGiftCodes = getLoggedUserGiftCodes();
  return userGiftCodes.find((giftCode) => giftCode.code === code);
}

function setUsers(usersArray) {
  if (!Array.isArray(usersArray)) {
    return false;
  }
  try {
    localStorage.setItem("users", JSON.stringify(usersArray));
    return true;
  } catch (error) {
    error(error);
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
function addUIMessage(messageData, permanent = false) {
  const { message, severity } = messageData;
  const messageElement = document.createElement("article");
  messageElement.classList.add(
    "ui-message",
    `ui-message--${severity}`,
    ...(permanent ? ["ui-message--permanent"] : ["ui-message--temporal"])
  );
  messageElement.innerHTML = `<p class="ui-message--text text text--lg text--primary">${message}</p>${
    permanent
      ? "<i class='fa-solid fa-times text text--lg text--primary ui-message__close-btn btn btn--icon btn--paddingless'></i>"
      : ""
  }`;
  if (permanent) {
    const closeBtnElement = messageElement.querySelector(
      ".ui-message__close-btn"
    );
    closeBtnElement.addEventListener("click", () => {
      messagesElement.removeChild(messageElement);
    });
  }
  messagesElement.appendChild(messageElement);
  if (!permanent) {
    setTimeout(() => {
      messagesElement.removeChild(messageElement);
    }, 5000);
  }
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
  "/pages/add-payment-method.html",
  "/pages/course-enterprise-inscription.html",
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

// Add search functionality
const searchButtonElement = document.querySelector(".header__search-button");
const searchCloseButtonElement = document.querySelector(
  ".header__search-bar-close-btn"
);
const searchBarElement = document.querySelector(".header__search-bar-form");
const searchBarDropdownElement = document.querySelector(
  ".header__search-dropdown"
);
const searchBarInput = document.querySelector(".header__search-bar-input");
const searchBarDropdownListElement = document.querySelector(
  ".header__search-dropdown-list"
);

searchButtonElement.addEventListener("click", () => {
  searchBarElement.classList.add("js--visible");
  searchBarInput.focus();
});

searchCloseButtonElement.addEventListener("click", () => {
  searchBarElement.classList.remove("js--visible");
  searchBarDropdownElement.classList.remove("js--visible");
  searchBarInput.value = "";
});

function generateSearchDropdownItemsHTML(courses, fromPage = false) {
  let resultHTML = courses.reduce((innerHTML, course) => {
    innerHTML += `<li class="header__search-dropdown-item">
            <a href=".${fromPage ? "" : "/pages"}/course-detail.html?id=${
      course.id
    }" class="btn btn--sm btn--secondary heading heading--md header__search-dropdown-item__course-link"
              ><span class="header__search-dropdown-item__course-title" title="${
                course.name
              }">${course.name}</span></a
            >
          </li>`;
    return innerHTML;
  }, "");
  return resultHTML;
}

function renderSearchResults(courses) {
  const url = new URL(location.href);
  const fromPage = url.pathname.includes("pages");
  if (courses.length > 0) {
    const itemsHTML = generateSearchDropdownItemsHTML(courses, fromPage);
    searchBarDropdownListElement.innerHTML = itemsHTML;
  } else {
    searchBarDropdownListElement.innerHTML = `<p class="heading heading--md">No se encontraron resultados...</p>`;
  }
}

searchBarInput.addEventListener("input", () => {
  const searchValue = searchBarInput.value;
  if (searchValue) {
    searchBarDropdownElement.classList.add("js--visible");
    const allCourses = getCourses();
    const filteredCourses = allCourses.filter((course) =>
      course.name.toUpperCase().includes(searchValue.toUpperCase())
    );
    renderSearchResults(filteredCourses);
  } else {
    searchBarDropdownElement.classList.remove("js--visible");
  }
});

// Funcionalidad genérica de cursos
function getCourseIdFromURL() {
  const url = new URL(location.href);
  const courseId = url.searchParams.get("id");
  if (courseId) {
    return courseId;
  } else {
    queueMessage({
      message: "No se indicó un ID de curso",
      severity: "error",
    });
    location.href = "/";
  }
}

function getCourseFromURL() {
  const courseId = getCourseIdFromURL();
  if (courseId) {
    const course = getCourseById(courseId);
    if (course) {
      return course;
    } else {
      queueMessage({
        message: "No existe un curso con el ID indicado",
        severity: "error",
      });
      location.href = "/";
    }
  }
  return null;
}

// Cart functionalities
const cartButtonElement = document.querySelector(
  ".header__cart-button-container .fa-cart-shopping"
);
const cartButtonItemCounterElement = document.querySelector(
  ".header__cart-button-container .cart-button__badge"
);
const cartSidebarElement = document.querySelector(".cart-sidebar");
const cartSidebarCloseBtnElement = document.querySelector(
  ".cart-sidebar__close-btn"
);

cartButtonElement.addEventListener("click", () => {
  if (!userIsLoggedIn()) {
    queueMessage({
      message: "Necesitas iniciar sesión primero para ver el carrito",
      severity: "warn",
    });
    location.href = "/pages/login.html";
  } else {
    cartSidebarElement.classList.add("js--visible");
  }
});

cartSidebarCloseBtnElement.addEventListener("click", () => {
  cartSidebarElement.classList.remove("js--visible");
});

function setCartItemCounterBadge(numberOfItems) {
  cartButtonItemCounterElement.textContent = numberOfItems;
  if (numberOfItems > 0) {
    cartButtonItemCounterElement.classList.add("js--visible");
  } else {
    cartButtonItemCounterElement.classList.remove("js--visible");
  }
}

function getLoggedUserCartItems() {
  const loggedUser = getLoggedUser();
  if (loggedUser) {
    return loggedUser.cartItems || [];
  }
  return [];
}

function updateCartButtonBadge() {
  if (userIsLoggedIn()) {
    const cartItems = getLoggedUserCartItems();
    setCartItemCounterBadge(cartItems.length);
  }
}

updateCartButtonBadge();

// Renderizar items en el cart
const cartItemListElement = document.querySelector(".cart-sidebar__item-list");

function updateLoggedUserCartItem(cartItem, index) {
  const loggedUser = getLoggedUser();
  if (loggedUser) {
    const cartItems = loggedUser.cartItems;
    cartItems[index] = cartItem;
    updateLoggedUser(loggedUser);
  }
  renderCartItems();
}

function updateLoggedUserCartItems(cartItems) {
  const loggedUser = getLoggedUser();
  if (loggedUser) {
    loggedUser.cartItems = cartItems;
    updateLoggedUser(loggedUser);
  }
  renderCartItems();
}

function removeLoggedUserCartItem(index) {
  const loggedUser = getLoggedUser();
  if (loggedUser) {
    const cartItems = loggedUser.cartItems;
    cartItems.splice(index, 1);
    updateLoggedUser(loggedUser);
  }
  renderCartItems();
}

// Esto solo aplica para cursos online

function addCartItemQuantity(cartItem, index) {
  cartItem.quantity++;
  cartItem.total = cartItem.quantity * cartItem.course.price;
  updateLoggedUserCartItem(cartItem, index);
  addUIMessage({
    message: "Item actualizado exitosamente",
    severity: "success",
  });
}

// Esto solo aplica para cursos online

function substractCartItemQuantity(cartItem, index) {
  cartItem.quantity--;
  if (cartItem.quantity > 0) {
    cartItem.total = cartItem.quantity * cartItem.course.price;
    updateLoggedUserCartItem(cartItem, index);
  } else {
    removeLoggedUserCartItem(index);
  }
  addUIMessage({
    message: "Item actualizado exitosamente",
    severity: "success",
  });
}

function addRemoveCartItemListener(removeBtnElement, itemIndex) {
  removeBtnElement.addEventListener("click", () => {
    removeLoggedUserCartItem(itemIndex);
  });
}

function generateOnlineCourseCartItem(cartItem, index) {
  const onlineCourse = cartItem.course;
  const liElement = document.createElement("li");
  liElement.classList.add("card");
  liElement.dataset.index = index;
  liElement.innerHTML = `<div class="cart-sidebar__item">
              <i
                class="fa-solid fa-book-open text tex--secondary cart-sidebar__item-icon" title="Curso Online"
              ></i>
              <p class="cart-sidebar__item-main-content">
                <span class="heading heading--sm">${onlineCourse.name}</span>
                <small class="text text--sm">Cantidad: ${
                  cartItem.quantity
                }  <i class="fa-solid fa-plus btn btn--icon btn--paddingless cart-sidebar__item-add"></i>  <i class="fa-solid fa-minus btn btn--icon btn--paddingless cart-sidebar__item-substract"></i></small>
              </p>
              <p class="tag cart-sidebar__item-price">$${
                Math.round(cartItem.total * 100) / 100
              }.-</p>
              <i class="fa-solid fa-times cart-sidebar__item-remove btn btn--icon btn--paddingless"></i>
            </div>`;
  const addBtn = liElement.querySelector(".cart-sidebar__item-add");
  const substractBtn = liElement.querySelector(".cart-sidebar__item-substract");
  addBtn.addEventListener("click", () => {
    addCartItemQuantity(cartItem, index);
  });
  substractBtn.addEventListener("click", () => {
    substractCartItemQuantity(cartItem, index);
  });
  addRemoveCartItemListener(
    liElement.querySelector(".cart-sidebar__item-remove"),
    index
  );
  return liElement;
}

function generateParticipantCardHTML(participant) {
  return `<li class="card cart-sidebar__item-participant">
                <p class="cart-sidebar__item-participant-data text text--sm">
                  <i class="fa-solid fa-user text text--sm"></i> ${participant.fullName}
                </p>
                <p class="cart-sidebar__item-participant-data text text--sm">
                  <i class="fa-solid fa-envelope"></i> ${participant.email}
                </p>
                <p class="cart-sidebar__item-participant-data text text--sm">
                  <i class="fa-solid fa-phone"></i> ${participant.phone}
                </p>
                <p class="cart-sidebar__item-participant-data text text--sm">
                  <i class="fa-solid fa-address-card"></i> ${participant.dni}
                </p>
              </li>`;
}

function generatePresentialCourseCartItem(cartItem, index) {
  const presentialCourse = cartItem.course;
  const liElement = document.createElement("li");
  liElement.classList.add("card");
  liElement.dataset.index = index;
  liElement.innerHTML = `<div class="cart-sidebar__item">
              <i
                class="fa-solid fa-users text tex--secondary cart-sidebar__item-icon"  title="Curso Presencial"
              ></i>
              <p class="cart-sidebar__item-main-content">
                <span class="heading heading--sm">${
                  presentialCourse.name
                }</span>
                <span class="text text--sm">Participantes: ${
                  cartItem.participants.length
                }</span>
              </p>
              <p class="tag cart-sidebar__item-price">$${
                Math.round(cartItem.total * 100) / 100
              }.-</p>
              <i
                class="fa-solid fa-eye cart-sidebar__item-display-participants-btn btn btn--icon btn--paddingless"
              ></i>
              <i class="fa-solid fa-times cart-sidebar__item-remove btn btn--icon btn--paddingless"></i>
            </div>
            <ul class="cart-sidebar__item-participants">
              ${cartItem.participants.reduce(
                (participantsHTML, participant) => {
                  return (
                    participantsHTML + generateParticipantCardHTML(participant)
                  );
                },
                ""
              )}
            </ul>`;
  const eyeBtnElement = liElement.querySelector(
    ".cart-sidebar__item-display-participants-btn"
  );
  const participantsListElement = liElement.querySelector(
    ".cart-sidebar__item-participants"
  );
  eyeBtnElement.addEventListener("click", () => {
    participantsListElement.classList.toggle("js--visible");
    if (participantsListElement.classList.contains("js--visible")) {
      eyeBtnElement.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      eyeBtnElement.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
  addRemoveCartItemListener(
    liElement.querySelector(".cart-sidebar__item-remove"),
    index
  );
  return liElement;
}

function generateGiftCardCartItem(cartItem, index) {
  const { name, email } = cartItem.receiver;
  const liElement = document.createElement("li");
  liElement.classList.add("card");
  liElement.dataset.index = index;
  liElement.innerHTML = `<div class="cart-sidebar__item">
              <i
                class="fa-solid fa-gift text tex--secondary cart-sidebar__item-icon" title="Gift Card"
              ></i>
              <p class="cart-sidebar__item-main-content">
                <span class="heading heading--sm">Gift card para "${name}"</span>
                <small class"text text--xs">Email: ${email}</small>
              </p>
              <p class="tag cart-sidebar__item-price">$${
                Math.round(cartItem.total * 100) / 100
              }.-</p>
              <i class="fa-solid fa-times cart-sidebar__item-remove btn btn--icon btn--paddingless"></i>
            </div>`;
  addRemoveCartItemListener(
    liElement.querySelector(".cart-sidebar__item-remove"),
    index
  );
  return liElement;
}

const cartTotalLabelElement = document.querySelector(
  ".cart-sidebar__footer-total"
);
const cartPayBtnElement = document.querySelector(
  ".cart-sidebar__footer-pay-btn"
);

function getCartTotalPrice() {
  const cartItems = getLoggedUserCartItems();
  const totalPrice = cartItems.reduce((total, cartItem) => {
    return (total += cartItem.total);
  }, 0);
  return Math.round(totalPrice * 100) / 100;
}

function renderCartItems() {
  updateCartButtonBadge();
  const cartItems = getLoggedUserCartItems();
  cartItemListElement.innerHTML = "";
  if (cartItems.length > 0) {
    cartItems.forEach((cartItem, index) => {
      let itemListElement;
      switch (cartItem.type) {
        case "buy":
          itemListElement = generateOnlineCourseCartItem(cartItem, index);
          break;
        case "gift":
          itemListElement = generateGiftCardCartItem(cartItem, index);
          break;
        case "subscription":
          itemListElement = generatePresentialCourseCartItem(cartItem, index);
          break;
      }
      cartItemListElement.appendChild(itemListElement);
    });
  } else {
    cartItemListElement.innerHTML = `<p class="heading heading--xl" style="text-align: center;">No hay items en el carrito...</p>`;
  }
  const totalPrice = getCartTotalPrice();
  cartTotalLabelElement.textContent = `Total: $${totalPrice}.-`;
  const url = new URL(location.href);
  const fromPage = url.pathname.includes("pages");
  cartPayBtnElement.href = `.${
    fromPage ? "" : "/pages"
  }/add-payment-method.html`;
  if (totalPrice > 0) {
    cartPayBtnElement.classList.add("js--visible");
  } else {
    cartPayBtnElement.classList.remove("js--visible");
  }
}

renderCartItems();

// Agregamos una función que puede ser usada desde cualquier JS para agregar una condición de log-only a todo botón de compra/inscribirse.
function addBuyBtnElementsLoggedInListener(buyButtonElements) {
  buyButtonElements.forEach((buyButton) => {
    buyButton.addEventListener("click", (event) => {
      if (!userIsLoggedIn()) {
        event.preventDefault();
        queueMessage({
          message: "Debes iniciar sesión primero para comprar un curso",
          severity: "warn",
        });
        location.href = "/pages/login.html";
      }
    });
  });
}

function addSubscribeBtnElementsLoggedInListener(subscribeButtonElements) {
  subscribeButtonElements.forEach((subscribeButton) => {
    subscribeButton.addEventListener("click", (event) => {
      if (!userIsLoggedIn()) {
        event.preventDefault();
        queueMessage({
          message: "Debes iniciar sesión primero para inscribirte a un curso",
          severity: "warn",
        });
        location.href = "/pages/login.html";
      }
    });
  });
}

function applyLogOnlyConditionToAllBuyOrSubscribeBtns() {
  const buyButtonElements = document.querySelectorAll(".js--buy-btn");
  const subscribeButtonElements =
    document.querySelectorAll(".js--subscribe-btn");

  addBuyBtnElementsLoggedInListener(buyButtonElements);

  addSubscribeBtnElementsLoggedInListener(subscribeButtonElements);
}

// Agregamos una función que puede ser usada desde cualquier JS para que el botón comprar de las cards agregue al carrito.

// Esta función puede ser usada en otros JS que permitan comprar cursos online, como el detalle de curso
function addLoggedUserCartItem(newCartItem) {
  const loggedUser = getLoggedUser();
  const cartItems = loggedUser.cartItems || [];
  cartItems.push(newCartItem);
  loggedUser.cartItems = cartItems;
  updateLoggedUser(loggedUser);
  addUIMessage({
    message: "Elemento agregado al carrito exitosamente",
    severity: "success",
  });
  renderCartItems();
}

function addOnlineCourseToCart(onlineCourse) {
  const loggedUser = getLoggedUser();
  if (loggedUser) {
    const cartItems = loggedUser.cartItems || [];
    const existingItem = cartItems.find(
      (item) => item.type === "buy" && item.course.id === onlineCourse.id
    );
    if (existingItem) {
      const existingItemIndex = cartItems.findIndex(
        (item) => item.type === "buy" && item.course.id === onlineCourse.id
      );
      addCartItemQuantity(existingItem, existingItemIndex);
    } else {
      const newCartItem = {
        type: "buy",
        course: onlineCourse,
        quantity: 1,
        total: onlineCourse.price,
      };
      addLoggedUserCartItem(newCartItem);
    }
  }
}

function addBuyBtnElementsAddToCartListener(buyButtonElements) {
  buyButtonElements.forEach((buyBtnElement) => {
    buyBtnElement.addEventListener("click", () => {
      const { courseId } = buyBtnElement.dataset;
      if (courseId === null || courseId === undefined) {
        addUIMessage({
          message: "Este curso no tiene un ID, no se puede agregar al carrito",
          severity: "error",
        });
      } else {
        const course = getCourseById(courseId);
        addOnlineCourseToCart(course);
      }
    });
  });
}

function applyAddToCartBehaviorToAllBuyBtns() {
  const buyButtonElements = document.querySelectorAll(".js--buy-btn");
  addBuyBtnElementsAddToCartListener(buyButtonElements);
}
