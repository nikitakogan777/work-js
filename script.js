const str = prompt('Введите размер члена');
const span = document.querySelector('span');

if (str.length < 5) {
    span.textContent = 'Ебать пиписька мелкая'
}
else if (str.length <= 10) {
    span.textContent = 'Ваша писька коротковата'
}
else {
    span.textContent = 'У вас длинный член';
}