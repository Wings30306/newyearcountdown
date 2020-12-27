
setInterval(function () {
    const now = new Date();
    const newYearStart = new Date(now.getFullYear() + 1, 0, 01);
    const timeUntilNewYear = new Date(newYearStart - now);
    const months = timeUntilNewYear.getMonth()
    const days = timeUntilNewYear.getDate() - 1
    const hours = timeUntilNewYear.getHours() - 1
    const minutes = timeUntilNewYear.getMinutes()
    const seconds = timeUntilNewYear.getSeconds()

    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000)