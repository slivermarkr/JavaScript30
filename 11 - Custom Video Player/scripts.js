// get reference
const player = document.querySelector('.player');
const video = player.querySelector(".viewer");
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranger = player.querySelectorAll('.player__slider');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚' ;
    toggle.textContent = icon;
}

function skip() {
    console.log('Skipping')
}


toggle.addEventListener('click',togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);

skipButtons.forEach(button => {
    button.addEventListener('click',skip);
})