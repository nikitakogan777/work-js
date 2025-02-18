const darkButton = document.querySelector('#darkButton');

darkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')

    if (gradientText) {
        gradientText.style.background = ''; // Убираем градиент
        gradientText.style.color = ''; // Возвращаем стандартный цвет
    }
});

const gradientText = document.querySelector('h1');

gradientText.addEventListener('pointermove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = gradientText;

    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    gradientText.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, 
      yellow 0px, 
      yellow 40px, 
      white 20px, 
      white 100%)`;
    gradientText.style.webkitBackgroundClip = "text";
    gradientText.style.color = "transparent";

     if (document.body.classList.contains('dark-mode')) {
         gradientText.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, 
      yellow 0px, 
      yellow 40px, 
      black 20px, 
      black 100%)`;
         gradientText.style.webkitBackgroundClip = "text";
         gradientText.style.color = "transparent";
     }
});

