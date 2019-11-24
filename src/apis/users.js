import { apiHelper } from './../utils/helpers'

export default {
  // 若 post 第二個參數不發送資料就傳 null
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  // 回傳登入的 user json 資料
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
