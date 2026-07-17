export function initFaq() {
    const items = document.querySelectorAll('.js-faq-item');
    if (!items.length) return;

    items.forEach((item) => {
        const summary = item.querySelector('summary');

        summary.addEventListener('click', (e) => {
            e.preventDefault();

            if (item.open) {
                closeItem(item);
            } else {
                items.forEach((other) => {
                    if (other !== item && other.open) closeItem(other);
                });
                item.setAttribute('open', '');
            }
        });
    });
}

function closeItem(item) {
    const body = item.querySelector('.faq__body');
    item.classList.add('is-closing');
    body.addEventListener(
        'animationend',
        () => {
            item.removeAttribute('open');
            item.classList.remove('is-closing');
        },
        { once: true }
    );
}
