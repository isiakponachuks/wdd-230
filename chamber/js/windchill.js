 let t = document.querySelector('#t').textContent;
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


/*const temp = 60;

const wSpeed =30;

let windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

let windChill = Math.round(windChill);

document.getElementById('windChill').innerHTML = windChill;


*/