//Se coloca el contenido en la screen principal y se colorea el boton de la nav bar para que esté activo

function loadApp(){

    //Como la primera Screen de la App es la del juego, cuando la página cargue se tiene que mover a la página de inicio.

    //Se selecciona todo el contenido y el número de pixeles que se va a mover-

    const content = document.getElementById( 'content' );
    const pixeles = document.getElementById( 'screen-home' ).offsetWidth;

    //Se quitan los estilos que había para que no se viera la página de juego de manera instantánea y se traslada al mismo lugar 
    //(es decir, no se mueve, solamente aquí se hace la funcionalidad para que siga el mismo procedimiento de las demás pantallas
    //y no se tenga que mover siempre accediendo a su atributo del elemento).

    content.setAttribute( 'style' , '' );
    content.style.transform = `translateX(-${ pixeles }px)`

    //Después de que se haya cargado las propiedades debidas (en un tiempo considerado de medio segundo) se pondrá que las animaciones
    //que tenga cuando se transforme, duren 1.5 segundos.

    setTimeout(() => {
        content.style.transition = "transform 1.5s";
    }, 500)

    //Se pone el botón de inicio como que está "Activo"

    const btnHome = document.getElementById( 'first-btn' );
    btnHome.setAttribute( 'style' , 'background-color: #EE7F64;' );

    loadUsers();
    classifyUsers();
}