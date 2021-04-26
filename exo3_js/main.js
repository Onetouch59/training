document.getElementById("input").addEventListener("keyup", function(event) {
    
    if (event.getModifierState("CapsLock")) {
        console.log(warning);

        warning.style.display = "block";
  
      } else {
  
        warning.style.display = "none";
  
      }
  
    });
   
    
  