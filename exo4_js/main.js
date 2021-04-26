const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");
const alert = document.getElementById("alert");

checkPassword.addEventListener("keyup", function () {
 
    if (password.value === checkPassword.value ){
        alert.innerHTML= 'the passwords entered is ok';
        alert.style.color = 'green';
    }
    else {
        alert.innerHTML = 'the passwords entered don:\/t match';
        alert.style.color = 'red';

    }


});
/* password.addEventListener("keyup", function () {
    if (password.value.match(/[0-9]/&&/[^a-zA-Z\d]/)) 
    {
        alertNbr.style.color='green';
        alertNbr.innerHTML ='Mot de passe fort';
    } else {
        alertNbr.style.color='yellow'
        alertNbr.innerHTML ='Mot de passe faible';
    }
}); */
