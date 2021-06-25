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
    

}

// Code for responsive navigation
const hamButton = document.querySelector('#Btn');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => { navigation.classList.toggle('appear') }, false);

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

if (day == "Friday"){
    let aside = document.getElementById("aside");
    aside.style.display = "block";
}

//get all images
let imagesToLoad = document.querySelectorAll("img[data-src]");

//changes the path from data-src to src
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
}

//verify if intersection observer is supported
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    //iterate to each imgs
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });

    //load all imgs
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

function loadTowns() {
    const requestURL = '/Lesson9/towndata.json';
 
    fetch(requestURL)
    .then(function (response) {
       return response.json();
    })
    .then(function (jsonObject) {
       const towns = jsonObject['towns'];
       let preston;
       let sodasprings;
       let fishhaven;
       for (let i = 0; i < towns.length; i++ ) {
          switch (towns[i].name) {
             case "Preston":
                preston = buildTownCard(towns[i], 'p');
             break;
             case "Soda Springs":
                sodasprings = buildTownCard(towns[i], 'sp');
             break;
             case "Fish Haven":
                fishhaven = buildTownCard(towns[i], 'fh');
             break;
          }
       }
       document.querySelector('main').appendChild(preston);
       document.querySelector('main').appendChild(sodasprings);
       document.querySelector('main').appendChild(fishhaven);
    });
 }
 
 function buildTownCard(town, prefix) {
    let section = document.createElement('section');
    let divDetail = document.createElement('div')
    divDetail.setAttribute('class', 'city_home city_detail')
    divDetail.setAttribute('id', prefix + '_text');
    let image = document.createElement('img');
    image.setAttribute('src', './images/' + town.photo);
    image.setAttribute('class', 'city_home city_image');
    image.setAttribute('alt', town.name)
    image.setAttribute('id', prefix + '_image');
    let name = document.createElement('h2');
    name.textContent = town.name;
    let motto = document.createElement('h5');
    motto.textContent = town.motto;
    let yearFounded = document.createElement('h4');
    yearFounded.textContent = 'Year Founded: ' + town.yearFounded;
    let currentPopulation = document.createElement('h4');
    currentPopulation.textContent = 'Population: ' + town.currentPopulation;
    let averageRainfall = document.createElement('h4');
    averageRainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
 
    //Add elements into section
    divDetail.appendChild(name);
    divDetail.appendChild(motto);
    divDetail.appendChild(yearFounded);
    divDetail.appendChild(currentPopulation);
    divDetail.appendChild(averageRainfall);
    section.appendChild(divDetail);
    section.appendChild(image);
    return section;
 }

