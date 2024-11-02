// Deberiamos tomar esto del localStorage directo
const carouselItems = [
  {
    courseId: 1,
    courseName: "Data Warehouse",
    shortDescription:
      "Transforma datos en decisiones clave. Aprende a gestionar y optimizar la información de tu empresa",
    image: "carousel-data-warehouse.svg",
  },
  {
    courseId: 2,
    courseName: "Angular avanzado",
    shortDescription:
      "Lleva tus habilidades al siguiente nivel: profundiza en arquitecturas avanzadas, optimización de rendimiento y desarrollo de aplicaciones complejas",
    image: "carousel-angular-avanzado.svg",
  },
  {
    courseId: 3,
    courseName: "Data Science",
    shortDescription:
      "Aprende a extraer insights valiosos y tomar decisiones basadas en datos. Domina Python, análisis estadístico y machine learning",
    image: "carousel-data-science.svg",
  },
];

const carouselElement = document.querySelector(".carousel");
const carouselSlideImage = document.querySelector(".carousel__slide-image");
const carouselSlideDescriptionTitle = document.querySelector(
  ".slide-content-box__description-title"
);
const carouselSlideDescriptionContent = document.querySelector(
  ".slide-content-box__description-content"
);
const carouselSlideDescriptionDetailButton = document.querySelector(
  ".slide-content-box__course-detail-button"
);
const carouselSlideLeftArrow = document.querySelector("#leftCarouselArrow");
const carouselSlideRightArrow = document.querySelector("#rightCarouselArrow");
const carouselSlideImageSteps = document.querySelector(
  ".carousel__slide-image-steps"
);

let displayedItemIndex;
let displayedCourse;

let slideInterval = null;

function generateCarouselStepElement(index) {
  const carouselStep = document.createElement("div");
  carouselStep.classList.add(
    "carousel__slide-image-step",
    `js--slide-image-step-${index}`
  );
  carouselStep.addEventListener("click", () => {
    displayedItemIndex = index;
    setNewSlide(carouselItems[index], true);
  });
  return carouselStep;
}

function addCarouselSteps() {
  for (let index = 0; index < carouselItems.length; index++) {
    const carouselStepElement = generateCarouselStepElement(index);
    carouselSlideImageSteps.appendChild(carouselStepElement);
  }
}

function getPreviousCarouselItem() {
  displayedItemIndex -= 1;
  if (displayedItemIndex < 0) {
    displayedItemIndex = carouselItems.length - 1;
  }
  return carouselItems[displayedItemIndex];
}

function getNextCarouselItem() {
  displayedItemIndex += 1;
  if (carouselItems.length == displayedItemIndex) {
    displayedItemIndex = 0;
  }
  return carouselItems[displayedItemIndex];
}

function updateActiveCarouselStep() {
  const carouselStepElements = document.querySelectorAll(
    ".carousel__slide-image-step"
  );
  carouselStepElements.forEach((carouselStepElement, stepIndex) => {
    if (stepIndex === displayedItemIndex) {
      carouselStepElement.classList.add("js--active");
    } else {
      carouselStepElement.classList.remove("js--active");
    }
  });
}

function setNewSlide(courseItem, resetInterval = false) {
  if (resetInterval) {
    clearInterval(slideInterval);
    initSlideInterval();
  }
  const { courseId, courseName, shortDescription, image } = courseItem;
  carouselSlideImage.src = `./images/${image}`;
  carouselSlideDescriptionTitle.textContent = courseName;
  carouselSlideDescriptionContent.textContent = shortDescription;
  carouselSlideDescriptionDetailButton.href = `/pages/course-detail-online.html?courseId=${courseId}`;
  updateActiveCarouselStep();
}

function initCarousel() {
  displayedItemIndex = 0;
  setNewSlide(carouselItems[displayedItemIndex]);
}

function initSlideInterval(duration = 3000) {
  slideInterval = setInterval(() => {
    setNewSlide(getNextCarouselItem());
  }, duration);
}

function addCarouselArrowListeners() {
  carouselSlideLeftArrow.addEventListener("click", () => {
    setNewSlide(getPreviousCarouselItem(), true);
  });

  carouselSlideRightArrow.addEventListener("click", () => {
    setNewSlide(getNextCarouselItem(), true);
  });
}

// Primero agregamos cada step, para poder usarlos en las funciones siguientes
addCarouselSteps();
initCarousel();
initSlideInterval();
addCarouselArrowListeners();
