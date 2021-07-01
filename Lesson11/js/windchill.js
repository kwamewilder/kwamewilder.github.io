
let tempH = parseFloat(document.getElementById("tempH").innerText);
let wSpeed = parseFloat(document.getElementById("wSpeed").innerText);

if (tempH < 51 && wSpeed > 3) {
    let wChill = 35.74 + 0.6215 * tempH - 35.75 * Math.pow(wSpeed, .16) + .4275 * tempH * Math.pow(wSpeed, .16);
    document.getElementById("wChill").innerText = parseInt(wChill);
}else{
    document.getElementById("wChill").innerText = "N/A";
}

