const STORAGE_KEY = 'discursiveActivity';

export function initDiscursiveActivity() {
    const activity = document.querySelector('.js-discursive-activity');
    if (!activity) return;

    const textarea = activity.querySelector('.js-activity-textarea');
    const submitBtn = activity.querySelector('.js-activity-submit');
    const alterBtn = activity.querySelector('.js-activity-alter');
    const feedback = activity.querySelector('.js-activity-feedback');

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved?.hasResponse) {
        textarea.value = saved.text;
        applyState(true);
    }

    textarea.addEventListener('input', () => {
        if (!alterBtn.disabled) return;

        submitBtn.disabled = textarea.value.trim() === '';
    });

    submitBtn.addEventListener('click', () => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                hasResponse: true,
                text: textarea.value,
            })
        );
        applyState(true);
    });

    alterBtn.addEventListener('click', () => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                hasResponse: false,
                text: textarea.value,
            })
        );
        applyState(false);
    });

    function applyState(hasResponse) {
        submitBtn.disabled = hasResponse;
        alterBtn.disabled = !hasResponse;
        feedback.hidden = !hasResponse;
        textarea.disabled = hasResponse;
    }
}
