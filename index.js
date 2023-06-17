function colorHomeActive(){
    const btnHome = document.getElementById('first-btn');
    btnHome.setAttribute("style", "background-color: #EE7F64;")
}

function quitColor(){
    const btns = document.getElementsByClassName( 'nav-screen-item' )
    const btnsArr = [...btns]
    
    const btn = btnsArr.find(b => b.style.backgroundColor == "rgb(238, 127, 100)");
    btn.style = "";
}

function moveHowToPlay(){
    //Quitar color del boton de origen
    quitColor();

    const btnActual = document.getElementById('second-btn');
    btnActual.setAttribute("style","background-color: #EE7F64;");

    // Elemento que voy a mover
    const contenido = document.getElementById( 'content' );

    //Número de pixeles que se moverá
    const pixeles = document.getElementById( 'screen-home' ).offsetWidth;

    // Movimiento de los elementoss
    contenido.style.transform = `translateX(-${pixeles}px)`;
}

function moveToHome(){
    //Quitar color del boton de origen
    quitColor();

    const btnActual = document.getElementById('first-btn');
    btnActual.setAttribute("style","background-color: #EE7F64;");

    // Elemento que voy a mover
    const contenido = document.getElementById( 'content' );

    //Número de pixeles que se moverá
    const pixeles = document.getElementById( 'screen-home' ).offsetWidth;

    // Movimiento de los elementoss
    contenido.style.transform = `translateX(0px)`;
}

function moveClasification(){
    //Quitar color del boton de origen
    quitColor();

    const btnActual = document.getElementById('third-btn');
    btnActual.setAttribute("style","background-color: #EE7F64;");

    // Elemento que voy a mover
    const contenido = document.getElementById( 'content' );

    //Número de pixeles que se moverá
    const pixeles = document.getElementById( 'screen-home' ).offsetWidth;

    // Movimiento de los elementoss
    contenido.style.transform = `translateX(-${2*pixeles}px)`;
}

function moveTeam(){
    //Quitar color del boton de origen
    quitColor();

    const btnActual = document.getElementById('last-btn');
    btnActual.setAttribute("style","background-color: #EE7F64;");

    // Elemento que voy a mover
    const contenido = document.getElementById( 'content' );

    //Número de pixeles que se moverá
    const pixeles = document.getElementById( 'screen-home' ).offsetWidth;

    // Movimiento de los elementoss
    contenido.style.transform = `translateX(-${3*pixeles}px)`;
}

function addUser(){

    const screen = document.getElementById( 'screen-home' );
    const botonAddUser = document.getElementById( 'btn-add-user' );

    const div = document.createElement( 'div' );
    const inputName = document.createElement( 'input' );
    const buttonAceptar = document.createElement( 'button' );
    const buttonCancelar = document.createElement( 'button' );
    
    inputName.type = Text;
    inputName.setAttribute( 'class' , 'input-nombre' );
    inputName.setAttribute( 'placeholder' , 'Escribe tu nombre' );
    inputName.setAttribute( 'id' , 'ipt-add-user' );

    buttonAceptar.setAttribute( 'type' , 'submit' );
    buttonAceptar.setAttribute( 'id' , 'btn-submit-name')
    buttonAceptar.setAttribute( 'onclick' , 'saveUser()' )
    buttonAceptar.innerText = 'Aceptar'

    buttonCancelar.setAttribute( 'type' , 'button' );
    buttonCancelar.setAttribute( 'id' , 'btn-cancel-name' );
    buttonCancelar.setAttribute( 'onclick' , 'cancelAddUser()' )
    buttonCancelar.innerText = 'Cancelar'

    div.setAttribute( 'class' , 'input-name-container' );
    div.setAttribute( 'id' , 'input-name-container')

    div.append( inputName , buttonAceptar , buttonCancelar );
    screen.appendChild( div );

    botonAddUser.disabled = true;
}

function saveUser(){

    const inputNombre = document.getElementById('ipt-add-user');

    if (inputNombre.value == "") {
        return;
    }

    const users = document.getElementById( 'users' );
    const div = document.getElementById( 'input-name-container' );
    const botonAddUser = document.getElementById( 'btn-add-user' );
    
    const p = document.createElement( 'p' );
    p.innerText = inputNombre.value;
    p.setAttribute( 'class' , 'user' );

    users.insertBefore(p, document.getElementById( 'btn-add-user' ));
    div.remove();
    botonAddUser.disabled = false;
}

function cancelAddUser(){
    const div = document.getElementById( 'input-name-container' );
    const botonAddUser = document.getElementById( 'btn-add-user' );

    div.remove()
    botonAddUser.disabled = false;
}