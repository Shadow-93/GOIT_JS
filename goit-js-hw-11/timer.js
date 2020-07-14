// const countTimer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jan 08, 2021'),
//   outputTranslation: {
//     day: 'Days',
//     hour: 'Hours',
//     minute: 'Minutes',
//     second: 'Seconds',
//   },
//   outputFormat: '|day|hour|minute|second',
// });

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

const timer = {
  intervalId: null,
  startTime: Date.now(),
  targetDate: new Date('Jan 08, 2021'),
};
const deltaTime = timer.targetDate - timer.startTime;

updateClockface(deltaTime.days);
console.log(deltaTime.days);

function pad(value) {
  return String(value).padStart(2, '0');
}
function updateClockface(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
}
