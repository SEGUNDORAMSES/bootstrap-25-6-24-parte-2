//<h2>Ejercicio 1: Mostrar nombres de series</h2>


let series = [
    { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
    { id: 2, Serie: "Stranger Things", Categoria: "Ciencia Ficción", Temporadas: 4 },
    { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
    { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 }
];

// mostrarNombresSeries(series)
// function mostrarNombresSeries(peliculas) {
//     peliculas.forEach(element => {
//         alert(element.Serie)
//     });

// }


//<h2>Ejercicio 2: Mostrar la longitud del nombre de cada serie</h2>

function mostrarLongitudNombres(longitud) {
    longitud.forEach(element => {
        console.log(series.length)
    });
}
mostrarLongitudNombres(series)

//<h2>Ejercicio 3: Mostrar nombres de series en mayúsculas</h2>
// function mostrarNombresMayusculas() {
//     series.forEach(series => {
//         alert(series.Serie.toUpperCase())
//     });
// }

// mostrarNombresMayusculas()

//<h2>Ejercicio 4: Mostrar nombres de series en minúsculas</h2>
// function mostrarNombresMinusculas() {
//     series.forEach(series => {
//         alert(series.Serie.toLowerCase())

//     });
// }
// mostrarNombresMinusculas()

//<h2>Ejercicio 5: Encontrar una serie por nombre</h2>

// function encontrarSeriePorNombre() {
//     let serieEncontrada = series.find(series => series.Serie === "Ana");
//     if (serieEncontrada == "Ana") {
//         alert("the movie was found")
//     } else {
//         alert("the movie was not found")
//     }
// }

// encontrarSeriePorNombre()

//<h2>Ejercicio 6: Añadir una nueva serie</h2>
// agregarSerie()
// function agregarSerie() {
//     let movie = { pelicula: "sandman" }

//     series.push(movie);

//     alert(series.length);
// }

//<h2>Ejercicio 7: Extraer una subcadena de los nombres de las series</h2>

// function extraerSubcadenaNombres() {
//     series.forEach(series => {

//     });



// }




// let personas = [
//     { id: 1, nombre: "Ana", apellido: "Drama", edad: 2 },
//     { id: 3, nombre: "juan", apellido: "soto", edad: 2 },
//     { id: 4, nombre: "sebastian", apellido: "lopez", edad: 25 },
//     { id: 7, nombre: "maria", apellido: "Cano", edad: 15 },


// ];
// let animales = [
//     { id: 5, nombre: "bruno", apellido: "Drama", edad: 2 },
//     { id: 8, nombre: "firulais", apellido: "Drama", edad: 2 },
//     { id: 10, nombre: "scott", apellido: "Drama", edad: 2 },
//     { id: 25, nombre: "valentino", apellido: "Drama", edad: 2 },


// ];
// let plantas = [
//     { id: 30, nombre: "carnivola", apellido: "Drama", edad: 2 },
//     { id: 40, nombre: "guaria", apellido: "Drama", edad: 2 },
//     { id: 50, nombre: "girasol", apellido: "Drama", edad: 2 },
//     { id: 70, nombre: "tulipan", apellido: "Drama", edad: 2 },


// ];
// mostrarnombres(personas)
// mostrarnombres(animales)
// mostrarnombres(plantas)
// function mostrarnombres(dato) {
//     dato.forEach(element => {

//         console.log(`el nombre de los arrays son:  ${element.nombre}, ${element.}` );

//     });


// }

