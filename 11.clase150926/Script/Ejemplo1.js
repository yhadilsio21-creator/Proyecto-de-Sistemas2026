 const listaEstudiantes = [
  { nro: 1, nombre: "Abril", apellido: "Chambi", fecNac: "12/09/2000", edad: "26", genero: "Femenino" },
  { nro: 2, nombre: "Carlos", apellido: "Mendoza", fecNac: "05/04/1999", edad: "27", genero: "Masculino" },
  { nro: 3, nombre: "Elena", apellido: "Rojas", fecNac: "22/11/2001", edad: "24", genero: "Femenino" },
  { nro: 4, nombre: "Gustavo", apellido: "Mamani", fecNac: "14/01/2000", edad: "26", genero: "Masculino" },
  { nro: 5, nombre: "Lucía", apellido: "Fernández", fecNac: "30/08/2002", edad: "24", genero: "Femenino" },
  { nro: 6, nombre: "Mateo", apellido: "Quispe", fecNac: "17/06/1998", edad: "28", genero: "Masculino" },
  { nro: 7, nombre: "Natalia", apellido: "Flores", fecNac: "03/10/2001", edad: "24", genero: "Femenino" },
  { nro: 8, nombre: "Oliver", apellido: "Vargas", fecNac: "25/05/2000", edad: "26", genero: "Masculino" },
  { nro: 9, nombre: "Sofía", apellido: "Gutiérrez", fecNac: "11/12/1999", edad: "26", genero: "Femenino" },
  { nro: 10, nombre: "Walter", apellido: "Cruz", fecNac: "09/07/2002", edad: "24", genero: "Masculino" }
];
function mostrarEstudiantes()
    {
        const datos=document.getElementById("datos");
        datos.innerHTML="";
        let fila="";
        listaEstudiantes.forEach(
            est=>{
              fila=`
              <tr>
    <td>${est.nro}</td>
    <td>${est.nombre}</td>
    <td>${est.apellido}</td>
    <td>${est.fecNac}</td>
    <td>${est.edad}</td>
    <td>${est.genero}</td>
</tr>
              `;
              datos.innerHTML+=fila;
              
            }
        );

    }
    mostrarEstudiantes();

