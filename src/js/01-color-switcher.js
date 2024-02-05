const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let timerId = null;
buttonStop.disabled = "disabled";

buttonStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        buttonStop.disabled = false;
        buttonStart.disabled = "disabled";
    },1000);
    });

buttonStop.addEventListener('click', () => {
    clearInterval(timerId);
    buttonStart.disabled = false;
    buttonStop.disabled = "disabled";
});

function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      }
