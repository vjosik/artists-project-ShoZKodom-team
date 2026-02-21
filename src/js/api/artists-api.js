import { http } from './http';

export function fetchArtists({ limit = 8, page = 1 }) {
  return http.get('/artists', { params: { limit, page } });
}
export function fetchArtistsById(id) {
  return http.get(`/artists/${id}`);
}
export function fetchArtistsAlbums(id) {
  return http.get(`/artists/${id}/albums`);
}
