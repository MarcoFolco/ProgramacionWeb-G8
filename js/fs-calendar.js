const coursesList = {
    courses: [
        {
            courseId: 1,
            courseName: "Desarrollo Web básico",
            duration: "4 semanas",
            price: 20,
            modality: "Online",
            description: "Sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa ",
            image: "",
            
        },

        {
            courseId: 2,
            courseName: "Data Science",
            duration: "5 semanas",
            price: 50,
            modality: "Online",
            description: "Sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa ",
            image: "",
            
        },

        {
            courseId: 3,
            courseName: "Python básico",
            duration: "3 semanas",
            price: 15,
            modality: "Online",
            description: "Sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa ",
            image: "",
            
        },

        {
            courseId: 4,
            courseName: "C++",
            duration: "3 semanas",
            price: 25,
            modality: "Online",
            description: "Sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa ",
            image: "",
            
        },

        {
            courseId: 4,
            courseName: "Angular avanzado",
            duration: "4 semanas",
            price: 30,
            modality: "Online",
            description: "Sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa ",
            image: "",
            
        },

        {
            courseId: 4,
            courseName: "Data warehouse",
            duration: "7 semanas",
            price: 55,
            modality: "Online",
            description: "Sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa sarasa ",
            image: "",
            
        },

        
    ]
}

function showPopup(course) {
    document.getElementById('popup-course-name').textContent = course.courseName;
    document.getElementById('popup-description').textContent = course.description;
    document.getElementById('popup-duration').textContent = course.duration;
    document.getElementById('popup-price').textContent = course.price;
    document.getElementById('popup-modality').textContent = course.modality;
    
    document.getElementById('course-popup').classList.remove('hidden');
}

// Ocultar el popup
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('course-popup').classList.add('hidden');
});

// Asignar eventos de clic a los eventos del calendario
document.querySelectorAll('.calendar-container__cell-meet').forEach((element) => {
    element.addEventListener('click', () => {
        showPopup(coursesList.courses[0]);
    });
});