function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

export function initAudioPlayer() {
    const player = document.querySelector('.js-podcast');
    if (!player) return;

    const audio = player.querySelector('#podcast-audio');
    const playBtn = player.querySelector('.js-podcast-play');
    const seekbar = player.querySelector('.js-podcast-seekbar');
    const timeDisplay = player.querySelector('.js-podcast-time');
    const volumeBar = player.querySelector('.js-podcast-volume');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            player.classList.add('is-playing');
            playBtn.setAttribute('aria-label', 'Pausar');
        } else {
            audio.pause();
            player.classList.remove('is-playing');
            playBtn.setAttribute('aria-label', 'Reproduzir');
        }
    });

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100 || 0;
        seekbar.value = progress;
        seekbar.style.setProperty('--progress', `${progress}%`);
        timeDisplay.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
        player.classList.remove('is-playing');
        playBtn.setAttribute('aria-label', 'Reproduzir');
    });

    seekbar.addEventListener('input', () => {
        audio.currentTime = (seekbar.value / 100) * audio.duration;
        seekbar.style.setProperty('--progress', `${seekbar.value}%`);
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
        volumeBar.style.setProperty('--volume', `${volumeBar.value}%`);
    });
}
