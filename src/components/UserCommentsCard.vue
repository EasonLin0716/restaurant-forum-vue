<template>
  <div class="card">
    <div class="card-header">
      <strong>35</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="restaurant in user.FavoritedRestaurants"
        :key="restaurant.id"
        :to="{name: 'restaurant', params: { id: restaurant.id }}"
      >
        <img :src="restaurant.image | emptyImage" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
export default {
  name: "UserCommentsCard",
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>