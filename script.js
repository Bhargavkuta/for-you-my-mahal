const card = document.querySelector('.card');
const audio = document.getElementById('love-song');

card.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    }
});
