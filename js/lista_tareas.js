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
    let btnBuscar = document.getElementById("btnBuscar");
    btnBuscar.addEventListener("click", buscarTarea); 
    function buscarTarea() {
        let tareaBuscada = document.getElementById("txtTarea").value; //captura input
        if (tareaBuscada == "") { //si input está vacío
            listarTareas(tareas);
        }else { //si no está vacío
        tareasEncontradas = tareas.filter((tarea) => tarea == tareaBuscada); //filtra q concidan cn lo q buscaron lol
        if (tareasEncontradas.length > 0){ //si se encuentra algo
            listarTareas(tareasEncontradas);
        } else { //si no se encuentra nada
            Swal.fire({
                icon: "error", //tipo msj
                title: "Oops...", //título msj
                text: "No se encontró NADOTA!!!", //txt del msj
                footer: "", //pie del msj
            });
        }
    }
}
}