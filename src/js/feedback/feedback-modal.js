import Raty from 'raty-js';
import { sendFeedbacks } from '../api/feedback-api';
import { STAR_OFF_SVG, STAR_ON_SVG } from '../components/star-rating';

const dialog = document.querySelector('.feedback-modal');
const openBtn = document.querySelector('.btn');
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-draft';
const submitBtn = document.querySelector('.feedback-submit');
let ratyInstance;

//? OPEN/CLOSE MODAL

const ANIMATION_DURATION = 300;

openBtn.addEventListener('click', () => {
  dialog.classList.remove('closing');
  dialog.showModal();
  initFormRating();
  restoreDraft();
  checkFormValidity();
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

//? STARS
const toDataUri = svg =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const STAR_ON = toDataUri(STAR_ON_SVG);
const STAR_OFF = toDataUri(STAR_OFF_SVG);

export function initFormRating() {
  const star = document.querySelector('.rating-star');
  if (!star) return;

  if (star.dataset.ratyInitialized) return;
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

//? LISTENERS

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', saveDraft);
form.addEventListener('input', checkFormValidity);
checkFormValidity();
form.elements.name.addEventListener('blur', validateNameField);
form.elements.message.addEventListener('blur', validateMessageField);

//? SEND FORM

async function onSubmitForm(event) {
  event.preventDefault();

  const name = event.target.elements.name.value.trim();
  const message = event.target.elements.message.value.trim();
  const rating = ratyInstance?.score() ?? 0;

  const feedback = { name, descr: message, rating };
  try {
    await sendFeedbacks(feedback);
    event.target.reset();
    checkFormValidity();
    ratyInstance?.score(0);
    clearDraft();
    closeModal();
  } catch (error) {
    console.log(error);
  }
}

//? LOCAL STORAGE

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

//? VALIDATE FORM
function validateNameField() {
  const input = form.elements.name;
  const value = input.value.trim();

  removeFieldError(input);

  if (value.length < 3) {
    showError(input, 'Name must be at least 3 characters');
  }
}

function validateMessageField() {
  const input = form.elements.message;
  const value = input.value.trim();

  removeFieldError(input);

  if (value.length < 10) {
    showError(input, 'Message must be at least 10 characters');
  }
}

function showError(input, message) {
  input.classList.add('input-error');

  const error = document.createElement('p');
  error.className = 'error-text';
  error.textContent = message;

  input.parentElement.appendChild(error);
}

function removeFieldError(input) {
  input.classList.remove('input-error');

  const error = input.parentElement.querySelector('.error-text');
  if (error) error.remove();
}

function checkFormValidity() {
  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();

  const isValid = name.length >= 3 && message.length >= 10;

  submitBtn.disabled = !isValid;
}
