import {
  fetchArtists,
  fetchArtistsAlbums,
  fetchArtistsById,
} from './js/api/artists-api';
import { fetchFeetbacks } from './js/api/feedback-api';
import { fetchGenres } from './js/api/genres-api';
import { DEFAULT_PAGE, FEEDBACKS_LIMIT } from './js/config/config';
import '../src/js/feedback/feedbacks';
import { createFeedbackList } from '../src/js/feedback/feedbacks';

import './js/artist/render-artist';
import './js/close-open.js/mobile-menu';
import './js/components/modal-artist/modal';
import './js/feedback/feedback-modal';

fetchFeetbacks().then(createFeedbackList);
