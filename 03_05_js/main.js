const fiz = document.getElementById ('fiz');


for( let i = 1; i<=100; i++){
    if (Number.isInteger(i/3) && Number.isInteger(i/5) ){
        console.log('fizzbuzz');
    } else if (Number.isInteger(i/3)){
        console.log('fizz');
    } else if  (Number.isInteger(i/5)){
            console.log('buzz');
    } else {
        console.log(i);
    }
}
/* for( let i = 1; i<=100; i++){
    if(!(i%5) && !(i%3)){
    console.log('fizzbuzz');}

        if (!(i%5)){
        console.log('buzz');}

            if (!(i%3)){
            console.log('fizz');}

                else{
                console.log(i);}
} */