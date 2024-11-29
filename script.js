const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let para = document.querySelector(".para");
let futureDate = new Date(2024, 11, 3, 11, 30, 0);
const year = futureDate.getFullYear();

let month = futureDate.getMonth();
month = months[month];

let day = futureDate.getDay();
day = weekdays[day];

const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
para.textContent = `Giveaway Ends On ${day}, ${date} ${month} ${year} At ${hours}:${mins}am`;

//future time

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1day = 24hr
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = (t % oneDay) / oneHour;
  hours = Math.floor(hours);
  let mins = (t % oneHour) / oneMin;
  mins = Math.floor(mins);
  let secs = (t % oneMin) / 1000;
  secs = Math.floor(secs);
  //update UI
  let spanDays = document.getElementById("days");
  let spanHours = document.getElementById("hours");
  let spanMins = document.getElementById("mins");
  let spanSecs = document.getElementById("secs");

  //assign values
  spanDays.textContent = days;
  spanHours.textContent = hours;
  spanMins.textContent = mins;
  spanSecs.textContent = secs;
  setTimeout(getRemainingTime, 1000);
  //stop the countdown when time is up
  if (t < 0) {
    clearInterval(countdownInterval);
    para.textContent = "Giveaway Ended!";
  }
}
getRemainingTime();
