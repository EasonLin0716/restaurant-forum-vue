import { apiHelper } from './../utils/helpers'

export default {
  // 攜帶 page 和 categoryId 參數
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    // 透過 apiHelper 發出 GET 請求給 /restaurants
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },

  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },

  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`)
  },

  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`)
  }
}
