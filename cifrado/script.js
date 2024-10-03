// Cifrado César
function cifrarCesar() {
    let mensaje = document.getElementById("cesarMensaje").value;
    let desplazamiento = parseInt(document.getElementById("cesarClave").value);
    let resultado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let codigo = mensaje.charCodeAt(i);

        // Solo cifrar letras mayúsculas y minúsculas
        if (codigo >= 65 && codigo <= 90) {
            resultado += String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) {
            resultado += String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
        } else {
            resultado += mensaje[i]; // No cifra caracteres que no son letras
        }
    }

    document.getElementById("cesarResultado").value = resultado;
}

function descifrarCesar() {
    let mensaje = document.getElementById("cesarMensaje").value;
    let desplazamiento = parseInt(document.getElementById("cesarClave").value);
    let resultado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let codigo = mensaje.charCodeAt(i);

        // Solo descifrar letras mayúsculas y minúsculas
        if (codigo >= 65 && codigo <= 90) {
            resultado += String.fromCharCode(((codigo - 65 - desplazamiento + 26) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) {
            resultado += String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
        } else {
            resultado += mensaje[i]; // No descifra caracteres que no son letras
        }
    }

    document.getElementById("cesarResultado").value = resultado;
}

// Cifrado Escítala
function cifrarEscitala() {
    let mensaje = document.getElementById("escitalaMensaje").value;
    let columnas = parseInt(document.getElementById("escitalaClave").value);
    let resultado = '';

    for (let i = 0; i < columnas; i++) {
        for (let j = i; j < mensaje.length; j += columnas) {
            resultado += mensaje[j];
        }
    }

    document.getElementById("escitalaResultado").value = resultado;
}

function descifrarEscitala() {
    let mensaje = document.getElementById("escitalaMensaje").value;
    let columnas = parseInt(document.getElementById("escitalaClave").value);
    let filas = Math.ceil(mensaje.length / columnas);
    let resultado = Array(mensaje.length).fill('');
    
    let index = 0;
    for (let i = 0; i < columnas; i++) {
        for (let j = i; j < mensaje.length; j += columnas) {
            resultado[j] = mensaje[index++];
        }
    }

    document.getElementById("escitalaResultado").value = resultado.join('');
}
