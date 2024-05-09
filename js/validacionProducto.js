$(document).ready(function () {
    $('#formProducto').validate({
        rules: {
            nombreproducto: {
                required: true,
                minlength: 3,
                maxlength: 50
            },
            precio: {
                required: true,
                number: true,
                min: 0.01
            },
            cantidad: {
                required: true,
                number: true,
                min: 1
            },
            descripcion: {
                required: true,
                minlength: 5,
                maxlength: 500
            }
        },
        messages: {
            nombre: {
                required: "El nombre del producto es requerido",
                minlength: "El nombre del producto debe tener al menos 3 caracteres",
                maxlength: "El nombre del producto debe tener máximo 50 caracteres"
            },
            precio: {
                required: "El precio del producto es requerido",
                number: "El precio del producto debe ser un número",
                min: "El precio del producto debe ser mayor a 0"
            },
            cantidad: {
                required: "La cantidad del producto es requerida",
                number: "La cantidad del producto debe ser un número",
                min: "La cantidad del producto debe ser mayor a 0"
            },
            descripcion: {
                required: "La descripción del producto es requerida",
                minlength: "La descripción del producto debe tener al menos 5 caracteres",
                maxlength: "La descripción del producto debe tener máximo 500 caracteres"
            }
        }
    });
});