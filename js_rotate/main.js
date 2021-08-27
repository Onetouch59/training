document.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("resize", detectOrientation) ;
  detectOrientation() ;
});

function detectOrientation(){
        console.log('detect');
  if (window.matchMedia("(orientation: portrait)").matches) {
        console.log('portrait');
        rotateScreen.style.display = 'block';
        displayContent.style.display = 'none';
  }else{
        console.log('landscape');
        rotateScreen.style.display = 'none';
        displayContent.style.display = 'block';
  }
}    

document.addEventListener('DOMMouseScroll', functionScroll);
function functionScroll() {
  console.log('scroll');
}