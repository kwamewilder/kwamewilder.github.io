function date() {
    var date = new Date;
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekDay = weekDays[date.getDay()];
    var dayNum = date.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var month = months[date.getMonth()];
    var year = date.getUTCFullYear();
    var weekday, month;
    
    var display = weekDay + ", " + dayNum + " " + month + " " + year;

    document.getElementById("currentDate").innerHTML = display;
    document.getElementById("year").innerHTML = year;
}

// Code for responsive navigation
const hamButton = document.querySelector('#Btn');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => { navigation.classList.toggle('appear') }, false);
