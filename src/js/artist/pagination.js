import { ARTIST_LIMIT } from "../config/config";
let page = 1;

export function getPaginationParams() {
    return {page, limit: ARTIST_LIMIT}
}
export function nextPage() {
    page += 1;
}
//export function resetPage() {
  //  page = 1;
//}  для обнулення
