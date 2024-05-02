// Validacion nombre
function validarNombre(nombre) {
    const regex = /^[a-zA-ZÀÁÉÈÍÓÚÜÑñáéèíóúüñ ]{2,40}$/;
    const vNombre = document.getElementById("vNombre");
    if (regex.test(nombre)) {
        vNombre.textContent = "Nombre válido";
        vNombre.classList.add("valido");
        vNombre.classList.remove("invalido");
    } else {
        vNombre.textContent = "Nombre no válido";
        vNombre.classList.add("invalido");
        vNombre.classList.remove("valido");
    }
}

// Validacion email
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const resultadoValidacion = document.getElementById("resultadoValidacion");

    if (regex.test(email)) {
        resultadoValidacion.textContent = "Correo electrónico válido";
        resultadoValidacion.classList.add("valido");
    } else {
        resultadoValidacion.textContent = "Correo electrónico no válido";
        resultadoValidacion.classList.add("invalido");
        resultadoValidacion.classList.remove("valido");
    }
}

//Validacion telefono
function validarTelefono(telefono) {
    const regex = /^\+569[0-9]{8}$/;
    const vTelefono = document.getElementById("vTelefono");
    if (regex.test(telefono)) {
        document.getElementById("vTelefono").textContent = "Teléfono válido";
        document.getElementById("vTelefono").classList.add("valido");
        document.getElementById("vTelefono").classList.remove("invalido");
    } else {
        document.getElementById("vTelefono").textContent = "Teléfono no válido";
        document.getElementById("vTelefono").classList.add("invalido");
        document.getElementById("vTelefono").classList.remove("valido");
    }
}

//Rellenar ciudades
function rellenarCiudades(region, ciudades) {
    const region = document.getElementById("region");
    const ciudades = document.getElementById("ciudad");
    ciudades.options.length = 0;
    const opcionDefault = document.createElement("option");
    opcionDefault.value = "";
    opcionDefault.textContent = "--Ciudad--";
    ciudades.appendChild(opcionDefault);
    if (region.value === "Metropolitana") {
        const opciones = ["Santiago", "Puente Alto", "Maipú", "San Bernardo", "La Florida"];
        opciones.forEach((opcion) => {
            const elemento = document.createElement("option");
            elemento.textContent = opcion;
            ciudades.appendChild(elemento);
        });
    }
    region.addEventListener("change", () => {
        rellenarCiudades(region, ciudades);
    });
}

//Validacion rut
let Fn = {
    validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        let tmp = rutCompleto.split('-');
        let digv = tmp[1];
        let rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function (T) {
        var M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}

//Validacion contraseña
function validarContraseña(pass1, pass2) {
    const vpass1 = document.getElementById(pass1).value;
    const vContraseña = document.getElementById("vContraseña");
    if (vpass1 === pass2) {
        vContraseña.textContent = "Contraseñas coinciden";
        vContraseña.classList.add("valido");
        vContraseña.classList.remove("invalido");
    } else {
        vContraseña.textContent = "Contraseñas no coinciden";
        vContraseña.classList.add("invalido");
        vContraseña.classList.remove("valido");
    }
}