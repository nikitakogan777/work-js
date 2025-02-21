const darkMode = document.querySelector('#themeToggle');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const time = document.querySelector('#clock');

let date = new Date().toLocaleString();
time.textContent = (date);


//тут мы храним карточку
let cardContainer = document.querySelector('#cardContainer');
//тут берем данные с инпутов
let titleInput = document.querySelector('#titleInput');
let descInput = document.querySelector('#descInput');
//добавляем карточку
const addCard = document.querySelector('#addCard');


addCard.addEventListener('click', () => {

    if (titleInput.value === '' || descInput.value === '') {
        alert('Заполните поля');
        return;
    }

    const newCard = document.createElement('div');
    newCard.classList.add('card');

     newCard.textContent = `${titleInput.value} ${descInput.value}`;

     cardContainer.appendChild(newCard);
})


