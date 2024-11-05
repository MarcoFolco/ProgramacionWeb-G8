/*function showPopup(course) {
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
});*/


    // Función para cargar el JSON
    async function cargarCursos() {
        try {
            const storedCursos = localStorage.getItem("cursos");
            if (storedCursos) {
                return JSON.parse(storedCursos);
            } else {
                const response = await fetch("./archivosJson/cursos.json");
                if (!response.ok) {
                    throw new Error("Error al cargar el archivo JSON: " + response.status);
                }
                const cursos = await response.json();
                localStorage.setItem("cursos", JSON.stringify(cursos));
                return cursos;
            }
        } catch (error) {
            console.error("Error al cargar o analizar el JSON:", error);
            return [];
        }
    }

    function abrirPopupCurso(id) {
    cargarCursos().then(cursos => {
        if (cursos && cursos.length > 0) { // Verifica que cursos no esté vacío
            const curso = cursos.find(c => c.courseId === id); // Encuentra el curso por ID
            if (curso) {
                mostrarPopup(curso);
            } else {
                console.warn("Curso no encontrado con ID:", id);
            }
        } else {
            console.warn("No se pudieron cargar los cursos.");
        }
    });
}

    // Mostrar popup con los detalles
    function mostrarPopup(curso) {
        document.getElementById("nombreCurso").innerText = curso.courseName;
        document.getElementById("detalleCurso").innerText = curso.description;
        document.getElementById("linkCurso").href = `Curso.html?id=${curso.courseId}`;
        document.getElementById("popup").style.display = "block";
    }

    // Cargar el calendario y agregar eventos a cada curso
    cargarCursos().then(cursos => {
        cursos.forEach(curso => {
            const fechaElemento = document.createElement("div");
            fechaElemento.innerText = curso.fecha + ": " + curso.courseName;
            fechaElemento.classList.add("curso");
            fechaElemento.onclick = () => mostrarPopup(curso);
            document.getElementById("calendario").appendChild(fechaElemento);
        });
    });

    // Cerrar el popup
    document.getElementById("closePopup").onclick = function() {
        document.getElementById("popup").style.display = "none";
    };