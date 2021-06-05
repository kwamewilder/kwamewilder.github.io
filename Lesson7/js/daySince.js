var date = new Date();
var currentTime = date.getTime();

if (localStorage.getItem("lastTimeVisit") == null) {
  localStorage.setItem("lastTimeVisit", currentTime.toString());
  document.getElementById("lastvisit").innerHTML = "0";
} else {
  var lastTimeVisited = localStorage.getItem("lastTimeVisit");
  localStorage.setItem("lastTimeVisit", currentTime.toString());
  var daysSinceLastVisit = Math.floor((currentTime - lastTimeVisited) / 86400000);
  document.getElementById("lastvisit").innerHTML = daysSinceLastVisit;
}
