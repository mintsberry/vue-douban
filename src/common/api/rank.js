import { request } from './request'

export function getMoviesRank () {
  return request('/api/movie/rank_list')
}
export function getBookRank () {
  return request('/api/book/rank_list')
}
export function getTvRank () {
  return request('/api/tv/rank_list')
}
// export function getMoviesRank () {
//   return request('/api/movie/rank_list')
// }
