//15 sec timer
var t = 15;
var intervalId;
function countDown(){
    if (!intervalId){
        intervalId = setInterval(decrement, 1000);
    }
}

// countDown();

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
        resetClock();
    }  
}

function resetClock(){
    clearInterval(intervalId);
    intervalId=null;
    t=15;
    countDown();
}




//initial health at 100 for each fighter
var userHealth = 180;
var enemyHealth = 200;


//user attacks
var bigAttack = 24;
var smallAttack = 8;
var specialAttack = 36;

//enemy attacks
var enemyBigAttack = 21;
var enemySmallAttack = 7;
var enemySpecialAttack = 34;


//progress bar functions
//HERO small attack clicks
var counter=0;
function moveBy10(x){
  var width =10;
  var bar = document.getElementById('bar');
  counter++;
  if(counter*x < 101){
    bar.style.width = counter*x +'%';

  }
}



//ENEMY small attack clicks
var counter1=0;
function moveBy20(x){
  var width =10;
  var bar1 = document.getElementById('bar1');
  counter1++;
  if(counter1*x < 101){
    bar1.style.width = counter1*x +'%';
  } 
}
//reset BAR when full and big attack is clicked(hero)
function reset(){
    if (document.getElementById("bar").style.width === "100%"){
    document.getElementById("bar").style.width = "0%";
    } else {
        moveBy10();
        counter++;
    }
}
function reset1(){
    if (document.getElementById("bar1").style.width === "100%"){
    document.getElementById("bar1").style.width = "0%";
    } else {
        moveBy20();
        counter1++;
    }
}



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
$("#heroSpecial").on("click", function(){
    enemyHealth -= specialAttack;
    console.log(specialAttack);
    $("#enemyHealth").text(enemyHealth);
    if(enemyHealth <= 0){
        alert("FATALITY");
}})
$(".enemySmallAttack").on("click", function(){
    userHealth -= enemySmallAttack;
    $("#userHealth").text(userHealth);
    if (userHealth <= 0){
        alert("you lose");
}})
$(".enemyBigAttack").on("click", function(){
    userHealth -= enemyBigAttack;
    $("#userHealth").text(userHealth);
    if (userHealth <= 0){
        alert("you lose");
}})
$("#enemySpecial").on("click", function(){
    userHealth -= enemySpecialAttack;
    console.log(enemySpecialAttack);
    $("#userHealth").text(userHealth);
    if(userHealth <= 0){
        alert("FATALITY");
}})







