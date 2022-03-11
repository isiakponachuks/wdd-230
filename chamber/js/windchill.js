

 
/*let t = document.querySelector('#t').textContent;
let s = document.querySelector('#s').textContent;
let windchill = '';

if (t <=50 && s > 3){
windchill = windChill(t,s);
windchill = `${windchill}&#176;F`;
}

else {
    windchill ='N/A';
}

document.querySelector('#w').innerHTML = windchill;
function windChill(temp,speed){ 
    return Math.pow(s,0.16) 
}
/*


/*const temp = 60;

const wSpeed =30;

let windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

let windChill = Math.round(windChill);

document.getElementById('windChill').innerHTML = windChill;


*/

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Nigeria,lagos&APPID=8dc8da65a8bf4742511f5faaf0ae532f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
  });

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;


document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;