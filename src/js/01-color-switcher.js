function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

startBtn.addEventListener('click', changeBgColor);

let timerId = null;

function changeBgColor() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = 'true';
}

stopBtn.addEventListener('click', stopChangeBgColor);

function stopChangeBgColor() {
  clearInterval(timerId);
  startBtn.disabled = '';
}
