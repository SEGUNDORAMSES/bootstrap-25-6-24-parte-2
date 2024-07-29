//<h2>Ejercicio 1: Mostrar nombres de series</h2>


let series = [
    { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
    { id: 2, Serie: "Stranger Things", Categoria: "Ciencia Ficción", Temporadas: 4 },
    { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
    { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 }
];

mostrarNombresSeries(series)
function mostrarNombresSeries(peliculas) {
    peliculas.forEach(element => {
        alert(element.Serie)
    });
}



//<h2>Ejercicio 2: Mostrar la longitud del nombre de cada serie</h2>
mostrarLongitudNombres(series)
function mostrarLongitudNombres(longitud) {
    alert(series.length)
}


//     < h2 > Ejercicio 3: Mostrar nombres de peliculas en mayúsculas
mostrarNombresMayusculas(series)
function mostrarNombresMayusculas(geirel) {
    geirel.forEach(element => {
        alert(element.Serie.toUpperCase())
    });
}



//<h2>Ejercicio 4: Mostrar nombres de series en minúsculas</h2>
mostrarNombresMinusculas(series)
function mostrarNombresMinusculas(minus) {
    minus.forEach(element => {
        alert(element.Serie.toLowerCase())
    });
}



//<h2>Ejercicio 5: Encontrar una serie por nombre</h2>
encontrarSeriePorNombre(series, "Stranger Things")
function encontrarSeriePorNombre(series, nombre) {
    let serieEncontrada = series.find(element => element.Serie === nombre);
    if (serieEncontrada) {
        alert(`the found serie is ${serieEncontrada.Serie}`)
    }

    else {
        alert(`any serie was found`)
    }

}


//<h2>Ejercicio 6: Añadir una nueva serie</h2>
agregarSerie(series, { Serie: "alf" })
function agregarSerie(datos, nuevo) {
    datos.push(nuevo)
    alert(series[4].Serie);
}


//<h2>Ejercicio 7: Extraer una subcadena de los nombres de las series</h2>

extraerSubcadenaNombres(series)
function extraerSubcadenaNombres(ini) {
    ini.forEach(element => {
        alert(element.Serie.substring(0, 4))
    });
}

//<h2>Ejercicio 8: Reemplazar una palabra en los nombres de las series</h2>
reemplazarPalabraNombres(series,"Ana","luis")
function reemplazarPalabraNombres(datos,buscar,Reemplazar) {
datos.forEach(element => {
if (buscar===element.Serie) {
    alert(element.Serie.replace(buscar,Reemplazar))
} else {
    
}



});

console.log(series)


}


