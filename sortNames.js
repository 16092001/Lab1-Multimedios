// Definimos una función llamada sortNames que recibe un array de nombres como parámetro.
function sortNames(names) {
    // Utilizamos el método sort() para ordenar los nombres alfabéticamente.
    // El método sort() ordena los elementos de un array in situ y devuelve el array ordenado.
    // Al pasar una función de comparación como argumento, los nombres se ordenarán de acuerdo al orden alfabético.
    const sortedNames = names.sort((a, b) => a.localeCompare(b));
    return sortedNames; // Devolvemos el array de nombres ordenados alfabéticamente.
}

// Ejemplo de uso:
const names = ['Paola', 'Roselyn', 'Karla', 'Alvin', 'Tony']; // Definimos un array de nombres desordenados.
const sortedNames = sortNames(names); // Llamamos a la función sortNames con el array de nombres como argumento.
console.log(sortedNames); // Imprimimos los nombres ordenados alfabéticamente.