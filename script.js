const contenedor = document.querySelector(".conteiner2021")
const contenedorGaleria = document.querySelector(".conteiner-galeria")
const body = document.querySelector("body")
const botonAtras = document.querySelector(".boton-atras")
const fragmento = document.createDocumentFragment();
const fragmentoGaleria = document.createDocumentFragment();
const barraCreacionEventos = document.querySelector(".barraDatos")


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




function botonAtras1(){                                    //esta funcion restaura la galeria y demas a como esta al principio luego de visitar una galeria y darle al click atras

    contenedorGaleria.style.display = "none"
    contenedor.style.display = "flex"
    botonAtras.style.visibility = "hidden"
    barraCreacionEventos.style.display = "flex";

    for (let index = 1; index < 100; index++) {
    contenedorGaleria.removeChild(document.querySelector("#galeriaImg-div"));
    }
}
botonAtras.addEventListener("click",()=>{ botonAtras1()})



// barraCreacionEventos.addEventListener("click", function() {
//     barraCreacionEventos.classList.toggle("expandirBarra"); 
// })





function borrarFoto(div1){                              //Esta funcion borra aquellas fotos de las galerias que no esten o que den error
    console.log(div1)
    contenedorGaleria.removeChild(div1)
}


function selectEvent(contenedor,div1){          //esta funcion se ejecuta cuando se clickea sobre un evento

    barraCreacionEventos.style.display = "none";
    contenedor.style.display = "none";
    setTimeout(function(){   
        contenedorGaleria.style.display= "flex";   
    }, [150])
    eventName = div1.getAttribute('name')
    botonAtras.style.visibility= "visible";

        for (let index = 1; index < 100; index++) {     //esto busca todas las fotos de la carpeta y va creando la galeria

            let Foto = document.createElement("img");
            Foto.classList.add(`galeriaImg`)
            Foto.src = `Fotos/${eventName}/${eventName} (${index}).jpg`;
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
            Foto.addEventListener("error", function (){borrarFoto(Div)})   //Llamado a la funcion borrarFoto 
        }
     contenedorGaleria.appendChild(fragmentoGaleria); 
}





const arregloEventos= [
        new Eventos("19-03-2021","Cumple de Papá 2021", "Casa de Funes", 20, "15 a 00 hs","cumplePapa"),
        new Eventos("27-05-2021","Cumple de Lena 2021", "Casa de Ari", 6,"18 a 20 hs","cumpleLena2021"),
        new Eventos("20-06-2021","Dia del padre 2021", "Casa de papá", 8,"12 a 20 hs","diaPadre2021"),
        new Eventos("18-01-2021","Cumple de Ari 2021", "Bar", 8,"20 a 00 hs","cumpleAri2021")
    ];





arregloEventos.map((evento,i) => {              //recorre todos los eventos existentes y los crea
    let div = document.createElement("div");
    div.classList.add(`item-div`)
    div.setAttribute("name",`${evento.getName}`);
    div.addEventListener("click",()=>{ selectEvent(contenedor,div) })
    div.tabIndex=i;
    div.innerHTML = `<div class='contenedor-img'><img class='iconoImg' src='Fotos/${evento.getName}/${evento.getName} (1).jpg'></div> <div class='texto-eventos'> <h3>Titulo:${evento.getTittle} </h3>  <h4>Fecha: ${evento.getDate}</h4>   <h4>Lugar: ${evento.getPlace}</h4>  <h4>Integrantes: ${evento.getMembers}</h4> <h4>Horario: ${evento.getSchedule}</h4> </div>`
    fragmento.appendChild(div);
    
});
contenedor.appendChild(fragmento);













