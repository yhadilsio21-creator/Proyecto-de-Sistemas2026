let listaEstudiantes = [];
function agregarEstudiante() {
    const inputNombre = document.getElementById("nombre");
    const inputApellido = document.getElementById("apellido");
    const inputFecha = document.getElementById("fecha");
    const respuesta = document.getElementById("respuesta");
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const fecha = inputFecha.value;
    if (nombre === "" || apellido === "" || fecha === "") {
        alert("Complete todos los campos: Nombre, Apellido y Fecha de Nacimiento.");
        return;
    }
    const nuevoEstudiante = {
        nombre: nombre,
        apellido: apellido,
        fecha: fecha
    };
    listaEstudiantes.push(nuevoEstudiante);
    mostrarEstudiantes();
    inputNombre.value = "";
    inputApellido.value = "";
    inputFecha.value = "";
}
function mostrarEstudiantes() {
    const respuesta = document.getElementById("respuesta");
    if (listaEstudiantes.length === 0) {
        respuesta.innerHTML = "";
        return;
    }
    let html = "<strong>Estudiantes Registrados:</strong><br><ul>";
    listaEstudiantes.forEach((estudiante, index) => {
        html += `<li>${index + 1}. ${estudiante.nombre} ${estudiante.apellido} - <em>F. Nac: ${estudiante.fecha}</em></li>`;
    });
    html += "</ul>";
    respuesta.innerHTML = html;
}
function Limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
    listaEstudiantes = [];
    mostrarEstudiantes();
}

