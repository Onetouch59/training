document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation) ;
    detectOrientation() ;
  });
  
  function detectOrientation(){
    if (window.matchMedia("(orientation: portrait)").matches) {
        rotateScreen.style.display='block';
        displayContent.style.display='none'
     }
     
     else { (window.matchMedia("(orientation: landscape)").matches) 
     rotateScreen.style.display='none';
     displayContent.style.display='block'
     }
  }
  