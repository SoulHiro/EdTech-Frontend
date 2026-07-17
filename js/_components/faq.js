export function initFaq() {
    const items = document.querySelectorAll('.js-faq-item');
    if (!items.length) return;

    items.forEach((item) => {
        item.addEventListener('toggle', () => {
            if (!item.open) return;
            items.forEach((other) => {
                if (other !== item) other.removeAttribute('open');
            });
        });
    });
}
