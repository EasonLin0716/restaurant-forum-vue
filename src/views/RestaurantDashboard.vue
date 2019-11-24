<template>
  <div>
    <Spinner v-if="isLoading" />
    <div v-else class="container py-5">
      <div>
        <h1>{{ restaurant.name }}</h1>
        <p>[{{ restaurant.categoryName }}]</p>
      </div>

      <hr />

      <ul>
        <li>有 {{ restaurant.commentsLength }} 筆評論</li>
        <li>有 {{ restaurant.favoritedUsersLength }} 人收藏這家餐廳</li>
      </ul>

      <a href="#" @click="$router.back()">回上一頁</a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Spinner from "./../components/Spinner";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "RestaurantDashboard",
  components: {
    Spinner
  },
  data() {
    return {
      isLoading: false,
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        favoritedUsersLength: 0,
        likedUsersLength: 0
      }
    };
  },
  mounted() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  // 直接更改網址時重新 fetchRestaurant
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
  watch: {
    initialRestaurant(restaurant) {
      this.restaurant = {
        ...this.restaurant,
        ...restaurant
      };
    }
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        this.isLoading = true;
        const {
          data: { restaurant },
          statusText
        } = await restaurantsAPI.getRestaurant({
          restaurantId
        });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.restaurant = {
          ...this.restaurant,
          id: restaurant.id,
          name: restaurant.name,
          categoryName: restaurant.Category.name,
          commentsLength: restaurant.Comments.length,
          favoritedUsersLength: restaurant.FavoritedUsers.length,
          likedUsersLength: restaurant.LikedUsers.length
        };
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