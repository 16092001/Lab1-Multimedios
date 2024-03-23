// Definimos la cadena proporcionada.
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

// Definimos una función llamada contarLetras que toma una cadena como entrada.
function contarLetras(str) {
    let letras = {}; // Creamos un objeto vacío para almacenar el recuento de letras.

    // Convertimos la cadena a minúsculas para que la comparación no sea sensible a mayúsculas.
    str = str.toLowerCase();

    // Iteramos sobre cada caracter en la cadena.
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Solo consideramos letras del alfabeto. Usamos una expresión regular para verificar si el caracter es una letra.
        if (/[a-z]/.test(char)) {
            // Si la letra ya está en el objeto, incrementamos su contador.
            // De lo contrario, inicializamos su contador en 1.
            letras[char] = (letras[char] || 0) + 1;
        }
    }

    return letras; // Devolvemos el objeto con el recuento de letras.
}

// Llamamos a la función contarLetras con la cadena proporcionada.
let recuentoLetras = contarLetras(par);
console.log(recuentoLetras); // Imprimimos el objeto con los recuentos de letras.