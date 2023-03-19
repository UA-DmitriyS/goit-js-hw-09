const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.btnStart.addEventListener('click', startChange);
refs.btnStop.addEventListener('click', stopChange);

function startChange() {
  refs.btnStart.disabled = true;
  timerId = setInterval(
    () => (refs.body.style.background = getRandomHexColor()),
    1000
  );
}

function stopChange() {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
