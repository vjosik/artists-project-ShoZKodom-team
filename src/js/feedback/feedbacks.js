import './feedbacks-swiper';
import { initFeedbackRatings } from '../components/star-rating';

const feedbackListEl = document.querySelector('.feedback-swiper-wrapper');

export function createFeedbackList({ data }) {
  const markup = data
    .map(
      ({ name, rating, descr }) => `
        <li class="feedback-swiper-slide swiper-slide">
          <div class="feedback-card">
            <div class="feedback-stars-rating" data-score="${rating}">
            </div>
            <p class="feedback-text">
              "${descr}"
            </p>
            <p class="feedback-name">${name}</p>
          </div>
        </li>`
    )
    .join('');

  feedbackListEl.innerHTML = markup;
  initFeedbackRatings();
}
