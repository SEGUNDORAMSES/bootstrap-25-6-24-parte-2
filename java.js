let series = [
    { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
    { id: 2, Serie: "Stranger Things", Categoria: "Ciencia Ficción", Temporadas: 4 },
    { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
    { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 }
];


//<h2>Ejercicio 1: Mostrar nombres de series</h2>
mostrarNombresSeries(series)
function mostrarNombresSeries(dato) {
    dato.forEach(element => {
        alert(element.Serie)
    });
}


//<h2>Ejercicio 2: Mostrar la longitud del nombre de cada serie</h2>
mostrarLongitudNombres(series)
function mostrarLongitudNombres(dato) {
    alert(dato.length)
    dato = (series)
}


//< h2 > Ejercicio 3: Mostrar nombres de series en mayúsculas
mostrarNombresMayusculas(series)
function mostrarNombresMayusculas(datos) {
    datos.forEach(element => {
        alert(element.Serie.toUpperCase())
    });
}


//<h2>Ejercicio 4: Mostrar nombres de series en minúsculas</h2>
mostrarNombresMinusculas(series)
function mostrarNombresMinusculas(dato) {
    dato.forEach(element => {
        alert(element.Serie.toLowerCase())

    });
}

//<h2>Ejercicio 5: Encontrar una serie por nombre</h2>
encontrarSeriePorNombre(series, "Ana", "Stranger Things", "The Crown", "La Casa de Papel")
function encontrarSeriePorNombre(dato, nombre, name, namo, alias) {
    dato.forEach(element => {
        if (nombre === element.Serie) {
            alert(`the found serie is:  ${nombre} `)
        }
        else if (name === element.Serie) {
            alert(`the found serie is:  ${name} `)
        }
        else if (namo === element.Serie) {
            alert(`the found serie is:  ${namo} `)
        }
        else if (alias === element.Serie) {
            alert(`the found serie is:  ${alias} `)
        }

        else {
            alert(`any serie was found`)
        }
    });
}


//<h2>Ejercicio 6: Añadir una nueva serie</h2>
agregarSerie(series, { Serie: "cristiano" })
function agregarSerie(dato, nombre) {

    dato.push(nombre)
    alert(`the added serie is:  ${series[4].Serie}`)

    dato.forEach(element => {
        alert(element.Serie)
    });
}

//<h2>Ejercicio 7: Extraer una subcadena de los nombres de las series</h2>
extraerSubcadenaNombres(series)
function extraerSubcadenaNombres(dato) {
    dato.forEach(element => {
        alert(element.Serie.slice(1, 9))
    });
}


//<h2>Ejercicio 8: Reemplazar una palabra en los nombres de las series</h2>
reemplazarPalabraNombres(series,"tomas")
function reemplazarPalabraNombres(dato,nombre){ 
dato.forEach(element => {
  console.log(element.Serie.replace(series[0].Serie,nombre))
    
});

    
}

    //<h2>Ejercicio 9: Verificar si los nombres de las series contienen una palabra</h2>
verificarPalabraEnNombres(series,"cristiano" )
function verificarPalabraEnNombres(datos, palabra){
datos.forEach(element => {
   alert(element.Serie.includes(palabra))
});}