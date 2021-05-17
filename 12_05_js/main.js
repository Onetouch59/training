let verifColor = 0;
document.getElementById('square').addEventListener('click', function(){
    if(verifColor == 0){
        document.getElementById('square').style.backgroundColor = 'red';
        verifColor = 1;
    }else if(verifColor == 1){
        document.getElementById('square').style.backgroundColor = 'green';
        verifColor = 2;
    }else{
        document.getElementById('square').style.backgroundColor = 'aqua';
        verifColor = 0;
    }
    
})