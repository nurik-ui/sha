const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9]+@gmail\.com$/;

gmailButton.addEventListener('click', () =>{
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML= "OK"
        gmailResult.style.color= 'green'
    } else {
        gmailResult.innerHTML = "NOT OK"
        gmailResult.style.color = 'red'
    }
})



const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const moveChildBlock = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX >= 448 && positionY < 448) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionY >= 448 && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }

    // Добавляем рекурсивный вызов с requestAnimationFrame
    requestAnimationFrame(moveChildBlock);
};

// Начинаем движение
moveChildBlock();


const secondsDisplay = document.getElementById('secondsS');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let intervalId; // Переменная для хранения идентификатора интервала
let seconds = 0; // Переменная для хранения счетчика времени

// Функция, которая будет выполняться при нажатии на кнопку "Start"
const startTimer = () => {
    // Проверяем, активен ли уже интервал
    if (!intervalId) {
        intervalId = setInterval(() => {
            seconds++;
            secondsDisplay.textContent = seconds;
        }, 1000);
    }
};

// Функция, которая будет выполняться при нажатии на кнопку "Stop"
const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null; // Сбрасываем переменную intervalId
};

// Функция, которая будет выполняться при нажатии на кнопку "Reset"
const resetTimer = () => {
    clearInterval(intervalId);
    intervalId = null; // Сбрасываем переменную intervalId
    seconds = 0;
    secondsDisplay.textContent = seconds;
};

// Назначаем обработчики событий
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

