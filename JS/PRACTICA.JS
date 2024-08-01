document.addEventListener('DOMContentLoaded', () => {

    hazlo()

})



let Names = [
    { nombre: "geirel", edad: 25, location: "guadalupe" },
    { nombre: "pablo", edad: 25, location: "guadalupe" },
    { nombre: "geirel", edad: 25, location: "guadalupe" },
];


function hazlo() {

let Contenedor=document.getElementById("practica")

let Plantilla=
`

<img class="card-img-top" src="holder.js/100x180/" alt="">
  <div class="card-body">
    <h4 class="card-title">${Names[0.nombre]}</h4>
    <p class="card-text">Text</p>
  </div>


`

Contenedor.innerHtml=Plantilla
alert(Names[0].location)

}