//Colección de usuarios
const userCollection=db.collection('users')
var users=[];

//Agregar usuario
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

//Guardar usuario cuando haya algún texto en el input
function saveUser(){

    const inputNombre = document.getElementById( 'ipt-add-user' );

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

    agregarUser(inputNombre.value);
}

//Cancelar acción de crear usuario
function cancelAddUser(){
    const div = document.getElementById( 'input-name-container' );
    const botonAddUser = document.getElementById( 'btn-add-user' );

    div.remove()
    botonAddUser.disabled = false;
}

function loadUsers() {
    const userList = document.getElementById('users');
    const addUserButton = document.getElementById('btn-add-user');
    // if (userList.children.length) {
    //   userList.innerHTML = '';
    // }
    userCollection.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var data = doc.data();
        users.push(data);
      });
      console.log(users);
      users.forEach(user => {
        const userPElement = document.createElement('p');
        userPElement.innerText = user.nombre;
        userPElement.setAttribute('class', 'user');
        userList.insertBefore(userPElement,addUserButton);
      });
    }).catch(function(error) {
      console.log(error);
    });
}

function agregarUser(Nombre){
    const userDoc=db.collection('users').doc(Nombre);
    userDoc.set({
        nombre: Nombre,
        puntuacionM: 0,
        tiempo: 0,
        preguntasCont:{
            pregunta1: false,
            pregunta2: false,
            pregunta3: false,
            pregunta4: false,
            pregunta5: false,
            pregunta6: false,
            pregunta7: false,
            pregunta8: false,
            pregunta9: false,
            pregunta10: false,
            pregunta11 :false,
            pregunta12: false,
            pregunta13: false,
            pregunta14: false,
            pregunta15: false,
            pregunta16: false,
            pregunta17: false,
            pregunta18: false,
            pregunta19: false,
            pregunta20: false,
            pregunta21: false,
            pregunta22: false,
            pregunta23: false,
            pregunta24: false,
            pregunta25: false,
            pregunta26: false,
            pregunta27: false,
            pregunta28: false,
            pregunta29: false,
            pregunta30: false
        }
    })
    .then(function() {
        console.log('Usuario agregada exitosamente');
    })
      .catch(function(error) {
        console.error('Error al agregar el usuario:', error);
    });
}

function classifyUsers() {
    userCollection.get().then(function(querySnapshot) {
      const users = [];
      querySnapshot.forEach(function(doc) {
        var data = doc.data();
        users.push(data);
      });
  
      const sortedUsers = users.sort(function(a, b) {
        if (a.puntuacionM !== b.puntuacionM) {
          return b.puntuacionM - a.puntuacionM;
        } else {
          return a.tiempo - b.tiempo;
        }
      });
  
      const podio = sortedUsers.slice(0, 3).map(function(user, index) {
        const lugar = index + 1;
        return {
          nombre: user.nombre,
          puntuacionM: user.puntuacionM,
          tiempo: user.tiempo,
          lugar: lugar
        };
      });
      const podioList=document.getElementById('podio');
      const userDivElement1=document.createElement('div');
      const userPElement1=document.createElement('p');
      const userSpanElement1=document.createElement('span');
      const userImgElement1=document.createElement('img');
      userDivElement1.setAttribute('class','lugar-podio');
      userDivElement1.setAttribute('id','first-place');
      userSpanElement1.setAttribute('style','font-weight: 900;');
      userImgElement1.setAttribute('src','./src/medalla-oro.png');
      userImgElement1.setAttribute('alt','Medalla oro');
      userImgElement1.setAttribute('class','medalla');

      const userDivElement2=document.createElement('div');
      const userPElement2=document.createElement('p');
      const userSpanElement2=document.createElement('span');
      const userImgElement2=document.createElement('img');
      userDivElement2.setAttribute('class','lugar-podio');
      userDivElement2.setAttribute('id','second-place');
      userSpanElement2.setAttribute('style','font-weight: 900;');
      userImgElement2.setAttribute('src','./src/medalla-plata.png');
      userImgElement2.setAttribute('alt','Medalla plata');
      userImgElement2.setAttribute('class','medalla');

      const userDivElement3=document.createElement('div');
      const userPElement3=document.createElement('p');
      const userSpanElement3=document.createElement('span');
      const userImgElement3=document.createElement('img');
      userDivElement3.setAttribute('class','lugar-podio');
      userDivElement3.setAttribute('id','third-place');
      userSpanElement3.setAttribute('style','font-weight: 900;');
      userImgElement3.setAttribute('src','./src/medalla-bronce.png');
      userImgElement3.setAttribute('alt','Medalla bronce');
      userImgElement3.setAttribute('class','medalla');

    podio.forEach(user=>{
        if(user.lugar===1){
            userSpanElement1.innerHTML = user.nombre + '<br>';
            userPElement1.innerHTML = user.puntuacionM + '/5 <br>' + user.tiempo + ' seg';
            userPElement1.prepend(userSpanElement1);
            userDivElement1.appendChild(userPElement1);
            userDivElement1.appendChild(userImgElement1);

            console.log(userDivElement1);
        }
        else if(user.lugar===2){
            userSpanElement2.innerHTML = user.nombre + '<br>';
            userPElement2.innerHTML = user.puntuacionM + '/5 <br>' + user.tiempo + ' seg';
            userPElement2.prepend(userSpanElement2);
            userDivElement2.appendChild(userPElement2);
            userDivElement2.appendChild(userImgElement2);

            console.log(userDivElement2);
        }else if(user.lugar===3){
            userSpanElement3.innerHTML = user.nombre + '<br>';
            userPElement3.innerHTML = user.puntuacionM + '/5 <br>' + user.tiempo + ' seg';
            userPElement3.prepend(userSpanElement3);
            userDivElement3.appendChild(userPElement3);
            userDivElement3.appendChild(userImgElement3);

            console.log(userDivElement3);
        }
        podioList.appendChild(userDivElement2);
        console.log(typeof userDivElement2);
        podioList.appendChild(userDivElement1);
        podioList.appendChild(userDivElement3);
        console.log(podioList);
    })
      console.log(podio);
    }).catch(function(error) {
      console.log(error);
    });

}