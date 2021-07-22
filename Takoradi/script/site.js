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

function buildChart() {
   if (data === undefined) {
      setTimeout(buildChart, 200);
   } else {
      let table = '<table id="priceChart">';
      table += '<caption>Max Persons and Price Chart <span class="smaller">(includes Tax)</span></caption>';
      table += '<tr><th colspan="2">&nbsp;</th><th colspan="2">Reservation</th><th colspan="2">Walk-In</th></tr>';
      table += '<tr><th>Rental Type</th><th>Max Persons</th><th>Half Day<br>(3 hrs)</th><th>Full Day</th><th>Half Day<br>(3 hrs)</th><th>Full Day</th></tr>';
      data.types.forEach(type => {
         type.rentals.forEach(rental => {
            table += '<tr><td>' + rental.rental_type + '</td><td>' + rental.max_persons + '</td><td>$' + rental.pricing.reservation.half_day;
            table += '</td><td>$' + rental.pricing.reservation.full_day + '</td><td>$' + rental.pricing.walk_in.half_day;
            table += '</td><td>$' + rental.pricing.walk_in.full_day + '</td></tr>'
         })
      });
      table += '</table>';
      document.getElementById('chart').innerHTML = table;
   }
}

function buildRates() {
      if (data === undefined) {
         setTimeout(buildRates, 200);
      } else {
         let html = "";
         data.types.forEach(type => {
            type.rentals.forEach(rental => {
               html += '<div><h3>' + rental.rental_type + '</h3>';
               html += '<div><img class="rental_image" src="' + rental.image + '"></div>';
               html += '<div class="rental_detail">' + rental.description  + '</div>';
               html += '<div class="rental_price">';
               html += 'Max Persons - ' + rental.max_persons + '<br><br>';
               html += '<span class="rental_price_lable">1/2 Day Reserved</span> $' + rental.pricing.reservation.half_day + '<br>';
               html += '<span class="rental_price_lable">Full Day Reserved</span> $' + rental.pricing.reservation.full_day + '<br>';
               html += '<span class="rental_price_lable">1/2 Day Walk-in</span> $' + rental.pricing.walk_in.half_day + '<br>';
               html += '<span class="rental_price_lable">Full Day Walk-in</span> $' + rental.pricing.walk_in.full_day + '<br>';
               html += '</div>';
               html += '<div><button class="button3" onclick="javascript:window.location.href=\'reservations.html\'">Reserve a ' + rental.rental_type + '</button></div>';             
               html += '</div>';
               html += '<hr class="rental_hr">';
            })
         });
         document.getElementById('rentals').innerHTML = html;
      }
   }

function buildRentals() {
   if (data === undefined) {
      setTimeout(buildRentals, 200);
   } else {
      let main = document.getElementById('home_main');
      data.types.forEach(type => {
         type.rentals.forEach(rental => {
            let parent = document.createElement("div");
            let img_div = document.createElement("div");
            img_div.setAttribute('class', 'rental_image_div');
            let img = document.createElement("img");
            img.setAttribute('src', rental.image);
            img.setAttribute('alt', rental.rental_type);
            img.setAttribute('class', 'rental_image');
            img_div.appendChild(img)
            let txt_div = document.createElement("div");
            txt_div.setAttribute('class', 'txt_div');
            txt_div.textContent = rental.description;
            parent.appendChild(img_div);
            parent.appendChild(txt_div);
            main.appendChild(parent);
         })
      });
   }
}

function loadRentalTypes() {
   if (data === undefined) {
      setTimeout(loadRentalTypes, 200);
   } else {
      let select = document.getElementById('rental_type');
      let option = document.createElement("option");
      option.innerText = "Select Type";
      select.appendChild(option);
      data.types.forEach(type => {
         type.rentals.forEach(rental => {
            option = document.createElement("option");
            option.innerText = rental.rental_type;
            select.appendChild(option);
         })
      });
   }
}

function toggle_nav() {
   document.getElementById("main_nav").classList.toggle("nav_hidden");
   document.getElementById("ham").classList.toggle("fade_out");
   document.getElementById("ham").classList.toggle("fade_in");
   document.getElementById("close").classList.toggle("fade_out");
   document.getElementById("close").classList.toggle("fade_in");
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


/* 5 day forecasts */
function buildForecast() {
   url ="https://api.openweathermap.org/data/2.5/forecast?id=2294915&units=imperial&APPID=4dc63840c593a4c37e15eb58b499f77f";
   fetch(url)
   .then((response) => response.json())
   .then((town) => {
      const townList = town.list;
      let daycount = 0;
      for (let i = 0; i < town.list.length; i++ ) {
         let day = townList[i].dt_txt;
         if (day.substr(11, 19) == '12:00:00') {
            daycount += 1;
            let dateParts = day.substr(0,10).split('-');
            let month = monthAbbrNames[+dateParts[1]-1];
            let date = month + " " + +dateParts[2];
            let dateElement = 'c_day' + daycount;
            document.getElementById(dateElement).innerHTML = date;

            // Get description
            let descriptionLower = townList[i].weather[0].description;
            let description = descriptionLower.charAt(0).toUpperCase() + descriptionLower.slice(1);
            let descriptionElement = 'c_condition' + daycount;
            document.getElementById(descriptionElement).innerHTML = description;

            // Get high
            let temp = Math.round(townList[i].main.temp_max) + " &#176;F";
            let tempElement = 'c_temp' + daycount;
            document.getElementById(tempElement).innerHTML = temp;

            // Get icon
            const imagesrc = 'https://openweathermap.org/img/w/' + townList[i].weather[0].icon + '.png';
            let imageElement = 'c_icon' + daycount;
            document.getElementById(imageElement).setAttribute('src', imagesrc);
            document.getElementById(imageElement).setAttribute('alt', description);
         }
      }
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