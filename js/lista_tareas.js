let tareas=[];
let listaTareas=document.getElementById("listaTareas");
//console.log(listatareas);
listarTareas(tareas);

function listarTareas(t){
    listaTareas.innerHTML="";
    t.forEach(tarea => {
        li=document.createElement("li");
        li.textContent=tarea;
        listaTareas.appendChild(li);
        li.className="list-group-item";
    });
}

let btnAgregar = document.getElementById("btnAgregar"); //capura el botón
btnAgregar.addEventListener("click", agregarTarea);  //agrega un evento click al botón agregar q activa la función agregar tarea
//función q agrega tareas
function agregarTarea() {
    let tarea = document.getElementById("txtTarea").value; //captura el valor del input
    tareas.push(tarea);  //agrega la tarea al array
    listarTareas(tareas); //llama función para mostrar tareas en ul
}