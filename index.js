var n1 = Math.random();
n1 = n1*6;
n1 = Math.floor(n1)+1;


var n2 = Math.random();
n2 = n2*6;
n2 = Math.floor(n2)+1;

if(n1===1){
  document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
}
else if(n1===2){
  document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
}
else if(n1===3){
  document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
}
else if(n1===4){
  document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
}
else if(n1===5){
  document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
}
else if(n1===6){
  document.querySelectorAll("img")[0].setAttribute("src","dice6.png");
}

if(n2===1){
  document.querySelectorAll("img")[1].setAttribute("src","dice1.png");
}
else if(n2===2){
  document.querySelectorAll("img")[1].setAttribute("src","dice2.png");
}
else if(n2===3){
  document.querySelectorAll("img")[1].setAttribute("src","dice3.png");
}
else if(n2===4){
  document.querySelectorAll("img")[1].setAttribute("src","dice4.png");
}
else if(n2===5){
  document.querySelectorAll("img")[1].setAttribute("src","dice5.png");
}
else if(n2===6){
  document.querySelectorAll("img")[1].setAttribute("src","dice6.png");
}

if(n1>n2){
  document.querySelector("h1").innerHTML="player 1 wins";
}
else if(n2>n1){
  document.querySelector("h1").innerHTML="player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="draw";
}
