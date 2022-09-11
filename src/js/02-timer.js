// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');
startBtn.addEventListener('click', startTimer);
startBtn.disabled = 'true'; //неактивная кнопка старт
let manualSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    manualSelectedDate = selectedDates[0];
    checkValidDate(manualSelectedDate);
  },
};

flatpickr('#datetime-picker', options);

//проверка на выбор даты из прошлого
function checkValidDate(manualSelectedDate) {
  if (new Date() > manualSelectedDate) {
    // alert('Please choose a date in the future');
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    startBtn.disabled = false;
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

//обновление интерфейса таймера
let remainingTime = null;
function showRemainingTime() {
  remainingTime = manualSelectedDate - new Date();
  const showObjectTime = convertMs(remainingTime);

  daysEl.textContent = addLeadingZero(showObjectTime.days);
  hoursEl.textContent = addLeadingZero(showObjectTime.hours);
  minutesEl.textContent = addLeadingZero(showObjectTime.minutes);
  secondsEl.textContent = addLeadingZero(showObjectTime.seconds);
}

// запуск таймера
function startTimer() {
  inputEl.disabled = true;
  startBtn.disabled = true;
  const intervalId = setInterval(() => {
    showRemainingTime();
    if (remainingTime <= 1000) {
      clearInterval(intervalId);
      inputEl.disabled = false;
      startBtn.disabled = false;
      Notiflix.Notify.success('Finish!');
    }
  }, 1000);
}
