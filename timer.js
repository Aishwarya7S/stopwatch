let startStopButton = document.getElementById('startStop');
let resetButton = document.getElementById('reset');
let display = document.getElementById('display');

let timer;
let elapsedSeconds = 0;
let running = false;

startStopButton.addEventListener('click', () => {
  if (running) {
    clearInterval(timer);
    startStopButton.textContent = 'Start';
  } else {
    timer = setInterval(updateTime, 1000);
    startStopButton.textContent = 'Stop';
  }
  running = !running;
});

resetButton.addEventListener('click', () => {
  clearInterval(timer);
  elapsedSeconds = 0;
  display.textContent = '00:00:00';
  startStopButton.textContent = 'Start';
  running = false;
});

function updateTime() {
  elapsedSeconds++;
  let hours = Math.floor(elapsedSeconds / 3600);
  let minutes = Math.floor((elapsedSeconds % 3600) / 60);
  let seconds = elapsedSeconds % 60;

  display.textContent = 
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}
