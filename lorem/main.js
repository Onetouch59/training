window.addEventListener('scroll', function(){
    let a = document.documentElement.scrollTop;
    console.log('a=' + a);
    
    let b = document.documentElement.scrollHeight;
    console.log('b=' + b);
    
    let c = document.documentElement.scrollWidth;
    console.log('c=' + c);
    let d = b - c;
    let e = (a / d ) *100;
    document.getElementById("bar").style.width = e + "%";
    });