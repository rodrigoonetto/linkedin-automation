let desconectar = setInterval(desconecta, 5000);
let indice = 0;
let limite = 100;

function desconecta() {

    try {
    if (indice < limite) {
    document.getElementsByClassName("invitation-card__action-btn artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary ember-view")[0].click()
    document.getElementsByClassName("artdeco-modal__confirm-dialog-btn artdeco-button artdeco-button--2 artdeco-button--primary ember-view")[0].click()
    indice++
    }else{
        clearInterval(unfollowear);
        console.log(`Proceso terminado. Se han eliminado ${indice} invitacioness`)
    }
    } catch (error) {
        console.log(`ERROR:${error}`)

    }   
    



        
    
    

}



