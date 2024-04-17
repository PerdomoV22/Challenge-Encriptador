const regexInput = /^[a-z0-9 ]*$/;

function encriptarTexto() {
    const texto = document.getElementById("text-area").value;
    let textoEncriptado = '';

    if(!regexInput.test(texto) || texto.length === 0){
        alert("No puede dejar el campo vacio, tiene que escribir lo que desea encriptar");
    }else {
        textoEncriptado = texto.
        replaceAll("e", "enter").
        replaceAll("i", "imes").
        replaceAll("a", "ai").
        replaceAll("o", "ober").
        replaceAll("u", "ufat");
    }

    document.getElementById("text-area").value = "";
    mostrarRespuesta(textoEncriptado);
}

function desencriptarTexto() {
    const textoEncriptado = document.getElementById("text-area").value;
    let textoDesencriptado = '';

    if(!regexInput.test(textoEncriptado) || textoEncriptado.length === 0){
        alert("No puede dejar el campo vacio, tiene que escribir lo que desea encriptar");
    }else {
        textoDesencriptado = textoEncriptado.
        replaceAll("ufat", "u").
        replaceAll("ober", "o").
        replaceAll("ai", "a").
        replaceAll("imes", "i").
        replaceAll("enter", "e");
    }

    document.getElementById("text-area").value = "";
    mostrarRespuesta(textoDesencriptado);
}

function mostrarRespuesta(textoEncriptado) {
    let contenedor = document.querySelector(".contenedor-respuesta");
    let respuestaEncriptacion = document.createElement("p");

    respuestaEncriptacion.textContent = textoEncriptado;

    contenedor.innerHTML = '';
    contenedor.appendChild(respuestaEncriptacion);

    respuestaEncriptacion.id = "texto-encriptado";

    // Creamos un botón para copiar el texto encriptado
    let botonCopiar = document.createElement("button");
    botonCopiar.textContent = "Copiar";
    botonCopiar.className = "boton";
    botonCopiar.onclick = copiarTexto;
    contenedor.appendChild(botonCopiar);
}

function copiarTexto() {
    let textoEncriptado = document.getElementById("texto-encriptado").textContent;
    let areaTemporal = document.createElement("textarea");

    areaTemporal.value = textoEncriptado;
    document.body.appendChild(areaTemporal);
    areaTemporal.select();
    areaTemporal.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    document.body.removeChild(areaTemporal);
    alert("Texto encriptado copiado al portapapeles: " + textoEncriptado);
}
