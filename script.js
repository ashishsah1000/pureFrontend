

  var g=1;
  var banner=document.getElementsByClassName("banner");
var colors=["red","green","blue","purple","wheat","orange"];
function greet(){

  var a = parseInt(Math.random()*10);
  console.log(a);
  if(a>5)
    a=a-4;
  banner[0].style.background=colors[a];
}

setInterval(greet,5000);