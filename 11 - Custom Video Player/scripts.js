// get reference
const player = document.querySelector('.player');
const video = player.querySelector(".viewer");
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚' ;
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

toggle.addEventListener('click',togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

skipButtons.forEach(button => {
    button.addEventListener('click',skip);
})

ranges.forEach(range => range.addEventListener("change",handleRange));
ranges.forEach(range => range.addEventListener("mousemove",handleRange));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', () => {
    if(mousedown){
        scrub();
    }
});
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);