let conectar = setInterval(conecta, 5000);
let indice = 0;

function conecta() {

    try {
        //1° hacer click en CONECTAR SON 10 POR PAGINA
    document.getElementsByClassName("search-result__action-button search-result__actions--primary artdeco-button artdeco-button--default artdeco-button--2 artdeco-button--secondary")[indice].click()
   
    } catch (error) {
        console.log("Contacto ya conectado")

    }   
    
    if (indice < 9) {
        indice++
        console.log(`Indice está en: ${indice}`)
        window.scrollTo( 0, 3000 );
        console.log("Scrollear")
    } else {
        document.getElementsByClassName("artdeco-pagination__button artdeco-pagination__button--next artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view")[0].click()
        console.log("Pasar de pagina")
        indice = 0;
        console.log(`Indice Reseteado`)
        console.log(`Indice está en: ${indice}`) 
    }
    //2° hacer click en agregar nota
    document.getElementsByClassName("mr1 artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--secondary ember-view")[0].click()

    //3° completar el texarea de la invitacion
    document.getElementsByClassName("send-invite__custom-message mb3 ember-text-area ember-view")[0].focus();
    document.execCommand('insertText', false, 'Hola, buenas tardes! Estamos en búsqueda de desarrolladores JAVA Full-Stack. Ofrecemos excelente sueldo --$200.000-- y beneficios! Por favor si estas interesado agregame que te cuento mas. Gracias.');

    //4° Darle a aceptar
    document.getElementsByClassName("ml1 artdeco-button artdeco-button--3 artdeco-button--primary ember-view")[0].click()

        
    
    

}



