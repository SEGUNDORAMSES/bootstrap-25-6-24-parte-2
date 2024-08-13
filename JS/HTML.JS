import { gei } from "/js/get_data.js"; 


export async function execute() {
const Data = await gei ()
if (Data) {
  let navigator=document.getElementById("nav").innerHTML=navi(Data)
  let main=document.getElementById("tab").innerHTML=mn(Data)
  let pie=document.getElementById("foot").innerHTML= ft(Data)  
}


}



function navi(dat) {
  
let html=` <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      
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

    dat.forEach(element => {
      html+=`  <li class="nav-item active">
          <a class="nav-link" href="#">${element.name} <span class="sr-only">(current)</span></a>
        </li>`
    });
return html
}
function mn(dat) {
  
let html=` <thead>
   
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
  </tbody> `

  dat.forEach(element => {
    html+=` <tr>
      <th>${element.username}</th>
      <th></th>
      <th></th>
    </tr>`
  });
return html
}
function ft(dat) {
  
let html=`<div class="form-group">
  <label for=""></label>
  <input type="text" name="" id="" class="form-control" placeholder="geirel" aria-describedby="">
  <small id="helpId" class="text-muted">Help text</small>
</div> `

dat.forEach(element => {
  html +=`  <button type="button" class="btn btn-primary">${element.Data[0].name}</button>`
});
return html
}