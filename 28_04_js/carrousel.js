const carrousel = document.getElementById('carrousel');
const btnRight = document.getElementById('btn-right');
const btnLeft = document.getElementById('btn-left');
let counter = 0;
carrousel.innerHTML = '0';

btnRight.addEventListener('click', rightClick);
function rightClick() {


    if(counter == 0){
        carrousel.innerHTML = '1';
        carrousel.style.backgroundImage = "url('image/img_1.jpg')";
        counter = 1;
    } 
    else if (counter == 1) {
        carrousel.innerHTML = '2';
        carrousel.style.backgroundImage = "url('image/img_2.jpg')";
        counter = 2;
    }
    else if (counter == 2) {
        carrousel.innerHTML = '3';
        carrousel.style.backgroundImage = "url('image/img_3.jpg')";
        counter = 3;
    }else if (counter == 3) {
        carrousel.innerHTML = '4';
        carrousel.style.backgroundImage = "url('image/img_4.jpg')";
        counter = 4;
    }
    else {
        carrousel.innerHTML = '0';
        carrousel.style.backgroundImage = "url('image/img_5.jpg')";
        counter = 0;
    } 
}

btnLeft.addEventListener('click', leftClick);
function leftClick() {
    console.log(counter);


    if(counter == 0){
        carrousel.innerHTML = '4';
        carrousel.style.backgroundImage = "url('image/img_4.jpg')";
        counter = 4;
    } 
    else if (counter == 4) {
        carrousel.innerHTML = '3';
        carrousel.style.backgroundImage = "url('image/img_3.jpg')";
        counter = 3;
    }
    else if (counter == 3) {
        carrousel.innerHTML = '2';
        carrousel.style.backgroundImage = "url('image/img_2.jpg')";
        counter = 2;
    }else if (counter == 2) {
        carrousel.innerHTML = '1';
        carrousel.style.backgroundImage = "url('image/img_1.jpg')";
        counter = 1;
    }
    else {
        carrousel.innerHTML = '0';
        carrousel.style.backgroundImage = "url('image/img_5.jpg')";
        counter = 0;
    } 
}