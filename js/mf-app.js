const courses = [
  // Cursos de Desarrollo Web
  {
    id: 1,
    name: "Desarrollo Web Full Stack",
    modality: "online",
    price: 199.99,
    duration: 270,
    description:
      "Aprende a crear aplicaciones web completas desde cero utilizando las tecnologías más demandadas del mercado. Domina HTML, CSS, JavaScript, React y Node.js para convertirte en un desarrollador web completo.",
    shortDescription: "Domina el desarrollo web frontend y backend",
    category: "Desarrollo Web",
    image: "fullstack-dev.svg",
    contents: [
      {
        title: "Fundamentos del Desarrollo Web",
        sections: [
          {
            title: "Introducción al Desarrollo Web",
            duration: 45,
            icon: "fa-regular fa-circle-play",
          },
          {
            title: "HTML5 y CSS3 Básico",
            duration: 60,
            icon: "fa-solid fa-code",
          },
        ],
      },
      {
        title: "JavaScript Moderno",
        sections: [
          {
            title: "Fundamentos de JavaScript",
            duration: 90,
            icon: "fa-brands fa-js",
          },
          {
            title: "ES6+ y características modernas",
            duration: 75,
            icon: "fa-solid fa-code",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Carlos Rodríguez",
      description:
        "Desarrollador Senior con más de 10 años de experiencia en desarrollo web. Especialista en JavaScript y arquitecturas modernas.",
      avatar: "male-teacher-profile-avatar.webp",
    },
  },
  {
    id: 2,
    name: "React.js Avanzado",
    modality: "presencial",
    price: 299.99,
    duration: 105,
    description:
      "Profundiza en React.js y aprende patrones avanzados de diseño, gestión de estado con Redux, y optimización de rendimiento. Ideal para desarrolladores que quieren llevar sus habilidades al siguiente nivel.",
    shortDescription: "Domina React.js y sus patrones avanzados",
    category: "Desarrollo Web",
    image: "react-advanced.svg",
    contents: [
      {
        title: "Fundamentos Avanzados",
        sections: [
          {
            title: "Hooks Personalizados",
            duration: 60,
            icon: "fa-solid fa-code",
          },
          {
            title: "Patrones de Renderizado",
            duration: 45,
            icon: "fa-solid fa-laptop-code",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Ana Martínez",
      description:
        "Desarrolladora Frontend especialista en React. Contribuidora activa en proyectos open source.",
      avatar: "female-teacher-profile-avatar.webp",
    },
  },
  {
    id: 3,
    name: "Node.js y Express",
    modality: "online",
    price: 149.99,
    duration: 105,
    description:
      "Aprende a construir APIs robustas y aplicaciones backend con Node.js y Express. Incluye autenticación, manejo de bases de datos y despliegue.",
    shortDescription: "Desarrollo backend con Node.js",
    category: "Desarrollo Web",
    image: "nodejs-express.svg",
    contents: [
      {
        title: "Introducción a Node.js",
        sections: [
          {
            title: "Fundamentos de Node.js",
            duration: 60,
            icon: "fa-brands fa-node",
          },
          {
            title: "Express.js Básico",
            duration: 45,
            icon: "fa-solid fa-server",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Miguel Ángel Torres",
      description:
        "Arquitecto de software especializado en aplicaciones Node.js a gran escala.",
      avatar: "male-teacher-profile-avatar.webp",
    },
  },
  {
    id: 4,
    name: "Vue.js desde Cero",
    modality: "presencial",
    price: 249.99,
    duration: 120,
    description:
      "Aprende Vue.js 3 desde los fundamentos hasta conceptos avanzados. Incluye Composition API, Vuex y Vue Router.",
    shortDescription: "Desarrollo frontend moderno con Vue.js",
    category: "Desarrollo Web",
    image: "vuejs.svg",
    contents: [
      {
        title: "Fundamentos de Vue",
        sections: [
          {
            title: "Introducción a Vue 3",
            duration: 50,
            icon: "fa-solid fa-play",
          },
          {
            title: "Composition API",
            duration: 70,
            icon: "fa-solid fa-code",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Laura Sánchez",
      description:
        "Desarrolladora Frontend y formadora especializada en Vue.js y ecosistema frontend.",
      avatar: "female-teacher-profile-avatar.webp",
    },
  },

  // Cursos de Data Science
  {
    id: 5,
    name: "Python para Data Science",
    modality: "online",
    price: 179.99,
    duration: 150,
    description:
      "Aprende Python desde cero enfocado en análisis de datos. Incluye NumPy, Pandas y visualización de datos con Matplotlib.",
    shortDescription: "Fundamentos de Python para análisis de datos",
    category: "Data Science",
    image: "python-data.svg",
    contents: [
      {
        title: "Introducción a Python",
        sections: [
          {
            title: "Fundamentos de Python",
            duration: 60,
            icon: "fa-brands fa-python",
          },
          {
            title: "NumPy y Pandas",
            duration: 90,
            icon: "fa-solid fa-table",
          },
        ],
      },
    ],
    teacher: {
      fullName: "David López",
      description:
        "Data Scientist con experiencia en grandes empresas tecnológicas. Experto en Python y análisis estadístico.",
      avatar: "male-teacher-profile-avatar.webp",
    },
  },
  {
    id: 6,
    name: "Machine Learning Fundamentals",
    modality: "presencial",
    price: 349.99,
    duration: 135,
    description:
      "Introducción práctica al Machine Learning con Python. Aprende los algoritmos más importantes y cómo implementarlos con scikit-learn.",
    shortDescription: "Aprende las bases del Machine Learning",
    category: "Data Science",
    image: "machine-learning.svg",
    contents: [
      {
        title: "Fundamentos de ML",
        sections: [
          {
            title: "Introducción al ML",
            duration: 45,
            icon: "fa-solid fa-brain",
          },
          {
            title: "Regresión y Clasificación",
            duration: 90,
            icon: "fa-solid fa-chart-line",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Elena Ramírez",
      description:
        "PhD en Inteligencia Artificial y Machine Learning Engineer con amplia experiencia en proyectos reales.",
      avatar: "female-teacher-profile-avatar.webp",
    },
  },
  {
    id: 7,
    name: "Deep Learning con TensorFlow",
    modality: "online",
    price: 229.99,
    duration: 180,
    description:
      "Aprende a construir y entrenar redes neuronales con TensorFlow y Keras. Incluye CNN, RNN y proyectos prácticos.",
    shortDescription: "Domina el Deep Learning con TensorFlow",
    category: "Data Science",
    image: "deep-learning.svg",
    contents: [
      {
        title: "Redes Neuronales",
        sections: [
          {
            title: "Fundamentos de Deep Learning",
            duration: 60,
            icon: "fa-solid fa-network-wired",
          },
          {
            title: "CNN y Visión por Computador",
            duration: 120,
            icon: "fa-solid fa-camera",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Roberto García",
      description:
        "Investigador en Deep Learning y profesor universitario. Especialista en visión por computador.",
      avatar: "male-teacher-profile-avatar.webp",
    },
  },
  {
    id: 8,
    name: "Big Data con Apache Spark",
    modality: "presencial",
    price: 399.99,
    duration: 135,
    description:
      "Aprende a procesar grandes volúmenes de datos con Apache Spark. Incluye PySpark, SparkSQL y MLlib.",
    shortDescription: "Procesamiento de Big Data con Spark",
    category: "Data Science",
    image: "big-data-spark.svg",
    contents: [
      {
        title: "Fundamentos de Spark",
        sections: [
          {
            title: "Introducción a Spark",
            duration: 45,
            icon: "fa-solid fa-database",
          },
          {
            title: "SparkSQL y DataFrames",
            duration: 90,
            icon: "fa-solid fa-table",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Patricia Moreno",
      description:
        "Data Engineer con experiencia en proyectos de Big Data. Experta en Apache Spark y ecosistema Hadoop.",
      avatar: "female-teacher-profile-avatar.webp",
    },
  },

  // Cursos de Diseño Web
  {
    id: 9,
    name: "UI/UX Design Fundamentals",
    modality: "online",
    price: 159.99,
    duration: 115,
    description:
      "Aprende los fundamentos del diseño de interfaces y experiencia de usuario. Incluye teoría del diseño, wireframing y prototyping.",
    shortDescription: "Fundamentos de diseño UI/UX",
    category: "Diseño Web",
    image: "uiux-design.svg",
    contents: [
      {
        title: "Fundamentos de Diseño",
        sections: [
          {
            title: "Principios de UI/UX",
            duration: 60,
            icon: "fa-solid fa-pen-ruler",
          },
          {
            title: "Wireframing",
            duration: 45,
            icon: "fa-solid fa-pencil-alt",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Marina Costa",
      description:
        "Diseñadora UI/UX con más de 8 años de experiencia. Especialista en diseño centrado en el usuario.",
      avatar: "female-teacher-profile-avatar.webp",
    },
  },
  {
    id: 10,
    name: "Figma Avanzado",
    modality: "presencial",
    price: 279.99,
    duration: 135,
    description:
      "Domina Figma para diseño de interfaces. Aprende componentes, auto-layout, prototipos interactivos y flujos de trabajo profesionales.",
    shortDescription: "Masteriza Figma para diseño UI",
    category: "Diseño Web",
    image: "figma-advanced.svg",
    contents: [
      {
        title: "Componentes y Sistemas",
        sections: [
          {
            title: "Sistema de Componentes",
            duration: 75,
            icon: "fa-solid fa-object-group",
          },
          {
            title: "Auto-layout Avanzado",
            duration: 60,
            icon: "fa-solid fa-layer-group",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Jorge Mendoza",
      description:
        "UI Designer y experto en Figma. Creador de sistemas de diseño para startups y grandes empresas.",
      avatar: "male-teacher-profile-avatar.webp",
    },
  },
  {
    id: 11,
    name: "Diseño Web Responsive",
    modality: "online",
    price: 139.99,
    duration: 115,
    description:
      "Aprende a diseñar sitios web que se adapten a todos los dispositivos. Incluye principios de diseño responsive, media queries y frameworks.",
    shortDescription: "Crea diseños web adaptables",
    category: "Diseño Web",
    image: "responsive-design.svg",
    contents: [
      {
        title: "Fundamentos Responsive",
        sections: [
          {
            title: "Principios de Diseño Responsive",
            duration: 45,
            icon: "fa-solid fa-mobile-alt",
          },
          {
            title: "Media Queries Avanzadas",
            duration: 60,
            icon: "fa-solid fa-desktop",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Carolina Herrera",
      description:
        "Frontend Designer especializada en diseño responsive y arquitecturas CSS modernas.",
      avatar: "female-teacher-profile-avatar.webp",
    },
  },
  {
    id: 12,
    name: "Motion Design para Web",
    modality: "presencial",
    price: 259.99,
    duration: 135,
    description:
      "Aprende a crear animaciones web atractivas y eficientes. Incluye CSS animations, SVG animation y bibliotecas de animación.",
    shortDescription: "Animaciones web profesionales",
    category: "Diseño Web",
    image: "motion-design.svg",
    contents: [
      {
        title: "Animaciones Web",
        sections: [
          {
            title: "CSS Animations",
            duration: 60,
            icon: "fa-solid fa-film",
          },
          {
            title: "SVG Animation",
            duration: 75,
            icon: "fa-solid fa-vector-square",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Fernando Ruiz",
      description:
        "Motion Designer especializado en animaciones web y experiencias interactivas.",
      avatar: "male-teacher-profile-avatar.webp",
    },
  },
  {
    id: 13,
    name: "Data Warehouse",
    modality: "online",
    price: 249.99,
    duration: 360,
    description:
      "Domina el diseño e implementación de Data Warehouses empresariales. Aprende a modelar, construir y optimizar almacenes de datos para tomar decisiones estratégicas basadas en información confiable y estructurada.",
    shortDescription:
      "Transforma datos en decisiones clave. Aprende a gestionar y optimizar la información de tu empresa",
    category: "Data Science",
    image: "data-warehouse.svg",
    contents: [
      {
        title: "Fundamentos de Data Warehouse",
        sections: [
          {
            title: "Introducción al Data Warehousing",
            duration: 60,
            icon: "fa-solid fa-database",
          },
          {
            title: "Modelado Dimensional",
            duration: 90,
            icon: "fa-solid fa-cube",
          },
        ],
      },
      {
        title: "ETL y Optimización",
        sections: [
          {
            title: "Procesos ETL",
            duration: 120,
            icon: "fa-solid fa-exchange-alt",
          },
          {
            title: "Optimización y Mejores Prácticas",
            duration: 90,
            icon: "fa-solid fa-tachometer-alt",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Ricardo Mendoza",
      description:
        "Arquitecto de Datos con más de 12 años de experiencia en implementación de soluciones de Data Warehouse para grandes empresas.",
      avatar: "male-teacher-profile-avatar.webp",
    },
  },
  {
    id: 14,
    name: "Angular Avanzado",
    modality: "presencial",
    price: 299.99,
    duration: 345,
    description:
      "Masteriza Angular con conceptos avanzados de arquitectura, patrones de diseño y mejores prácticas. Aprende a construir aplicaciones empresariales escalables y mantenibles con las últimas características del framework.",
    shortDescription:
      "Lleva tus habilidades al siguiente nivel: profundiza en arquitecturas avanzadas, optimización de rendimiento y desarrollo de aplicaciones complejas",
    category: "Desarrollo Web",
    image: "angular-avanzado.svg",
    contents: [
      {
        title: "Arquitectura Avanzada",
        sections: [
          {
            title: "Patrones de Diseño en Angular",
            duration: 90,
            icon: "fa-solid fa-sitemap",
          },
          {
            title: "Estado y NgRx",
            duration: 120,
            icon: "fa-solid fa-project-diagram",
          },
        ],
      },
      {
        title: "Optimización y Despliegue",
        sections: [
          {
            title: "Optimización de Rendimiento",
            duration: 75,
            icon: "fa-solid fa-tachometer-alt",
          },
          {
            title: "Despliegue y CI/CD",
            duration: 60,
            icon: "fa-solid fa-rocket",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Lucía Vega",
      description:
        "Desarrolladora Senior especializada en Angular. Google Developer Expert y ponente internacional en conferencias de desarrollo web.",
      avatar: "female-teacher-profile-avatar.webp",
    },
  },
  {
    id: 15,
    name: "Data Science",
    modality: "online",
    price: 279.99,
    duration: 210,
    description:
      "Conviértete en un científico de datos completo. Este curso abarca desde los fundamentos estadísticos hasta técnicas avanzadas de machine learning, incluyendo proyectos prácticos con datasets reales y herramientas profesionales.",
    shortDescription:
      "Aprende a extraer insights valiosos y tomar decisiones basadas en datos. Domina Python, análisis estadístico y machine learning",
    category: "Data Science",
    image: "data-science.svg",
    contents: [
      {
        title: "Fundamentos de Data Science",
        sections: [
          {
            title: "Introducción a Python para Data Science",
            duration: 90,
            icon: "fa-brands fa-python",
          },
          {
            title: "Estadística y Probabilidad",
            duration: 120,
            icon: "fa-solid fa-chart-bar",
          },
        ],
      },
      {
        title: "Machine Learning",
        sections: [
          {
            title: "Algoritmos Supervisados",
            duration: 150,
            icon: "fa-solid fa-brain",
          },
          {
            title: "Algoritmos No Supervisados",
            duration: 120,
            icon: "fa-solid fa-network-wired",
          },
        ],
      },
    ],
    teacher: {
      fullName: "Alberto Campos",
      description:
        "PhD en Ciencia de Datos y consultor internacional. Especialista en aplicación de ML en entornos empresariales.",
      avatar: "male-teacher-profile-avatar.webp",
    },
  },
];

function initCoursesArray() {
  localStorage.setItem("courses", JSON.stringify(courses));
}

initCoursesArray();

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
