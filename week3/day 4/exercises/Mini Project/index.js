const slider = document.getElementById('slider');
const toSignUp = document.getElementById('toSignUp');
const toSignIn = document.getElementById('toSignIn');

toSignUp.addEventListener('click', () => {
    slider.style.transform = 'translateX(-800px)';
});

toSignIn.addEventListener('click', () => {
    slider.style.transform = 'translateX(0)';
});