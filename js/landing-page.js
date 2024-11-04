const carouselCourses = [];

// Tomamos 3 cursos random del listado
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
function pickcarouselCourses(amountOfCourses = 3) {
  const randomCourses = generateRandomCoursesArray(amountOfCourses);
  carouselCourses.push(...randomCourses);
}

pickcarouselCourses();

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
    setNewSlide(carouselCourses[index], true);
  });
  return carouselStep;
}

function addCarouselSteps() {
  for (let index = 0; index < carouselCourses.length; index++) {
    const carouselStepElement = generateCarouselStepElement(index);
    carouselSlideImageSteps.appendChild(carouselStepElement);
  }
}

function getPreviousCarouselItem() {
  displayedItemIndex -= 1;
  if (displayedItemIndex < 0) {
    displayedItemIndex = carouselCourses.length - 1;
  }
  return carouselCourses[displayedItemIndex];
}

function getNextCarouselItem() {
  displayedItemIndex += 1;
  if (carouselCourses.length == displayedItemIndex) {
    displayedItemIndex = 0;
  }
  return carouselCourses[displayedItemIndex];
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
  setNewSlide(carouselCourses[displayedItemIndex]);
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

// Generamos las cards de la landing
const highlightedCourses = [];

function pickHighlightedCourses(amountOfCourses = 6) {
  const randomCourses = generateRandomCoursesArray(amountOfCourses);
  highlightedCourses.push(...randomCourses);
}

function renderHighlightedCourses() {
  const coursesContainerElement = document.querySelector(
    ".highlighted-courses .course-slider"
  );
  highlightedCourses.forEach((course) => {
    coursesContainerElement.innerHTML += generateCourseCardHTML(course);
  });
}

pickHighlightedCourses();
renderHighlightedCourses();
