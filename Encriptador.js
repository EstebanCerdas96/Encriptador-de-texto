function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenEncriptador = document.getElementById("imagenEncriptador");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length !=0 ) {
        document.getElementById("texto").value = textoCifrado.toLowerCase();
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        imagenEncriptador.src = "encriptado.png";
    } else {
        imagenEncriptador.src = "encriptar.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert ("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenEncriptador = document.getElementById("imagenEncriptador");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado.toLowerCase();
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        imagenEncriptador.src = "desencriptado.png";
    } else {
        imagenEncriptador.src = "encriptar.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert ("Debes ingresar algún texto");
    }
}
