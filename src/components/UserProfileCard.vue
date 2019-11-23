<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="user.image | emptyImage" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.email }}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ user.commentsLength }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ user.favoritedRestaurantsLength }}</strong> 收藏的餐廳
          </li>
          <li>
            <strong>{{ user.followingsLength }}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{ user.followersLength }}</strong> followers (追隨者)
          </li>
        </ul>
        <p></p>
        <template v-if="isCurrentUser">
          <router-link :to="{name: 'user-edit', params: {id: user.id}}" class="btn btn-primary">Edit</router-link>
        </template>
        <template v-else>
          <button
            v-if="isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowing(user.id)"
          >取消追蹤</button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
          >追蹤</button>
        </template>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { emptyImageFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  data() {
    return {
      // sent from User.vue
      isFollowed: this.initialIsFollowed
    };
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.addFollowing({ userId });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.isFollowed = true;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法追蹤，請稍後再試"
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.deleteFollowing({ userId });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.isFollowed = false;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取消追蹤，請稍後再試"
        });
      }
    }
  }
};
</script>