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






const job=(er)=>{

  let container=document.getElementById("foot")
 plantilla= " "
  er.forEach(element => {
     
  plantilla+=
  
  `<div class="card col-lg-5">
    <img class="card-img-top" src="${element.img}">
    <div class="card-body">
      <h4 class="card-title">Title</h4>
      <p class="card-text">Text</p>
    </div>
  </div>  
  
  `
  container.innerHTML=plantilla
  });
  }










