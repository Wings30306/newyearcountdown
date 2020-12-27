
setInterval(function() {
let now = new Date();
let newYearStart = new Date(now.getFullYear() + 1, 0, 01);
let timeUntilNewYear = new Date(newYearStart - now);
months = timeUntilNewYear.getMonth()
days = timeUntilNewYear.getDate() - 1
hours = timeUntilNewYear.getHours() - 1
minutes = timeUntilNewYear.getMinutes()
seconds = timeUntilNewYear.getSeconds()

document.getElementById("months").innerHTML = months;
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
}, 1000)