const allCourses = [
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
  localStorage.setItem("courses", JSON.stringify(allCourses));
}

initCoursesArray();
