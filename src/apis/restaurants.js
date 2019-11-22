import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  // 攜帶 page 和 categoryId 參數
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    // 透過 apiHelper 發出 GET 請求給 /restaurants
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      // 從 LocalStorage 取出 token，放進 Header
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
