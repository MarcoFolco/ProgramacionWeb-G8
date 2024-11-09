// Tomamos los meets que hay en el HTMl, y les agregamos cursos. Serán siempre los primeros 3 de la lista.
const calendarEventElements = document.querySelectorAll(
  ".calendar-container__cell-meet"
);

const mainElement = document.querySelector("main.page-container");

function positionPopup(popupElement, eventElement) {
  const eventViewportPosition = eventElement.getBoundingClientRect();
  popupElement.style.left = `${eventViewportPosition.left}px`;
  popupElement.style.top = `${eventViewportPosition.bottom + window.scrollY}px`;
}

function generateCalendarPopupHTML(eventElement, course) {
  const popupElement = document.createElement("div");
  popupElement.classList.add("calendar-container__cell-meet-popup");
  positionPopup(popupElement, eventElement);
  window.addEventListener("resize", () =>
    positionPopup(popupElement, eventElement)
  );
  const closeBtn = document.createElement("i");
  closeBtn.classList.add(
    "fa-solid",
    "fa-times",
    "btn",
    "btn--icon",
    "calendar-container__cell-meet-popup__close-btn"
  );
  popupElement.appendChild(closeBtn);
  closeBtn.addEventListener("click", () => {
    console.log("xd");
  });
  popupElement.innerHTML += generateCourseCardHTML(course, true, true);
  mainElement.appendChild(popupElement);
  return popupElement;
}

function populateCalendarEvents() {
  const courses = getCourses();
  const numberOfEvents = calendarEventElements.length;
  const numberOfCourses = courses.length;
  const numberOfEventsToRender =
    numberOfEvents < numberOfCourses ? numberOfEvents : numberOfCourses;
  for (let index = 0; index < numberOfEventsToRender; index++) {
    const eventElement = calendarEventElements[index];
    const course = courses[index];

    eventElement.textContent = course.name;
    eventElement.title = course.name;

    let eventPopup = null;

    eventElement.addEventListener("click", () => {
      if (!eventPopup) {
        eventPopup = generateCalendarPopupHTML(eventElement, course);
        if (course.modality === "online") {
          const buyBtnElement = eventPopup.querySelector(".js--buy-btn");
          addBuyBtnElementsLoggedInListener([buyBtnElement]);
          addBuyBtnElementsAddToCartListener([buyBtnElement]);
        } else {
          const subscribeBtnElement =
            eventPopup.querySelector(".js--subscribe-btn");
          addSubscribeBtnElementsLoggedInListener([subscribeBtnElement]);
        }
      } else {
        eventPopup.parentNode.removeChild(eventPopup);
        eventPopup = null;
      }
    });
  }
}

populateCalendarEvents();
