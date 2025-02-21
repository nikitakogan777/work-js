// темная/светлая тема
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

    // //удалляет карточку
    // const deleteCard = document.createElement('button');
    // deleteCard.textContent = 'Удалить';
    // deleteCard.addEventListener('click', () => {
    //     newCard.remove();
    // })
    // newCard.appendChild(deleteCard);

     titleInput.value = '';
     descInput.value = '';

     //localStorage
    const newCards = document.querySelectorAll('.card'); // Получаем все элементы с классом .card

// Создаём массив с содержимым всех карт
    const cardsArray = Array.from(newCards).map(card => card.textContent);

// Сохраняем массив в localStorage
    localStorage.setItem('cards', JSON.stringify(cardsArray));

})

const saveStorage = JSON.parse(localStorage.getItem('cards'));

if (saveStorage && cardContainer) {
    saveStorage.forEach(text => {
        const newCardElement = document.createElement('div');
        newCardElement.classList.add('card'); // Добавляем класс, если нужно
        newCardElement.textContent = text; // Вставляем сохранённый текст
        cardContainer.appendChild(newCardElement); // Добавляем в контейнер
    });
}
