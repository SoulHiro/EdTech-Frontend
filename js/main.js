import { initPlayer } from './player.js';
import { initSlider } from './slider.js';
import { initFlipCards } from './_components/flip-cards.js';
import { initAudioPlayer } from './_components/audio-player.js';
import { initDiscursiveActivity } from './_components/discursive-activity.js';

document.addEventListener('DOMContentLoaded', () => {
    initPlayer();
    initSlider();
    initFlipCards();
    initAudioPlayer();
    initDiscursiveActivity();
});
