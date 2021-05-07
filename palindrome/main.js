let str = prompt('mot')

function palindrome(str) {
    if(str.split('').reverse().join('') === str){
        console.log("c'est un palindrome");

    }
    else{
        console.log("ce n'est pas un palindrome")
    }
        
}
palindrome(str)