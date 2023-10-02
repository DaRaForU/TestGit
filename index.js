let count = 10;

const countHeaDer = document.getElementById('count');
const countAddBtn = document.getElementById('add');
const countSubtractBtn = document.getElementById('subtract');


countHeaDer.innerHTML = count;

countAddBtn.addEventListener('click', () => {
    count += 1;
    countHeaDer.innerHTML = count;
});

countSubtractBtn.addEventListener('click', () => {
    count -= 1;
    countHeaDer.innerHTML = count;
});

const a = 1;
const b = 2;