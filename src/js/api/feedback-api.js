import { http } from './http';

export function fetchFeetbacks(page = 1, limit = 10) {
  return http.get('/feedbacks', {
    params: {
      page,
      limit,
    },
  });
}

export function sendFeedbacks(feedbackData) {
  console.log('📤 Sending to backend:', feedbackData);

  return http.post('/feedbacks', feedbackData);
}
