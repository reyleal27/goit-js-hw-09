import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const myInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
    if (selectedDate < new Date()){
        Notiflix.Notify.failure('Please choose a date in the future');
        startButton.disabled = "disabled";
        console.log(selectedDate);
    }
    else {
      startButton.disabled = false;
        console.log(selectedDate.getTime());
    }
},
  };

const datePicker = flatpickr(myInput, options);



startButton.addEventListener("click", function() {
    const countdownDate = datePicker.selectedDates[0];
    const countdown = setInterval(function() {
    const now = new Date().getTime();
    const ms = countdownDate.getTime() - now;
  
      if (ms <= 0) {
        clearInterval(countdown);
        Notiflix.Notify.success('Countdown is finished');
        startButton.disabled = false;
      } else {
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));


    const daysCount = document.querySelector('.value[data-days]');
    const hoursCount = document.querySelector('.value[data-hours]');
    const minutesCount = document.querySelector('.value[data-minutes]');
    const secondsCount = document.querySelector('.value[data-seconds]');

    daysCount.innerHTML = days;
    hoursCount.innerHTML = hours;
    minutesCount.innerHTML = minutes;
    secondsCount.innerHTML= seconds;
  
    startButton.disabled = "disabled";
    
    return { days, hours, minutes, seconds};

  
    }}, 1000);
});

function addLeadingZero(value){
    return String(value).padStart(2, '0');
}



