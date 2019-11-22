<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantNavPills :categories="categories" />

    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <RestaurantsPagination
      v-if="totalPage > 1"
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
    />
  </div>
</template>

<script>
/* eslint-disable */
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantsPagination
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    };
  },
  created() {
    const { page = 1, categoryId = "" } = this.$route.query;
    this.fetchRestaurants({
      page,
      categoryId
    });
  },
  beforeRouteUpdate(to, from, next) {
    const { page = 1, categoryId = "" } = to.query;
    this.fetchRestaurants({ page, categoryId });
    next();
  },
  methods: {
    async fetchRestaurants({ page, categoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page,
          categoryId
        });
        // STEP 2：將 response 中的 data 和 statusText 取出
        const { data, statusText } = response;
        // STEP 3：如果 statusText 不是 OK 的話則進入錯誤處理
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        // STEP 4：將從伺服器取得的 data 帶入 Vue 內
        this.categories = data.categories;
        this.categoryId = data.categoryId;
        this.currentPage = data.page;
        this.restaurants = data.restaurants;
        this.totalPage = data.totalPage.length;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  }
};
</script>
