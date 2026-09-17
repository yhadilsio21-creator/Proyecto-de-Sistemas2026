const listaEstudiantes = [
  { nro: 1, nombre: "Abril", apellido: "Chambi", edad: 26, genero: "Femenino" },
  { nro: 2, nombre: "Carlos", apellido: "Mendoza", edad: 27, genero: "Masculino" },
  { nro: 3, nombre: "Elena", apellido: "Rojas", edad: 24, genero: "Femenino" },
  { nro: 4, nombre: "Gustavo", apellido: "Mamani", edad: 26, genero: "Masculino" },
  { nro: 5, nombre: "Lucía", apellido: "Fernández", edad: 24, genero: "Femenino" },
  { nro: 6, nombre: "Mateo", apellido: "Quispe", edad: 28, genero: "Masculino" },
  { nro: 7, nombre: "Natalia", apellido: "Flores", edad: 24, genero: "Femenino" },
  { nro: 8, nombre: "Oliver", apellido: "Vargas", edad: 26, genero: "Masculino" },
  { nro: 9, nombre: "Sofía", apellido: "Gutiérrez", edad: 26, genero: "Femenino" },
  { nro: 10, nombre: "Walter", apellido: "Cruz", edad: 24, genero: "Masculino" }
];
function mostrarEstudiantes() {
    const datos = document.getElementById("datos");
    if (!datos) return;
    datos.innerHTML = "";
    let contenidoTabla = "";
    listaEstudiantes.forEach(est => {
        contenidoTabla += `
            <tr>
         <td>${est.nro}</td>
         <td>${est.nombre}</td>
         <td>${est.apellido}</td>
         <td>${est.edad}</td>
         <td>${est.genero}</td>
            </tr>
        `;
    });
    datos.innerHTML = contenidoTabla;
}
function Adicionar() {
    const inputNombre = document.getElementById('nombre');
    const inputApellido = document.getElementById('apellido');
    const inputEdad = document.getElementById('edad');
    const selectGenero = document.getElementById('genero');
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const edad = inputEdad.value.trim();
    const genero = selectGenero.value;
    if (!nombre || !apellido || !edad || !genero) {
        alert("Completa todos los campos del formulario.");
        return;
    }
    const nuevoEstudiante = {
        nro: listaEstudiantes.length + 1,
        nombre: nombre,
        apellido: apellido,
        edad: parseInt(edad, 10),
        genero: genero
    };
    listaEstudiantes.push(nuevoEstudiante);
    mostrarEstudiantes();
    inputNombre.value = '';
    inputApellido.value = '';
    inputEdad.value = '';
    selectGenero.value = '';
    inputNombre.focus();
}
mostrarEstudiantes();

