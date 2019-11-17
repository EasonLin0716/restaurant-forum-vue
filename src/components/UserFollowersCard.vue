<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ user.followersLength }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in user.Followers"
        :key="follower.id"
        :to="{params: { id: follower.id }}"
      >
        <img :src="follower.image | emptyImage" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "UserFollowersCard",
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>