const coursesList = {
    cart: [
        {
            courseId: 1,
            courseName: "Desarrollo Web básico",
            duration: "4 semanas",
            price: 20,
            modality: "Online",
            image: "",
            
        },

        {
            courseId: 2,
            courseName: "Data Science",
            duration: "5 semanas",
            price: 50,
            modality: "Online",
            image: "",
            
        },

        {
            courseId: 3,
            courseName: "Python básico",
            duration: "3 semanas",
            price: 15,
            modality: "Online",
            image: "",
            
        },

        {
            courseId: 4,
            courseName: "C++",
            duration: "3 semanas",
            price: 25,
            modality: "Online",
            image: "",
            
        },

        {
            courseId: 4,
            courseName: "Angular avanzado",
            duration: "4 semanas",
            price: 30,
            modality: "Online",
            image: "",
            
        },

        {
            courseId: 4,
            courseName: "Data warehouse",
            duration: "7 semanas",
            price: 55,
            modality: "Online",
            image: "",
            
        },

        
    ]
}

function renderCourses() {
    const container = document.getElementById("courses-container");
  
    coursesList.cart.forEach(course => {
      const courseCard = document.createElement("article");
      courseCard.classList.add("card", "card--course");
  
      courseCard.innerHTML = `
        <div class="card__img-container">
          <img
            src="${course.image || './images/course.jpg'}"
            alt="Imagen del curso ${course.courseName}"
            class="img"
          />
          <span class="tag course-price">$${course.price}</span>
          <span class="tag tag--online course-mode heading heading--md">${course.modality}</span>
        </div>
        <div class="card__content course-content">
          <p class="heading heading--xl">
            <strong>${course.duration}</strong> <small class="text--md">hs</small>
          </p>
          <div class="course-content__details">
            <h2 class="heading heading--md">${course.courseName}</h2>
            <a
              class="btn btn--ghost btn--sm"
              href="./pages/course-detail-online.html"
            >Ver Detalle</a>
            <a
              href="./pages/add-payment-method.html"
              class="btn btn--primary btn--md"
            >Comprar</a>
          </div>
        </div>
      `;
  
      container.appendChild(courseCard);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderCourses);