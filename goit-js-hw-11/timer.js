const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="days"'),
  body: document.querySelector('body'),
};

// const container = document.createElement('div');
// container.classList.add('.timer');
// container.id = 'timer-1';
// container.textContent = 'Hello';
// refs.body.append(container);

// const CountdownTimer = () => ({
//   selector: '#timer-1',
//   startTime: Date.now(),
//   targetDate: new Date('Jan 08, 2021'),
//   outputTranslation: {
//     day: 'Days',
//     hour: 'Hours',
//     minute: 'Minutes',
//     second: 'Seconds',
//   },
// });

// const timer = {
//   intervalId: null,
//   startTime: Date.now(),
//   targetDate: new Date('Jan 08, 2021'),
//   selector: '#timer-1',
//   outputTranslation: {
//     day: 'Days',
//     hour: 'Hours',
//     minute: 'Minutes',
//     second: 'Seconds',
//   },
//   outputFormat: '|day|hour|minute|second',
// };

// const deltaTime = timer.targetDate - timer.startTime;

const currentTime = Date.now();
const targetTime = new Date('Jan 08, 2021');
const timer = targetTime - currentTime;

console.log(currentTime);

// setInterval(() => {
//   console.log(timer);
// }, 1000);

function countDownTimer(timer) {
  setInterval(() => {
    updateClockface(timer);
  }, 1000);
}

countDownTimer(timer);

function pad(value) {
  return String(value).padStart(2, '0');
}
function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  // refs.days.textContent = days;

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  // refs.hours.textContent = hours;

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  // refs.mins.textContent = mins;

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  // refs.secs.textContent = secs;
}
