import { initPlayer } from './player.js';
import { initSlider } from './slider.js';
import { initFlipCards } from './components/flip-cards.js';
import { initAudioPlayer } from './components/audio-player.js';
import { initDiscursiveActivity } from './components/discursive-activity.js';
import { initObjectiveActivity } from './components/objective-activity.js';
import { initFaq } from './components/faq.js';
import { initScrollAnimations } from './components/scroll-animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initPlayer();
    initSlider();
    initFlipCards();
    initAudioPlayer();
    initDiscursiveActivity();
    initObjectiveActivity();
    initFaq();
    initScrollAnimations();
});
