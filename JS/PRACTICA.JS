practica()


let names = [
    { Nombre: "geirel", edad: 24, location: "guadalupe", img: src"/IMG/aquaman.png"},
    { Nombre: "geirel", edad: 24, location: "guadalupe", img: src"/IMG/batman.png"},
    { Nombre: "geirel", edad: 24, location: "guadalupe", img: src"/IMG/default.jpg"},
];



function practica() {
    let Contenedor = document.getElementById("practice")

    let Plantilla = `


  <img class="card-img-top" src=${names[0].img} alt="">
      <div class="card-body">
        <h4 class="card-title">${names[0].Nombre}</h4>
        <p class="card-text">${names[0].location}</p>
      </div>

`


Contenedor.innerHTML=Plantilla







}
