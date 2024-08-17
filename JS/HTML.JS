export const ejecutar=()=> {
    const nave=document.getElementById("navi").innerHTML=main()
    const car= document.getElementById("cartas").innerHTML=crds(nombrar)  


}

let nombrar = [
    { nombre: "geirel", edad: 30, lugar: "costarica", img: "/IMG/1-Banner.jpg" },
    { nombre: "pablo", edad: 40, lugar: "usa", img: "/IMG/1-Logo.png" }
]



const crds=(cr)=>{

   
    
 
    
    cr.forEach(element => {
            `<img class="card-img-top mt-10" src="${element.img}">
       <div class="card-body">
         <h4 class="card-title mt-20">${element.nombre}</h4>
         <p class="card-text">${element.edad}</p>
       </div>`
    });
  
    
    }




    const main=()=>{
let html=`<a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu" aria-labelledby="dropdownId">
          <a class="dropdown-item" href="#">Action 1</a>
          <a class="dropdown-item" href="#">Action 2</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>`

return html


    }