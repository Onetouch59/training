const logo = document.getElementById('logo');
let value = 0 ;
function animLogo(){
     // Votre code ici
     if (value <240) {
           value++;
            logo.style.width = value + "px"
            logo.style.height = value + "px"
            logo.style.fontSize = value+ "%"
           console.log('if '+value);
     }else{
           for (let i = 240; i < 0; i--) {
                animBack();
           }
     }
     
}
function animBack(){
    if (value == 240) {
        value--;
        logo.style.width = value + "px"
        logo.style.height = value + "px"
        logo.style.fontSize = value+ "%"
        console.log('if '+value);
  }
  
}
setInterval(animLogo, 10);
setInterval(animBack, 10);





/* **************** */
/* const logo = document.getElementById('logo');
let value = 0 ;
function animLogo(){
     if (value < 240) {
         value++;
         logo.style.width = value + "px"
         logo.style.height = value + "px"
         logo.style.fontSize = value+ "%"
     }
}
function animBack(){
    if (value > 240) {
        value--;
        logo.style.width = value + "px"
        logo.style.height = value + "px"
        logo.style.fontSize = value+ "%"
    }

}

    
        setInterval(animLogo, 10); 
        setInterval(animBack, 10); */
 




