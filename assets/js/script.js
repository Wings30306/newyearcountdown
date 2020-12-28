setInterval(function () {
    const now = new Date();
    const newYearStart = new Date(now.getFullYear() + 1, 0, 01);
    const secondsUntilNewYear = Math.floor((newYearStart - now)/1000);
    const weeks = Math.floor(secondsUntilNewYear/(7*24*60*60))
    const days = Math.floor(secondsUntilNewYear % (7*24*60*60) / (24*60*60))
    const hours = Math.floor(secondsUntilNewYear % (24*60*60) / (60*60))
    const minutes = Math.floor(secondsUntilNewYear % (60*60) / (60))
    const seconds = Math.floor(secondsUntilNewYear % 60)

    document.getElementById("nextyear").innerHTML = now.getFullYear() + 1
    document.getElementById("weeks").innerHTML = weeks;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    if (weeks == 0) {
        document.getElementById("weeks").parentElement.classList.add("d-none");
        Array.from(document.getElementsByClassName("padding-for-five-cols")).forEach(element => {
            element.classList.add("d-none")
        });
        if (days == 0) {
            document.getElementById("days").parentElement.classList.add("d-none")
            if (hours == 0) {
                document.getElementById("hours").parentElement.classList.add("d-none")
                if (minutes == 0) {
                    document.getElementById("minutes").parentElement.classList.add("d-none")
                }
            }
        }
    }

}, 1000)