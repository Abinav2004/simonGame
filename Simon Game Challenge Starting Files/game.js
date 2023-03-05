
var userClickedPattern=[];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var started=false;  
var level=0;



$(document).on("keypress",function (){   //jquery method to add eventlistner to whole document
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true;
        

    }
    
});


$(".btn").on("click",function (){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    

});

function checkAnswer(currentLevel){
  
    
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
     console.log("success");
     if (userClickedPattern.length === gamePattern.length){
         setTimeout(function () {
             nextSequence();
           }, 1000);

     }
   
 }
     else{
        $("body").addClass("game-over");
        setTimeout(function (){$("body").removeClass("game-over"); },200);
        console.log("wrong");
        var wrong=new Audio("sounds/wrong.mp3");
        wrong.play();
        $("h1").text("Game Over, Press Any Key to Restart");
        startover();
       

     }    
}

 
function nextSequence() {
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);


    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
  }


function playSound(userChosenColor){
    switch(userChosenColor){
        case"green":
            var green=new Audio("sounds/green.mp3");
            green.play();
            break;
        case"blue":
            var blue=new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case"red":
            var red=new Audio("sounds/red.mp3");
            red.play();
            break;   
        case"yellow":
            var yellow=new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        default:
}

}
function animatePress(userChosenColor){
    $("div "+"#"+userChosenColor).addClass("pressed");
    setTimeout(function (){$("div "+"#"+userChosenColor).removeClass("pressed"); },90);
}
function startover(){
    
    level=0;
    gamePattern=[];
    started=false;




}



