import Plyr from 'plyr';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('.plyr__video-embed');

    const swiper = new Swiper('.js-slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        navigation: {
            prevEl: '.slider__btn--prev',
            nextEl: '.slider__btn--next',
        },
        pagination: {
            el: '.slider__pagination',
            clickable: true,
            type: 'bullets',
        },
    });
});
