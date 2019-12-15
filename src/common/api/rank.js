import { request } from './request'

export function getMoviesRank () {
  return request('/api/v2/movie/rank_list')
}
export function getBookRank () {
  return request('/api/v2/book/rank_list')
}
export function getTvRank () {
  return request('/api/v2/tv/rank_list')
}
// export function getMoviesRank () {
//   return request('/api/movie/rank_list')
// }
