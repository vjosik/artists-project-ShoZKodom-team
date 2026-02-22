import Raty from 'raty-js';
const dialog = document.querySelector('.feedback-modal');
const openBtn = document.querySelector('.btn');
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-draft';
let ratyInstance;
// !!! DELETE
const STAR_ON_SVG = `
<svg width="24" height="24" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#764191"/>
</svg>
`;

const STAR_OFF_SVG = `
<svg width="24" height="24" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="white"/>
</svg>
`;

const STAR_HALF_SVG = `
<svg width="24" height="24" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="halfClip">
      <rect x="0" y="0" width="10" height="19"></rect>
    </clipPath>
  </defs>
  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="white"/>
  <path clip-path="url(#halfClip)" d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#764191"/>
</svg>
`;
const toDataUri = svg =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const STAR_ON = toDataUri(STAR_ON_SVG);
const STAR_OFF = toDataUri(STAR_OFF_SVG);
const STAR_HALF = toDataUri(STAR_HALF_SVG);

// !!! DELETE

const ANIMATION_DURATION = 300;

openBtn.addEventListener('click', () => {
  dialog.classList.remove('closing');
  dialog.showModal();
  initFormRating();
  restoreDraft();
});

dialog.addEventListener('click', e => {
  const isCloseBtn = e.target.closest('.js-close-btn');
  const isBackdrop = e.target === dialog;

  if (!isCloseBtn && !isBackdrop) return;

  closeModal();
});

dialog.addEventListener('cancel', e => {
  e.preventDefault();
  closeModal();
});

function closeModal() {
  if (dialog.classList.contains('closing')) return;

  dialog.classList.add('closing');

  setTimeout(() => {
    dialog.close();
    dialog.classList.remove('closing');
  }, ANIMATION_DURATION);
}

export function initFormRating() {
  const star = document.querySelector('.rating-star');
  if (!star) return;

  if (star.dataset.ratyInitialized === 'true') return;
  star.dataset.ratyInitialized = 'true';

  ratyInstance = new Raty(star, {
    readOnly: false,
    score: 0,
    number: 5,
    half: false,

    starType: 'img',
    starOn: STAR_ON,
    starOff: STAR_OFF,

    space: false,

    click: () => saveDraft(),
  });

  ratyInstance.init();
}

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', saveDraft);

function onSubmitForm(event) {
  event.preventDefault();

  const name = event.target.elements.name.value.trim();
  const message = event.target.elements.message.value.trim();
  const rating = ratyInstance?.score() ?? 0;

  const feedback = {
    id: Date.now(),
    name,
    message,
    rating,
  };

  event.target.reset();
  ratyInstance.score(0);
  clearDraft();
  closeModal();
}
function saveDraft() {
  const draft = {
    name: form.elements.name.value,
    message: form.elements.message.value,
    rating: ratyInstance?.score() ?? 0,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
}

function restoreDraft() {
  const draft = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  if (!draft) return;

  form.elements.name.value = draft.name ?? '';
  form.elements.message.value = draft.message ?? '';
  ratyInstance?.score(draft.rating ?? 0);
}

function clearDraft() {
  localStorage.removeItem(STORAGE_KEY);
}
