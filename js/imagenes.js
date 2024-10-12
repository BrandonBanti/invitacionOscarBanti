// Mapeo de identificadores numéricos a URLs de imágenes
const imagenes = {
    1: 'public/img/boleto1.jpg',
    2: 'public/img/boleto2.jpg',
    3: 'public/img/boleto3.jpg',
    4: 'public/img/boleto4.jpg',
    5: 'public/img/boleto5.jpg',
    6: 'public/img/boleto6.jpg',
    7: 'public/img/boleto7.jpg',
    8: 'public/img/boleto8.jpg',
    9: 'public/img/boleto9.jpg',
};

// Función para obtener el valor de un parámetro en la URL
function obtenerParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// Obtiene el valor del parámetro 'imgID'
const imagenID = obtenerParametroURL('blt');

// Si el parámetro existe y coincide con un ID, cambia la imagen
if (imagenID && imagenes[imagenID]) {
    const imagen = document.getElementById('imagen');
    imagen.src = imagenes[imagenID]; // Obtiene la URL asociada al ID
    imagen.style.display = 'block'; // Muestra la imagen
    imagen.style.width = '90%';
    imagen.style.height = 'auto';
    imagen.style.borderRadius = '10px';
}