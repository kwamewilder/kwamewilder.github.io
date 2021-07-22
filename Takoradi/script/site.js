function date() {
   var date = new Date;
   var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var weekDay = weekDays[date.getDay()];
   var dayNum = date.getDate();
   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   var month = months[date.getMonth()];
   var year = date.getUTCFullYear();
   var weekday, month;

   if (weekDay == "Thursday"){
       let aside = document.getElementById("aside");
       aside.style.display = "block";
   }
   
   var display = weekDay + ", " + dayNum + " " + month + " " + year;

   document.getElementById("currentDate").innerHTML = display;
   document.getElementById("year").innerHTML = year;

}
//document.getElementById("today").innerHTML = dayName + ', ' + date.getDate() + ' ' + monthName  + ' ' + year;
//document.getElementById("year").innerHTML = year;
var data;
loadData();


function loadData() {
   const requestURL = 'https://raw.githubusercontent.com/trentonsouth/trentonsouth.github.io/master/scoots/data/types.json';

   fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      data = jsonObject;
   });
}


function toggle_nav() {
   document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
}



function weather() {
   const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=2294915&units=imperial&APPID=4dc63840c593a4c37e15eb58b499f77f';
fetch(apiURL)
 .then((response) => response.json())
 .then((town) => {
   let description = town.weather[0].description;
   document.getElementById('cTemp').innerHTML = Math.round(town.main.temp);
   document.getElementById('cHigh').innerHTML = Math.round(town.main.temp_max);
   document.getElementById('cWindspeed').innerHTML = Math.round(town.wind.speed);
   document.getElementById('cHumidity').innerHTML = town.main.humidity;
   document.getElementById('cCurrent').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
 });
}






const apiURL = 
'https://api.openweathermap.org/data/2.5/weather?id=2294915&units=imperial&appid=4dc63840c593a4c37e15eb58b499f77f';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('curr').innerText = jsObject.weather[0].description;
    document.getElementById('tempH').innerText = jsObject.main.temp_max;
    document.getElementById('hum').innerText = jsObject.main.humidity;
    document.getElementById('wSpeed').innerText = jsObject.wind.speed;
  });


  const apiURLforecast = 
  'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=4dc63840c593a4c37e15eb58b499f77f';
      fetch(apiURLforecast)
      .then((response) => response.json())
      .then((jsObject) => {
          const forecast = jsObject['list'];
  
          for (let i = 3; i < forecast.length; i += 8) {
          document.getElementById(`imgForecast${i}`).setAttribute('src', "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png");
          document.getElementById(`tempForecast${i}`).innerText = forecast[i].main.temp;
          }
  
  });

