import { initPlayer } from './player.js';
import { initSlider } from './slider.js';
import { initFlipCards } from './_components/flip-cards.js';

document.addEventListener('DOMContentLoaded', () => {
    initPlayer();
    initSlider();
    initFlipCards();
});
