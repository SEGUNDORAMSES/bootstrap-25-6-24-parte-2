export function oct() {
  
    job(pct)  
    
}






let pct=[
  {img:"/IMG/1-Banner.jpg"},
  {img:"/IMG/1-Header.jpg"},
  {img:"/IMG/1-Logo.png"},
  {img:"/IMG/1-Noticia.jpg"},
  {img:"/IMG/aquaman.png"},
  {img:"/IMG/batman.png"},
  {img:"/IMG/HTML Y CSS LOGOS.png"},
  ]

export const geirel=()=> {
let navo=document.getElementById("navi").innerHTML=nv(); 
let cen=document.getElementById("tab").innerHTML= ct();
let inch=document.getElementById("foot").innerHTML= feet();
}



const nv=()=>{
  
let html=`
 <a class="navbar-brand" href="#">Navbar</a>
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
  </div>
`
return html


}




const ct=()=>{

let html=`
 <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td scope="row"></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
`

return html



}






const feet=(data)=>{
let html=""
data.forEach(element => {
  



html+=`<div class="card col-lg-5">
  <img class="card-img-top" src="/IMG/1-Banner.jpg">
  <div class="card-body">
    <h4 class="card-title">Title</h4>
    <p class="card-text">Text</p>
  </div>
</div>  

`
return html

});





}