function changePosition(){
    
    // Elemento que voy a mover
    const contenido = document.getElementById('content');

    //Número de pixeles que se moverá
    const pixeles = document.getElementById('screen-home').offsetWidth;

    // Movimiento de los elementoss
    contenido.style.transform = `translateX(-${pixeles}px)`;
}