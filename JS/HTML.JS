export function ejecutar() {
    show(nombrar)


}

let nombrar = [
    { nombre: "geirel", edad: 30, lugar: "costarica", img: "/IMG/1-Banner.jpg" },
    { nombre: "pablo", edad: 40, lugar: "usa", img: "/IMG/1-Logo.png" }
]



function show(nombrar) {
    let contenedor = document.getElementById("cartas")
    let plantilla = ""
nombrar.forEach(element => {
        plantilla+=
    `<img class="card-img-top mt-10" src="${element.img}">
    <div class="card-body">
      <h4 class="card-title mt-20">${element.nombre}</h4>
      <p class="card-text">${element.edad}</p>
    </div>`
    
    
    });


    contenedor.innerHTML = plantilla



}