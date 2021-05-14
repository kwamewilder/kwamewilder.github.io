const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let dateNum = date.getDate();
let dayNum = date.getDay();

let day;
for (let i = 0; i < days.length - 1; i++) {
    if (i == dayNum) {
        day = days[i];
    }
}

document.getElementById("dateOfDay").innerHTML = day + ", " + dateNum + " " + months[month] + " " + year + ".";

function toggleMenu(){
    document.getElementById("navigation").classList.toggle("hide"); 
}