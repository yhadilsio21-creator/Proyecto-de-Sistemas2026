alert("Bienvenido a la clase de Sistemas");
let tareas=[];
function agregarTarea(tarea="",estado="Incompleto"){
    if (tarea ===""){
 tarea= document.getElementById("tarea").value ;
 estado = document.getElementById("tareaSelect").value;
    }
    tareas.push({descripcion: tarea, completada: estado});
}
function eliminarTarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas.splice(indice,1);
    } else{
        console.log("Indice invalido");
    }
}
function mostrarTareas(){
    console.log("Mostrando Lista de tareas:");
    const contenedor=document.getElementById("respuesta");
    let respuestaHtml = "";
    tareas.forEach((tarea, indice) => {
        console.log(`${indice+1}. [${tarea.completada }] ${tarea.descripcion}`);
        respuestaHtml = `<ul>`;
        respuestaHtml += `<li>${indice + 1}.[${tarea.completada}] ${tarea.descripcion}`;
        respuestaHtml += `</ul>`;
    });
    respuestaHtml += "</ul>";
    contenedor.innerHTML = respuestaHtml;
}

//Adicionar las tareas
agregarTarea("Compra leche","Completado");
agregarTarea("Hacer ejercicio","Completado");
agregarTarea("Estudiar JavaScript","Incompleto");
agregarTarea("Subir a GitHub","Incompleto");
mostrarTareas();

