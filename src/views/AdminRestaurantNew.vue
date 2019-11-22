<template>
  <div class="container py-5">
    <AdminRestaurantForm :is-processing="isProcessing" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
/* eslint-disable */
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
export default {
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      // 在使用者提交資料的等待時間鎖定 submit 鈕
      isProcessing: false
    };
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        // STEP 3: 透過 restaurants.create 方法來向伺服器建立餐廳
        const { data, statusText } = await adminAPI.restaurants.create({
          formData
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        // STEP 4: 成功的話則轉址到 `/admin/restaurants`
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        // STEP 5: 錯誤處理
        Toast.fire({
          type: "error",
          title: "無法建立餐廳，請稍後再試"
        });
      }
    }
  }
};
</script>