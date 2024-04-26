function validarNombre() {
    let nombre = document.getElementById("idnombre").value;
    let vNombre = document.getElementById("validarNombre");
    console.log(nombre);
    if (nombre == "") {
        vNombre.className = "invalid-feedback";
        vNombre.innerHTML = "El nombre no puede estar vacio.";
    } else {
        vNombre.className = "valid-feedback";
        vNombre.innerHTML = "Valido.";
    }
}


function validarEmail() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let correo = document.getElementById("idemail").value;
    let vCorreo = document.getElementById("validarCorreo");
    if (correo.match(validRegex)) {
        vCorreo.className = "valid-feedback";
        vCorreo.innerText = "SI";
        return true;

    } else {
        vClass = "invalid-feedback";
        vIT = "NO";
        return false;
    }

}

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