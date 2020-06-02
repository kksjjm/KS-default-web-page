const API_KEY = "0933b585dcece018f9b0306a6d56f4a8",
 COORDS = "coords_data";

function getWeather(lat,lon){
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  console.log(url);

  fetch(url).then(function(resp){
    return resp.json();
  }).then(function(json){
    console.log(json);
  });
}

function saveCoords(geoObj){
  localStorage.setItem(COORDS, JSON.stringify(geoObj));
}

function getCoords(geodata){
  const latitude = geodata.coords.latitude;
  const longitude = geodata.coords.longitude;
  const geoObj = {
    latitude,
    longitude
  }
  saveCoords(geoObj);
  getWeather(latitude, longitude);
}

function errorCoords(){
  alert("Can't access your location");
}

function askCoords(){
  navigator.geolocation.getCurrentPosition(getCoords, errorCoords);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askCoords();
  }else{
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();