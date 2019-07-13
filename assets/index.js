//15 sec timer
var t = 60;
var intervalId;

function countDown(){
    if (!intervalId){
        intervalId = setInterval(decrement, 1000);
    }
}

//timer countdown
function decrement(){
    t--;
    $('#countdown').fadeOut(300, function () {
        $('#countdown').text(t);
        $('#countdown').show();  
    });

    //when timer runs out:
    if(t===0){
        alert("YOU LOSE. TOO SLOW LOSER.");
    }    
}

countDown();

// function resetClock(){
//     clearInterval(intervalId);
//     intervalId=null;
//     t=15;
//     countDown();
// }



//initial health at 100 for each fighter
var userHealth = 100;
var enemyHealth = 100;


//user attacks
var bigAttack = 18;
var smallAttack = 8;

//enemy attacks
var enemyBigAttack = 21;
var enemySmallAttack = 7;


//on click events on all buttons and attacks
$(".smallAttack").on("click", function(){
    enemyHealth -= smallAttack;
    $("#enemyHealth").text(enemyHealth);
    if (enemyHealth <= 0){
        alert("you win");
}})
$(".bigAttack").on("click", function(){
    enemyHealth -= bigAttack;
    $("#enemyHealth").text(enemyHealth);
    if (enemyHealth <= 0){
        alert("you win");
}})
$(".enemySmallAttack").on("click", function(){
    userHealth -= enemySmallAttack;
    $("#userHealth").text(userHealth);
    if (userHealth <=0){
        alert("you lose");
}})
$(".enemyBigAttack").on("click", function(){
    userHealth -= enemyBigAttack;
    $("#userHealth").text(userHealth);
    if (userHealth <= 0){
        alert("you lose");
}})


// //checks health of user to start or end game
// function checkRound(){
//     console.log("Round 1 Begins");
//     if(userHealth -= 0){
//         console.log("game over");
//         alert("you lost");
//     }
//     if(enemyHealth -= 0){
//         console.log("you win");
//         alert("you win");
//     }
//     playround();

// }


//will be the function where the game is actually played
// function playRound(){

// }




