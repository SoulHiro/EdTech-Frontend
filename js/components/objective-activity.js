const CORRECT_ID = 'b';
const STORAGE_KEY = 'objectiveActivity';

export function initObjectiveActivity() {
    const activity = document.querySelector('.js-objective-activity');
    if (!activity) return;

    const options = activity.querySelectorAll('.js-objective-option');
    const submitBtn = activity.querySelector('.js-objective-submit');
    const alterBtn = activity.querySelector('.js-objective-alter');
    const feedbackSuccess = activity.querySelector(
        '.js-objective-feedback-success'
    );
    const feedbackError = activity.querySelector(
        '.js-objective-feedback-error'
    );
    const closeButtons = activity.querySelectorAll(
        '.js-objective-feedback-close'
    );

    function applyState(hasResponse, selectedId) {
        const isCorrect = selectedId === CORRECT_ID;

        submitBtn.disabled = hasResponse;
        alterBtn.disabled = !hasResponse;

        options.forEach((option) => {
            option.classList.toggle(
                'is-selected',
                option.dataset.id === selectedId
            );
            option.classList.toggle('is-locked', hasResponse);
        });

        feedbackSuccess.hidden = !(hasResponse && isCorrect);
        feedbackError.hidden = !(hasResponse && !isCorrect);
    }

    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || 'null');
    if (saved?.hasResponse) {
        applyState(true, saved.selectedId);
    }

    options.forEach((option) => {
        option.addEventListener('click', () => {
            options.forEach((o) => o.classList.remove('is-selected'));
            option.classList.add('is-selected');
            submitBtn.disabled = false;
        });
    });

    submitBtn.addEventListener('click', () => {
        const selected = activity.querySelector(
            '.js-objective-option.is-selected'
        );
        if (!selected) return;

        const selectedId = selected.dataset.id;
        sessionStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                hasResponse: true,
                selectedId,
            })
        );
        applyState(true, selectedId);
    });

    alterBtn.addEventListener('click', () => {
        const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || 'null');
        sessionStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                hasResponse: false,
                selectedId: saved?.selectedId,
            })
        );
        applyState(false, saved?.selectedId);
        submitBtn.disabled = false;
    });

    closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            feedbackSuccess.hidden = true;
            feedbackError.hidden = true;
        });
    });
}
