const body = document.querySelector("body");

let number = 0;
const NUM_IMGES = 10;

function getImage(number){
  const hour = date.getHours();
  let img = new Image();
  if(hour<12){
    img.src = `img/moring/${number}.jpg`;
  }else if(hour >= 12 && hour < 18){
    img.src = `img/noon/${number}.jpg`;
  }else{
    img.src = `img/night/${number}.jpg`;
  }
  body.appendChild(img);
}

function loadImgNum(){
  number = Math.floor(Math.random(NUM_IMGES));
}

function init(){
  loadNumber();
  getImage(number);
}

init();