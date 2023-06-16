var buttons=document.getElementsByClassName('option');

window.addEventListener('load',function(event){
    tiempoAcabado()
});
function tiempoAcabado(){
    setTimeout(function(){
        buttons[2].style.backgroundColor= '#37ff2c';
        setTimeout(function(){
            location.reload();
        },2000);
    },6000);
}
