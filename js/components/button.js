export function createButton({
    text,
    variant = 'primary',
    disabled = false,
    onClick = null,
}) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('btn', `btn--${variant}`);
    button.disabled = disabled;

    if (onClick) {
        button.addEventListener('click', onClick);
    }

    return button;
}
