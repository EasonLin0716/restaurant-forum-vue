<template>
  <div>
    <Spinner v-if="isLoading" />
    <div v-else class="container py-5">
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
  </div>
</template>

<script>
/* eslint-disable */
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";
import Spinner from "./../components/Spinner";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantsPagination,
    Spinner
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1,
      isLoading: true
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
        this.isLoading = true;
        const response = await restaurantsAPI.getRestaurants({
          page,
          categoryId
        });
        const { data, statusText } = response;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.categories = data.categories;
        this.categoryId = data.categoryId;
        this.currentPage = data.page;
        this.restaurants = data.restaurants;
        this.totalPage = data.totalPage.length;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  }
};
</script>
