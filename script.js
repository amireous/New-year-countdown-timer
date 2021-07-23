"use strict";

// EL stands for element
const dayEL = document.querySelector(".day");
const hourEL = document.querySelector(".hour");
const minuteEL = document.querySelector(".minute");
const secondEL = document.querySelector(".second");

const newYearCountDown = function () {
  // declare dates
  const newYearDate = new Date("January 1, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const remainingTime = newYearDate - now;

  // date conversion measures
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculate date stuff
  const textDays = String(Math.floor(remainingTime / day)).padStart(2, 0);
  const textHours = String(Math.floor((remainingTime % day) / hour)).padStart(
    2,
    0
  );
  const textMinutes = String(
    Math.floor((remainingTime % hour) / minute)
  ).padStart(2, 0);
  const textSeconds = String(
    Math.floor((remainingTime % minute) / second)
  ).padStart(2, 0);

  // use them with DOM elemnts
  dayEL.textContent = textDays;
  hourEL.textContent = textHours;
  minuteEL.textContent = textMinutes;
  secondEL.textContent = textSeconds;
};

setInterval(newYearCountDown, 1000);
