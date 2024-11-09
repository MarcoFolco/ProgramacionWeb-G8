const inscriptionForm = document.querySelector(".course-inscription__form");
const inscriptionRowsContainer = document.querySelector(
  ".course-inscription__form-rows"
);
const addPersonButton = document.querySelector(".form__add-button");
let inscriptionNumber = 1;
const priceTag = document.querySelector(".form__price-tag");

// Actualizamos titulo de la página
const titleElement = document.querySelector(
  ".course-inscription__course-title"
);

function updateInscriptionTitle() {
  const course = getCourseFromURL();
  titleElement.textContent = `INSCRIPCIÓN A "${course.name.toUpperCase()}"`;
}

updateInscriptionTitle();

// Agregamos handler a boton de remover del fieldset en el HTML, y al de agregar persona

function calculateTotalPrice() {
  const fieldsets = document.querySelectorAll(".field-group");
  const numberOfParticipants = fieldsets.length;
  const course = getCourseFromURL();
  if (course) {
    return Math.floor(course.price * numberOfParticipants * 100) / 100;
  }
  return 0;
}

function updatePriceTag() {
  const totalPrice = calculateTotalPrice();
  priceTag.textContent = `$${totalPrice}.-`;
}

function addRemoveButtonListener(removeButton, fieldsetElement) {
  removeButton.addEventListener("click", () => {
    const fieldsets = document.querySelectorAll(".field-group");
    if (fieldsets.length === 1) {
      inscriptionForm.reset();
    } else {
      inscriptionRowsContainer.removeChild(fieldsetElement);
    }
    updatePriceTag();
  });
}

const firstSubscriptionRow = document.querySelector(
  ".field-group.js--subscriber-1"
);
const firstRemoveButton = document.querySelector(
  ".field-group.js--subscriber-1 .field-group__remove-button"
);
const firstRowInputs = firstSubscriptionRow.querySelectorAll("input");

function addInscriptionFieldset() {
  inscriptionNumber += 1;
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("field-group", `js--subscriber-${inscriptionNumber}`);
  const fieldsetInnerHTML = `
    <div class="field-group__data">
              <input
                type="email"
                name="email${inscriptionNumber}"
                id="email${inscriptionNumber}"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="fullName${inscriptionNumber}"
                id="fullName${inscriptionNumber}"
                placeholder="Nombre y apellido"
                required
              />
              <input
                type="text"
                name="dni${inscriptionNumber}"
                id="dni${inscriptionNumber}"
                placeholder="DNI (con puntos)"
                pattern="^\\d{1,2}\\.\\d{3}\\.\\d{3}$"
                required
              />
              <input
                type="tel"
                name="phone${inscriptionNumber}"
                id="phone${inscriptionNumber}"
                placeholder="Telefono, ej.  4030-2025"
                pattern="^\\d{4}-?\\d{4}$"
                required
              />
            </div>
            <button
              type="button"
              class="btn btn--primary btn--icon btn--icon-round btn--icon-xs field-group__remove-button"
              title="Remover participante"
            >
              <i class="fa-solid fa-minus text text--xl"></i>
            </button>
    `;
  fieldset.innerHTML = fieldsetInnerHTML;
  firstSubscriptionRow.after(fieldset);
  const removeButton = fieldset.querySelector(".field-group__remove-button");
  addRemoveButtonListener(removeButton, fieldset);
  updatePriceTag();
}

function addInitialHandlers() {
  addPersonButton.addEventListener("click", () => {
    addInscriptionFieldset();
  });
  firstRemoveButton.addEventListener("click", () => {
    firstRowInputs.forEach((input) => (input.value = ""));
  });
}

addInitialHandlers();
updatePriceTag();

function generateSubscribersArray() {
  const subscribers = [];
  for (
    let subscriberIndex = 1;
    subscriberIndex <= inscriptionNumber;
    subscriberIndex++
  ) {
    const fieldsetElement = document.querySelector(
      `.js--subscriber-${subscriberIndex}`
    );
    if (fieldsetElement) {
      const email = document.querySelector(`#email${subscriberIndex}`).value;
      const fullName = document.querySelector(
        `#fullName${subscriberIndex}`
      ).value;
      const dni = document.querySelector(`#dni${subscriberIndex}`).value;
      const phone = document.querySelector(`#phone${subscriberIndex}`).value;
      subscribers.push({
        email,
        fullName,
        dni,
        phone,
      });
    }
  }
  return subscribers;
}

// Mostrar modal con data de la inscripción
const modalElement = document.querySelector("#modal");
const modalCourseTitleElement = document.querySelector(
  ".modal-success__course-title"
);
const modalCourseValueElement = document.querySelector(
  ".modal-success__course-value"
);
const modalParticipantsUlElement = document.querySelector(
  ".modal-inscription-summary__participants-list"
);
const modalAcceptBtnElement = document.querySelector(
  ".modal-inscription-summary__accept-btn"
);

modalAcceptBtnElement.addEventListener("click", () => {
  inscriptionForm.submit();
});

function displayInscriptionSummaryModal(course, participants, totalPrice) {
  modalCourseTitleElement.innerHTML = `Usted ha agregado al carrito la inscripción para el curso de "<b>${course.name}</b>"`;
  modalCourseValueElement.innerHTML = `<b>Valor total:</b> $${totalPrice}.- USD`;
  modalParticipantsUlElement.innerHTML = participants.reduce(
    (participantsHTML, participant) => {
      return participantsHTML + generateParticipantCardHTML(participant);
    },
    ""
  );
  modalElement.showModal();
}

inscriptionForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  const total = calculateTotalPrice();
  const participants = generateSubscribersArray(submitEvent.target);
  const course = getCourseFromURL();
  const cartItem = {
    course,
    total,
    participants,
    type: "subscription",
  };
  addLoggedUserCartItem(cartItem);
  displayInscriptionSummaryModal(course, participants, total);
});
