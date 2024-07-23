//<h2>Ejercicio 1: Mostrar nombres de series</h2>


let series = [
    { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
    { id: 2, Serie: "Stranger Things", Categoria: "Ciencia Ficción", Temporadas: 4 },
    { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
    { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 }
];

mostrarNombresSeries()
function mostrarNombresSeries() {

    series.forEach(series => {
        alert(series.Serie)
    })
}


//<h2>Ejercicio 2: Mostrar la longitud del nombre de cada serie</h2>

function mostrarLongitudNombres() {
    series.forEach(series => {
        alert(series.Serie.length)
    });
}
mostrarLongitudNombres()

//<h2>Ejercicio 3: Mostrar nombres de series en mayúsculas</h2>
function mostrarNombresMayusculas() {
    series.forEach(series => {
        alert(series.Serie.toUpperCase())
    });
}

mostrarNombresMayusculas()

//<h2>Ejercicio 4: Mostrar nombres de series en minúsculas</h2>
function mostrarNombresMinusculas() {
    series.forEach(series => {
        alert(series.Serie.toLowerCase())

    });
}
mostrarNombresMinusculas()

//<h2>Ejercicio 5: Encontrar una serie por nombre</h2>

function encontrarSeriePorNombre() {
    let serieEncontrada = series.find(series => series.Serie === "Ana");
    if (serieEncontrada == "Ana") {
        alert("the movie was found")
    } else {
        alert("the movie was not found")
    }
}

encontrarSeriePorNombre()

//<h2>Ejercicio 6: Añadir una nueva serie</h2>
agregarSerie()
function agregarSerie() {
    let movie = { pelicula: "sandman" }

    series.push(movie);

    alert(series.length);
}

//<h2>Ejercicio 7: Extraer una subcadena de los nombres de las series</h2>

function extraerSubcadenaNombres(){
series.forEach(series => {
    
});



}