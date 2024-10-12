const rainContainer = document.querySelector('.rain');
const numberOfDrops = 50; // Número de gotas a generar

for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    
    // Posición aleatoria horizontal
    drop.style.left = Math.random() * 100 + '%';
    
    // Duración aleatoria de la animación (entre 1.5s y 4s)
    drop.style.animationDuration = (Math.random() * 2.5 + 1.5) + 's';
    
    // Retardo aleatorio para escalonar el inicio de las gotas
    drop.style.animationDelay = Math.random() * 2 + 's';

    // Añadir la gota al contenedor
    rainContainer.appendChild(drop);
}