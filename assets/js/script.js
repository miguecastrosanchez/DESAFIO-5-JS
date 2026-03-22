
const escribir_tarea = document.querySelector("#escribir_tarea");

const btn_agregar = document.querySelector("#btn_agregar_tarea");

const total_tareas = document.querySelector("#total");

const realizadas = document.querySelector("#realizadas")

const id_tarea = document.querySelector("#idtarea")

const tareas = [{id:0,descripcion: "realizar la guia de estudio sobre arreglos",estado:false},{id:1,descripcion: "Hacer el desafio con mucha energia y motivacion",estado:false},{id:2,descripcion: "salir a pasear a dobby y salir a comer con mi esposa",estado:false}];

//para iniciar las tareas:

function tareasiniciales(){

    let html = ""
    for(let x of tareas){

        html += `
        <tr>
        <td>${x.id}</td>
        
        <td style="${x.estado ? 'background-color: green; color: white;' : ''}">${x.descripcion}</td>
        
        
        <td><button class = "prueba_rojo" style="padding: 5px; border: none;background-color: red;
        border: 2px solid #000000;
        border-radius: 10px; " onclick = "borrar(${x.id})">Eliminar</button></td>
        
        <td><button class = "prueba_verde" style="padding: 5px;
        border: none;background-color: greenyellow;
        border: 2px solid #000000;
        border-radius: 10px;" onclick ="completado(${x.id})">Completado</button></td>
        
        </tr>
        `
    }

    

    id_tarea.innerHTML = html;
    total_tareas.innerHTML = tareas.length;
    
    const contar_completado = tareas.filter(x=>x.estado == true);
    
    realizadas.innerHTML = contar_completado.length
}

tareasiniciales();



btn_agregar.addEventListener("click",()=>{

    const add_tareas = escribir_tarea.value;
    tareas.push({id: tareas.length + 1, descripcion: add_tareas, estado: false});
    escribir_tarea.value = "";
    
    
    let html = ""
    for(let x of tareas){

        html += `
        <tr>
        <td>${x.id}</td>
        
        <td style="${x.estado ? 'background-color: green; color: white;' : ''}">${x.descripcion}</td>
        
        
        <td><button class = "prueba_rojo" style="padding: 5px; border: none;background-color: red;
        border: 2px solid #000000;
        border-radius: 10px; " onclick = "borrar(${x.id})">Eliminar</button></td>
        
        <td><button class = "prueba_verde" style="padding: 5px;
        border: none;background-color: greenyellow;
        border: 2px solid #000000;
        border-radius: 10px;" onclick ="completado(${x.id})">Completado</button></td>
        
        </tr>
        `
    }

    id_tarea.innerHTML = html;
    total_tareas.innerHTML = tareas.length;
    
    const contar_completado = tareas.filter(x=>x.estado == true);
    
    realizadas.innerHTML = contar_completado.length



})

function borrar(id){

    const eliminar = tareas.findIndex((task) => task.id == id)
    tareas.splice(eliminar,1)

    let html = ""
    for(let x of tareas){

        html += `
        <tr>
        <td>${x.id}</td>
        
        <td style="${x.estado ? 'background-color: green; color: white;' : ''}">${x.descripcion}</td>
        
        
        <td><button class = "prueba_rojo" style="padding: 5px; border: none;background-color: red;
        border: 2px solid #000000;
        border-radius: 10px; " onclick = "borrar(${x.id})">Eliminar</button></td>
        
        <td><button class = "prueba_verde" style="padding: 5px;
        border: none;background-color: greenyellow;
        border: 2px solid #000000;
        border-radius: 10px;" onclick ="completado(${x.id})">Completado</button></td>
        
        </tr>

        `
    }

    id_tarea.innerHTML = html;
    total_tareas.innerHTML = tareas.length;

    const contar_completado = tareas.filter(x=>x.estado == true);

    realizadas.innerHTML = contar_completado.length
    

}

function completado(id){

    const completado = tareas.findIndex((task) => task.id == id)
    
    
    //asi se accede a un elemnto del arreglo de objetos: nombrearreglo[posiscion].parteobjeto. Por ejemplo: en este caso tareas.[2].descripcion = ""
    if(tareas[completado].estado===false){
        tareas[completado].estado = true;


        
    }
    let html = ""
    for(let x of tareas){

        html += `
        <tr>
        <td>${x.id}</td>
        
        <td style="${x.estado ? 'background-color: green; color: white;' : ''}">${x.descripcion}</td>
        
        
        <td><button class = "prueba_rojo" style="padding: 5px; border: none;background-color: red;
        border: 2px solid #000000;
        border-radius: 10px; " onclick = "borrar(${x.id})">Eliminar</button></td>
        
        <td><button class = "prueba_verde" style="padding: 5px;
        border: none;background-color: greenyellow;
        border: 2px solid #000000;
        border-radius: 10px;" onclick ="completado(${x.id})">Completado</button></td>
        
        </tr>

        `
    }
    id_tarea.innerHTML = html;
    total_tareas.innerHTML = tareas.length;

    const contar_completado = tareas.filter(x=>x.estado == true);
    
    realizadas.innerHTML = contar_completado.length

}

   


