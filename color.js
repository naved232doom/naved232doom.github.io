var numsquares=6;
var colors=generateRandomColor(numsquares);

console.log(colors);
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var target=document.querySelector("#newColor");
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");
var resetButton=document.querySelector("#newGameButton");
var h1=document.querySelector("h1");
var pickedColor=pickedColornew();
target.textContent=pickedColor;
h1.style.backgroundColor="steelblue";
var modeButton=document.querySelectorAll(".mode");

// for(var i=0;i<modeButton.length;i++){
//     modeButton[i].addEventListener("click",function(){
//         modeButton[0].classList.remove("selected");
//         modeButton[1].classList.remove("selected");
//     })
//     if(this.textContent=="Easy")
//     numsquareS=3;
//     else
//     numsquares=6;
//     reset();
// }

// function reset(){
//     resetButton.textContent="New Colors"
    
//     for(var i=0;i<squares.length;i++){
//         if(colors[i]){
//             squares[i].style.display="block";
//             squares[i].style.background=colors[i];
//         }
//     else
//         squares[i].style.display="none";
// }
//     colors=generateRandomColor(numsquares);
//     pickedColor=pickedColornew();
// target.textContent=pickedColor;
// h1.style.backgroundColor="steelblue";
// message.textContent="";

// }

 easyButton.addEventListener("click",function(){
     easyButton.classList.add("selected");
     hardButton.classList.remove("selected");
     numsquares=3;
      colors=generateRandomColor(numsquares);
      pickedColor=pickedColornew();
      target.textContent=pickedColor;
      for(var i=0;i<squares.length;i++){
          if(colors[i])
          squares[i].style.backgroundColor=colors[i];
          else
          squares[i].style.display="none";
      }
 });
 hardButton.addEventListener("click",function(){
     hardButton.classList.add("selected");
     easyButton.classList.remove("selected");
     numsquares=6;
     colors=generateRandomColor(numsquares);
      pickedColor=pickedColornew();
      target.textContent=pickedColor;
      for(var i=0;i<squares.length;i++){
         
          squares[i].style.display="block";
         
          squares[i].style.backgroundColor=colors[i];
         
      }
 });


resetButton.addEventListener("click",function(){
    this.textContent="New Colors"
    colors=generateRandomColor(numsquares);
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];}
    
    pickedColor=pickedColornew();
target.textContent=pickedColor;
h1.style.backgroundColor="steelblue";
message.textContent="";
});

for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];

    squares[i].addEventListener("click",function(){
        clickedColor=this.style.backgroundColor;
        console.log(pickedColor,clickedColor);
        if(this.style.backgroundColor===pickedColor){
        message.textContent="CORRECT!!";
        changeColors(clickedColor);
    h1.style.backgroundColor=clickedColor;resetButton.textContent="Play Again?"
}
        else{
        message.textContent="TRY AGAIN!!";
            this.style.backgroundColor="#232323";
    }

});
}
function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }

}
function pickedColornew(){
    var random=Math.floor(Math.random()*colors.length);
    console.log(colors[random]);
    return colors[random];
}
function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){

        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var red= Math.floor(Math.random()*255+1);
    var green= Math.floor(Math.random()*255+1);
    var blue= Math.floor(Math.random()*255+1);
    
    return "rgb("+red+", "+green+", "+blue+")";
}