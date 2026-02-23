import { http } from './http';

export function fetchFeetbacks(page, limit) {
  return http.get('/feedbacks', {
    params: {
      page,
      limit,
    },
  });
}

export function sendFeedbacks(feedbackData) {
  return http.post('/feedbacks', feedbackData);
}
