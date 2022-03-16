let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
windchill = windChill(t, s);
windchill = `${windchill} &#176;F`;
} 
else {
windchill = "N/A";}

document.querySelector("#w").innerHTML = windchill;

function windChill(temp, speed) {
return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 * temp * Math.pow(speed,0.16);}

const t = parseInt(document.querySelector("#temp").textContent);
const s = parseInt(document.getElementById("speed").textContent);

if(t <= 50 && s > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
}
else {
        document.querySelector("#windchill").innerHTML = "N/A"
    }