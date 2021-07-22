const url = "./data/directory.json";
fetch(url)
  .then((response) => response.json())
    .then((data) => {
        data.directory.forEach((directory, index) => {
            document.getElementById('rhd' + (index + 1)).innerHTML = directory.add;
            document.getElementById('rfd' + (index + 1)).innerHTML = directory.tel;
            document.getElementById('whd' + (index + 1)).innerHTML = directory.web;
            document.getElementById('wfd' + (index + 1)).innerHTML = directory.est;
            
        });
      });

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px"
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);


  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}