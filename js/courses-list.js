const courseListTitleElement = document.querySelector(".courses__title");
const coursesListElement = document.querySelector(".cards.course-slider");
const coursesSectionElement = document.querySelector(".section.courses");

function updateListTitle(category) {
  courseListTitleElement.textContent = `CURSOS DE "${category.toUpperCase()}"`;
}

function addNoCoursesMessage() {
  noCoursesElement = document.createElement("h1");
  noCoursesElement.classList.add("heading", "heading--xxl");
  noCoursesElement.textContent = "No hay cursos de esta categoría";
  coursesSectionElement.appendChild(noCoursesElement);
}

function loadCourseList() {
  const url = new URL(location.href);
  const category = url.searchParams.get("category");
  if (category) {
    console.log(category, typeof category);

    updateListTitle(category);
    const categoryCourses = getCoursesByCategory(category);
    if (categoryCourses.length > 0) {
      categoryCourses.forEach((course) => {
        coursesListElement.innerHTML += generateCourseCardHTML(course, true);
      });
    } else {
      addUIMessage({
        message: "No hay cursos en esta categoría",
        severity: "warn",
      });
      addNoCoursesMessage();
    }
  } else {
    queueMessage({
      message: "No se indicó una categoría a mostrar",
      severity: "error",
    });
    location.href = "/";
  }
}

loadCourseList();
