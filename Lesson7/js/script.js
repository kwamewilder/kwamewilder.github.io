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



