const inscriptionForm = document.querySelector(".course-inscription__form");
const inscriptionRowsContainer = document.querySelector(
  ".course-inscription__form-rows"
);
const addPersonButton = document.querySelector(".form__add-button");
let inscriptionNumber = 1;
// Esto lo podriamos tomar luego del curso que se haya elegido...
const courseValue = 20;
const priceTag = document.querySelector(".form__price-tag");

// Agregamos handler a boton de remover del fieldset en el HTML, y al de agregar persona

function calculateTotalPrice() {
  const fieldsets = document.querySelectorAll(".field-group");
  const numberOfParticipants = fieldsets.length;
  return courseValue * numberOfParticipants;
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

function addInitialHandlers() {
  addPersonButton.addEventListener("click", () => {
    addInscriptionFieldset();
  });
  const firstFieldset = document.querySelector(".field-group");
  const firstRemoveButton = document.querySelector(
    ".field-group__remove-button"
  );
  addRemoveButtonListener(firstRemoveButton, firstFieldset);
}

addInitialHandlers();
updatePriceTag();

function addInscriptionFieldset() {
  inscriptionNumber += 1;
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("field-group");
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
                pattern="^\d{1,2}\.\d{3}\.\d{3}$"
                required
              />
              <input
                type="tel"
                name="phone${inscriptionNumber}"
                id="phone${inscriptionNumber}"
                placeholder="Telefono, ej.  4030-2025"
                pattern="^\d{4}-?\d{4}$"
                required
              />
            </div>
            <button
              type="button"
              class="btn btn--primary btn--icon btn--icon-round btn--icon-xs field-group__remove-button"
            >
              <i class="fa-solid fa-minus text text--xl"></i>
            </button>
    `;
  fieldset.innerHTML = fieldsetInnerHTML;
  inscriptionRowsContainer.appendChild(fieldset);
  const removeButton = fieldset.querySelector(".field-group__remove-button");
  addRemoveButtonListener(removeButton, fieldset);
  updatePriceTag();
}

inscriptionForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  const totalPrice = calculateTotalPrice();
  // Aca va la logica para agregar al carrito, con el curso y el precio total
  queueMessage({
    message: "Inscripción completada con éxito",
    severity: "success",
  });
  window.location.href = "/";
});