import { initPlayer } from './player.js';
import { initSlider } from './slider.js';
import { initFlipCards } from './_components/flip-cards.js';
import { initAudioPlayer } from './_components/audio-player.js';
import { initDiscursiveActivity } from './_components/discursive-activity.js';
import { initObjectiveActivity } from './_components/objective-activity.js';
import { initFaq } from './_components/faq.js';
import { initScrollAnimations } from './_components/scroll-animations.js';

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
