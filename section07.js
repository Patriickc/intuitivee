/*----------new chapter: 07 JavaScript in the Browser_ DOM and Events Fundamentals */


/* 072 Selecting and Manipulating Elements*/

console.log(document.querySelector(".message").textContent);
// console.log(document.querySelector(".message"));
// document.querySelector(".message").textContent = "we have just change the content";
console.log(document.querySelector(".message").textContent);

// else

// console.log(document.querySelector(".score").textContent)
// document.querySelector(".score").textContent = 12;

// console.log(document.querySelector(".score").textContent);


//write, then we readed, we can get input some date and also seted
document.querySelector(".guess").value = 33;//write the data/get input
console.log(document.querySelector(".guess").value) //seted



/** 073 Handling Click Events */

// document.querySelector(".check").addEventListener("click", function (){
//     console.log(document.querySelector(".guess").value)

// })


document.querySelector(".check").addEventListener("click", function (){
    const guess = Number((document.querySelector(".guess").value))
//by default numarul care il dam la input e sting, de aceea punem NUmber();
console.log(guess)

if(!guess){
    document.querySelector(".message").textContent = "No number !"
}
})



/** 074 Implementing the Game Logic */

let secretNumb = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;


document.querySelector(".check").addEventListener("click", function (){
    const guess = Number((document.querySelector(".guess").value))
console.log(guess)

if(!guess){
    document.querySelector(".message").textContent = "No number !"
}else if(guess===secretNumb){
    document.querySelector(".message").textContent = "corect NR !";
    document.querySelector(".number").textContent = secretNumb;
console.log(secretNumb)// facea evident nr, daca il scot de aici, daca il las aici nu il vad
document.querySelector("body").style.backgroundColor = "#60b347";

if(score>highscore){
    highscore=score;
    document.querySelector(".highscore").textContent=highscore;
}

}else if(guess>secretNumb){
     
    if(score>1){
        document.querySelector(".message").textContent = " too high";
        score=score-1;
        document.querySelector(".score").textContent=score;
    }else{
        document.querySelector(".message").textContent = "you lost the game :(";
document.querySelector("body").style.backgroundColor = "#853b30";

    }

    
}else if(guess<secretNumb){

    if(score>1){
        document.querySelector(".message").textContent = " too low";
        score=score-1;
        document.querySelector(".score").textContent=score;
    }else{
        document.querySelector(".message").textContent = "sorry, game is over :("
document.querySelector("body").style.backgroundColor = "#853b30";

    }
    
}


});
// score = ... se duce la infinit, zero trebuie sa fie limita
// de aceea face intr-un if(){ inca in if() } 


// function resetfunction(){
//     alert("reseeet")
// }
document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    secretNumb = Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
})

/** 075 Manipulating CSS Styles */

// .style property of the element + .name of property we want to change: 
// document.querySelector("body").style.backgroundColor = "#853b30";






