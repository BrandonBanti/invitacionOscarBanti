const targetDate = new Date("Jan 11, 2025 18:00:00").getTime();

const countdown = setInterval(() => {
const now = new Date().getTime();
const timeLeft = targetDate - now;

const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

if (timeLeft < 0) {
    clearInterval(countdown);
    document.querySelector(".container").innerHTML = "<h2>¡Feliz Año Nuevo!</h2>";
}
}, 1000);