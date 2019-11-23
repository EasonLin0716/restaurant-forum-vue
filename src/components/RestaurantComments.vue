<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >Delete</button>
        <h3>
          <a href="#">{{ comment.User.name }}</a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">{{ comment.createdAt | fromNow }}</footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { fromNowFilter } from "./../utils/mixins";
import commentAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};

export default {
  data() {
    return {
      currentUser: dummyUser.currentUser
    };
  },
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        console.log("deleted commentId: ", commentId);
        const { data, statusText } = await commentAPI.delete({ commentId });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit("after-delete-comment", commentId);
        Toast.fire({
          type: "success",
          title: "評論刪除成功"
        });
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法刪除評論，請稍後再試"
        });
      }
    }
  },
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  }
};
</script>