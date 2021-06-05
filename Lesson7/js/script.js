function date() {
    var date = new Date;
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekDay = weekDays[date.getDay()];
    var dayNum = date.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var month = months[date.getMonth()];
    var year = date.getUTCFullYear();
    var weekday, month;

    if (weekDay == "Friday"){
        let aside = document.getElementById("aside");
        aside.style.display = "block";
    }
    
    var display = weekDay + ", " + dayNum + " " + month + " " + year;

    document.getElementById("currentDate").innerHTML = display;
    document.getElementById("year").innerHTML = year;

}

// Code for responsive navigation
const hamButton = document.querySelector('#Btn');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => { navigation.classList.toggle('appear') }, false);

const images = document.querySelectorAll("[data-src]")
 function preloadImage(img){
     const src = img.getAttribute('data-src')
     if(!src){
         return;
     }
     img.src= src;
 }
const imgOptions= {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};
const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })

}, imgOptions);
images.forEach(image =>{
    imgObserver.observe(image);
});

var currentTime = today.getTime();

//Checks for a value stored in "lastVisited". If no value has been stored, it assigns the current time to "lastVisited." If a value has been stored, it can be subtracted from the current time in order to get how long it's been since the last site visit. The current time then replaces the previous value stored in "lastVisited."
if (!localStorage.getItem("lastVisited")) {
  localStorage.setItem("lastVisited", currentTime);
  document.querySelector("#days-since-last-visit").innerHTML = "Days Since Last Visit: 0"
}
else {
  var lastVisit = localStorage.getItem("lastVisited");
  localStorage.setItem("lastVisited", currentTime);
  //Dividing by 86,400,000 because time stamp is given in miliseconds and there are 1000 miliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, and 24 hours in a day (1000 * 60 * 60 * 24)
  var daysSinceVisit = Math.floor((currentTime - lastVisit) / 86400000);
  document.querySelector("#lastVisit").innerHTML = "Days Since Last Visit: " + daysSinceVisit;
}

