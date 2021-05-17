window.onscroll = slideDown;

function slideDown() {
    var intElemScrollTop = document.documentElement.scrollTop;
    console.log(intElemScrollTop);
    if (intElemScrollTop < 200) {
        document.getElementById("navbar").style.top = '0';
    }
    else{
        document.getElementById("navbar").style.top = '-56px';
    }
   }