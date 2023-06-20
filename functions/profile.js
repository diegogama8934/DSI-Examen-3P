//Navegar a la screen ver perfil, donde se podrá iniciar un quizz, eliminar perfil, o regresar a inicio

function viewProfile(){

    //Se quita la barra de navegación

    quitNavBar();

    const content = document.getElementById( 'content' );
    content.style.transform = `translateX(0px)`;
}

//Se quita la barra de navegación

function quitNavBar(){

    //Esconder barra de navegación

    const navBar = document.getElementById( 'nav-container' );
    navBar.setAttribute( 'class' , 'desvanecer' );

    //Después de 600 ms (para no afectar la visualiazción de la transición), se eliminan las funciones del botón

    setTimeout(() => {

        //Se seleccionan todos los botones de la navBar

        const btns = document.getElementsByClassName( 'nav-screen-item' );

        //La collección de HTML se pasa a un arreglo usando el spred (los 3 puntos)

        const btnsArr = [...btns];

        //Para cada boton, primero se quita la clase que tienen y luego se agrega la clase que va a permitir mantener solo su tamaño
        //(y así no afectar el estilo)

        for(let i = 0; i<btnsArr.length; i++){
            
            btnsArr[i].setAttribute( 'class' , '' );
            btnsArr[i].setAttribute( 'class' , 'nav-screen-item-aux' );
            
            //Hacer que el botón no se le pueda hacer click

            btnsArr[i].disabled = true;
        }
    }, 600)
}

//Regresar a la página principal

function backToMainScreen(){
    
    // Moverse a la pantalla principal
    
    moveToHome();

    // Mostrar la barra de navegación

    const navBar = document.getElementById( 'nav-container' );
    navBar.setAttribute( 'class' , 'aparecer' );
    
    //Devolver visualización y funciones de los botones de la barra de navegación

    // Se obtienen los botones y se pasan a un arreglo usando spread.

    const btns = document.getElementsByClassName( 'nav-screen-item-aux' );
    const btnsArr = [...btns];

    for(let i = 0; i<btnsArr.length; i++){
        

        btnsArr[i].setAttribute( 'class' , '' );
        btnsArr[i].setAttribute( 'class' , 'nav-screen-item' );
        
        //Hacer que el botón se le pueda hacer click

        btnsArr[i].disabled = false;
    }

}

