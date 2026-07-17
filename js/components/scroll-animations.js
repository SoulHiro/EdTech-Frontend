export function initScrollAnimations() {
    const sections = document.querySelectorAll('main > section:not(.hero)');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.08 }
    );

    sections.forEach((el) => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}
