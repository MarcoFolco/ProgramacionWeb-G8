const titleElement = document.querySelector(
  ".course-presentation__content-title"
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

function fillCourseDetailPage() {
  const url = new URL(location.href);
  const courseId = url.searchParams.get("id");
  if (courseId) {
    const course = getCourseById(courseId);
    if (course) {
      const { name, modality, price, duration, description, image } = course;
      titleElement.textContent = name;
      priceElement.textContent = `Valor: $${price} USD.`;
      descriptionElement.textContent = `Descripción del curso: ${description}`;
      modalityElement.innerHTML = `Modalidad: ${generateModalityTagHTML(
        modality
      )}`;
      durationElement.textContent = `Tiempo de dedicación necesario: ${duration} horas.`;
      buyButtonElement.textContent =
        modality === "online" ? "Comprar" : "Inscribirse";
      bannerElement.src = `../images/${image}`;
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
