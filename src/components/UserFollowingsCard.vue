<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ user.followingsLength }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="following in user.Followings"
        :key="following.id"
        :to="{params: { id: following.id }}"
      >
        <img :src="following.image | emptyImage" width="60" height="60" class="mr-1" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "UserFollowingsCard",
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>