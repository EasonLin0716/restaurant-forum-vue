<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <a href="#" @click="$router.back()">回上一頁</a>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
/* eslint-disable */
import commentAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      text: ""
    };
  },
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  methods: {
    async handleSubmit() {
      if (!this.text) {
        Toast.fire({
          type: "error",
          title: "請輸入評論"
        });
        return;
      }
      const { data, statusText } = await commentAPI.create({
        restaurantId: this.restaurantId,
        text: this.text
      });
      if (statusText !== "OK" || data.status !== "success") {
        throw new Error(statusText);
      }
      this.$emit("after-create-comment", {
        commentId: data.commentId,
        restaurantId: this.restaurantId,
        text: this.text
      });
      this.text = "";
    }
  }
};
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>