/* function convert(){
    var input = document.querySelector("input").value;
    var output = document.querySelector("#output");
    output.innerHTML = "";
    for (var i = 0; i < input.length; i++){
      output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";
    }
  } */

const convert = document.getElementById("convert") ;
convert.addEventListener("click", function() {
    var msgToCode = document.getElementById("msgToCode").value;
    let crypted = document.getElementById("crypted");
    crypted.innerHTML = "";
    for (var i = 0; i < msgToCode.length; i++){
        crypted.innerHTML += msgToCode[i].charCodeAt(0).toString(2) + " ";
    }
})

  