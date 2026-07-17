const flipCardsData = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe excepturi, dolores perspiciatis commodi eum dolore nesciunt tempore. similique at quas.',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe excepturi, dolores perspiciatis commodi eum dolore nesciunt tempore. similique at quas.',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe excepturi, dolores perspiciatis commodi eum dolore nesciunt tempore. similique at quas.',
    },
];

function createCard({ text }) {
    return `
        <div class="flip-cards__card">
            <div class="flip-cards__inner">
                <div class="flip-cards__front">
                    <div class="flip-cards__icon" aria-hidden="true">
                        <img src="assets/icons/question-icon.svg" alt="" />
                    </div>
                    <button class="btn btn--secondary btn--md">Abrir</button>
                </div>
                <div class="flip-cards__back" inert>
                    <p>${text}</p>
                    <button class="btn btn--secondary btn--md">Fechar</button>
                </div>
            </div>
        </div>
    `;
}

function attachListeners(container) {
    container.querySelectorAll('.flip-cards__card').forEach((card) => {
        const inner = card.querySelector('.flip-cards__inner');
        const front = card.querySelector('.flip-cards__front');
        const back = card.querySelector('.flip-cards__back');
        card.querySelectorAll('.btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const isFlipped = inner.classList.toggle('is-flipped');
                card.classList.toggle('is-flipped', isFlipped);
                front.toggleAttribute('inert', isFlipped);
                back.toggleAttribute('inert', !isFlipped);
            });
        });
    });
}

export function initFlipCards() {
    const container = document.querySelector('.js-flip-cards');
    if (!container) return;

    container.innerHTML = flipCardsData.map(createCard).join('');
    attachListeners(container);
}
