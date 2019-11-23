<template>
  <div class="container">
    <div class="card mb-3">
      <UserProfileCard
        :user="user"
        :initial-is-followed="isFollowed"
        :is-current-user="currentUser.id === user.id"
      />
    </div>

    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :user="user" />
        <UserFollowersCard :user="user" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :user="user" />
        <UserFavoritedRestaurantsCard :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";
import usersAPI from "./../apis/users";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: "",
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followersLength: 0,
        followingsLength: 0,
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: []
      },
      isFollowed: false
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({
          userId
        });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        const { profile, isFollowed } = data;
        this.user = {
          ...this.user,
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.image,
          commentsLength: profile.Comments.length,
          favoritedRestaurantsLength: profile.FavoritedRestaurants.length,
          followersLength: profile.Followers.length,
          followingsLength: profile.Followings.length,
          Comments: profile.Comments,
          FavoritedRestaurants: profile.FavoritedRestaurants,
          Followers: profile.Followers,
          Followings: profile.Followings
        };
        this.isFollowed = isFollowed;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  }
};
</script>