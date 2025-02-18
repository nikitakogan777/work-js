const darkButton = document.querySelector('#darkButton');

darkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})

const gradientText = document.querySelector('h1');

gradientText.addEventListener('mousemove', (e) => {
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
});

