const contenedor2021 = document.querySelector(".conteiner2021")
let contenedorGaleria = document.querySelector(".conteiner-galeria")
const body = document.querySelector("body")
const botonAtras = document.querySelector(".boton-atras")
let fragmento2021 = document.createDocumentFragment();
let fragmentoGaleria = document.createDocumentFragment();


class Eventos{
    constructor(fecha,titulo,lugar,integrantes,horario,nombre){

    this.date = fecha;
    this.tittle = titulo;
    this.place = lugar;
    this.members = integrantes;
    this.schedule = horario;
    this.name = nombre;
    }


    get getDate(){
        return this.date;
    }
    get getTittle(){
        return this.tittle;
    }
    get getPlace(){
        return this.place;
    }
    get getMembers(){
        return this.members;
    }
    get getSchedule(){
        return this.schedule;
    }
    get getName(){
        return this.name;
    }
}

let r=0;
let number="";

function botonAtras1(){

    contenedorGaleria.style.display = "none"
    contenedor2021.style.display = "flex"
    botonAtras.style.visibility = "hidden"


    for (let index = 1; index < 40; index++) {
    contenedorGaleria.removeChild(document.querySelector("#galeriaImg-div"));
    }

}


function borrarFoto(div1){
    console.log(div1)
    contenedorGaleria.removeChild(div1)
}


function selectEvent(contenedor2021,div1){

    
    contenedor2021.style.display = "none";
    setTimeout(function(){   
        contenedorGaleria.style.display= "flex";   
    }, [150])
    eventName = div1.getAttribute('name')
    botonAtras.style.visibility= "visible";


    
        for (let index = 1; index < 20; index++) {

            let Foto = document.createElement("img");
            Foto.classList.add(`galeriaImg`)
            Foto.src = `Fotos/${eventName} (${index}).jpg`;
            let Div = document.createElement("div");
            Div.classList.toggle("hover")
            Div.setAttribute("id",`galeriaImg-div`)
            Div.addEventListener("click", function(){
                Div.classList.toggle("hover");
                Div.classList.toggle("divGrande");
                Foto.classList.toggle("imagenGrande");
                body.classList.toggle("trabarScroll");  
                let blur=document.querySelector(".blur");
                blur.classList.toggle("blurEfecto");
               
            })
            Div.appendChild(Foto)
            fragmentoGaleria.appendChild(Div);   
            Foto.addEventListener("error", function (){borrarFoto(Div)})
           
        }
     
     contenedorGaleria.appendChild(fragmentoGaleria);

   
}




const arregloEventos= [
        new Eventos("19-03-2021","Cumple de Papá", "Casa de Funes", 20, "15 a 00 hs","cumplePapa"),
        new Eventos("27-05-2021","Cumple de Lena", "Casa de Ari", 6,"18 a 20 hs","cumpleLena"),
        new Eventos("20-06-2021","Dia del padre", "Casa de papá", 8,"12 a 20 hs","diaPadre2021"),
    ];


arregloEventos.map((evento,i) => {
    let div = document.createElement("div");
    div.classList.add(`item-div`)
    div.setAttribute("name",`${evento.getName}`);
    div.addEventListener("click",()=>{ selectEvent(contenedor2021,div) })
    div.tabIndex=i;
    div.innerHTML = `<div class='contenedor-img'><img class='iconoImg' src='Fotos/${evento.getName} (1).jpg'></div> <div class='texto-eventos'> <h3>Titulo:${evento.getTittle} </h3>  <h4>Fecha: ${evento.getDate}</h4>   <h4>Lugar: ${evento.getPlace}</h4>  <h4>Integrantes: ${evento.getMembers}</h4> <h4>Horario: ${evento.getSchedule}</h4> </div>`
    fragmento2021.appendChild(div);
    
});


contenedor2021.appendChild(fragmento2021);

botonAtras.addEventListener("click",()=>{ botonAtras1()})





//-----------------------agrego el evento click y que guarde el nombre del evento en number-----------





