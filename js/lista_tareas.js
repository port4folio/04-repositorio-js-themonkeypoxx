let tareas=["Tarea 1", "Tarea 2"];
let listaTareas=document.getElementById("listaTareas");
//console.log(listatareas)
listarTareas(tareas)

function listarTareas(t){
    listarTareas.innerHTML="";
    t.array.forEach(Tarea => {
        li=document.createElement("li");
        li.textContent=tarea;
        listaTareas.appendChild("li")
        li.className="list-group-item";
    });
}