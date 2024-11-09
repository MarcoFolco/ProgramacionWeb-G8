const titleElement = document.querySelector(
  ".course-presentation__content-title"
);
const categoryElement = document.querySelector(
  ".course-presentation__content-category"
);
const priceElement = document.querySelector(
  ".course-presentation__content-price"
);
const durationElement = document.querySelector(
  ".course-presentation__content-duration"
);
const descriptionElement = document.querySelector(
  ".course-presentation__content-description"
);
const modalityElement = document.querySelector(
  ".course-presentation__content-modality"
);
const buyButtonElement = document.querySelector(
  ".course-presentation__buy-btn"
);
const bannerElement = document.querySelector(".course-presentation__banner");
const courseContentsSectionElement = document.querySelector(".course-contents");
const courseTeacherAvatarElement = document.querySelector(
  ".teacher-info__avatar"
);
const courseTeacherFullNameElement = document.querySelector(
  ".teacher-data__full-name"
);
const courseTeacherDescriptionElement = document.querySelector(
  ".teacher-data__description"
);
const courseSliderElement = document.querySelector(".cards.course-slider");

function generateCourseContentDetailsInnerHTML(content) {
  let innerHTML = "";
  innerHTML += `<summary class="summary">${content.title}</summary><article class="details__content">`;
  innerHTML += content.sections.reduce((sectionHTML, section) => {
    sectionHTML += `<p class="course-item text text--sm">
              <i class="${section.icon} text text--lg"></i>
              <span
                class="text course-item__title text--sm"
                title="${section.title}"
                >${section.title}</span
              >
              <i class="fa-regular fa-clock course-item__clock-icon"></i>
              ${section.duration}min
              <input class="item-checkbox" type="checkbox" />
            </p>`;
    return sectionHTML;
  }, "");
  innerHTML += "</article>";
  return innerHTML;
}

function fillCourseContents(course) {
  const contents = course.contents;
  contents.forEach((content) => {
    const detailsElement = document.createElement("details");
    detailsElement.classList.add("details");
    const detailsInnerHTML = generateCourseContentDetailsInnerHTML(content);
    detailsElement.innerHTML = detailsInnerHTML;
    courseContentsSectionElement.appendChild(detailsElement);
  });
}

const modalElement = document.querySelector("#modal");
const modalCourseTitleElement = document.querySelector(
  ".modal-success__course-title"
);
const modalCourseValueElement = document.querySelector(
  ".modal-success__course-value"
);
const modalCourseDedicationTimeElement = document.querySelector(
  ".modal-success__course-dedication-time"
);
const modalCloseBtnElement = document.querySelector(
  ".modal__footer-btn-cancel"
);

modalCloseBtnElement.addEventListener("click", () => modalElement.close());

function fillCourseData(course) {
  const { name, modality, price, duration, description, image, category } =
    course;
  titleElement.textContent = name;
  categoryElement.textContent = `Categoría: ${category}`;
  priceElement.textContent = `Valor: $${price} USD.`;
  descriptionElement.textContent = `Descripción del curso: ${description}`;
  modalityElement.innerHTML = `Modalidad: ${generateModalityTagHTML(modality)}`;
  durationElement.textContent = `Tiempo de dedicación necesario: ${duration} horas.`;
  buyButtonElement.textContent =
    modality === "online" ? "Comprar" : "Inscribirse";
  if (modality === "presencial") {
    buyButtonElement.href = `./course-enterprise-inscription.html?id=${course.id}`;
    buyButtonElement.classList.add("js--subscribe-btn");
  } else {
    addBuyBtnElementsLoggedInListener([buyButtonElement]);
    buyButtonElement.addEventListener("click", () => {
      const result = addOnlineCourseToCart(course, false);
      // Mostrar el modal aca
      if (result) {
        modalCourseTitleElement.innerHTML = `Usted ha agregado al carrito el curso de <b>${course.name}</b>`;
        modalCourseValueElement.innerHTML = `<b>Valor:</b> $${course.price}.- USD`;
        modalCourseDedicationTimeElement.innerHTML = `<b>Tiempo de dedicacion requerido:</b> ${course.duration} horas.`;
        modalElement.showModal();
      }
    });
  }
  bannerElement.src = `../images/${image}`;
}

function fillCourseTeacherData(course) {
  courseTeacherAvatarElement.src = `../images/${course.teacher.avatar}`;
  courseTeacherFullNameElement.textContent = course.teacher.fullName;
  courseTeacherDescriptionElement.textContent = course.teacher.description;
}

function generateRelatedCourseCards(course) {
  const randomRelatedCourses = generateRandomCoursesOfCategoryArray(
    3,
    course.category,
    [course.id]
  );
  randomRelatedCourses.forEach((relatedCourse) => {
    courseSliderElement.innerHTML += generateCourseCardHTML(
      relatedCourse,
      true
    );
  });
}

function fillCourseDetailPage() {
  const courseId = getCourseIdFromURL();
  if (courseId) {
    const course = getCourseById(courseId);
    if (course) {
      fillCourseData(course);
      fillCourseContents(course);
      fillCourseTeacherData(course);
      generateRelatedCourseCards(course);
    } else {
      queueMessage({
        message: "No existe un curso con ese ID",
        severity: "error",
      });
      location.href = "/";
    }
  } else {
    queueMessage({
      message: "No se indicó un ID para buscar",
      severity: "error",
    });
    location.href = "/";
  }
}

fillCourseDetailPage();

// Agregamos una condición de logged only para todos los botones de Comprar e Inscribirte, en cualquier página
applyLogOnlyConditionToAllBuyOrSubscribeBtns();
applyAddToCartBehaviorToAllBuyBtns();
