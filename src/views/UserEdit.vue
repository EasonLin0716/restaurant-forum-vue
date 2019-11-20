<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img v-if="image" :src="image" class="d-block img-thumbnail mb-3" width="200" height="200" />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
const dummyData = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: "https://i.imgur.com/JtQJRMZ.png"
  }
};

export default {
  data() {
    return {
      id: -1,
      name: "",
      email: "",
      image: ""
    };
  },
  methods: {
    fetchProfile(profileId) {
      console.log(`fetchProfile id: ${profileId}`);
      const { profile } = dummyData;
      this.id = profile.id;
      this.name = profile.name;
      this.email = profile.email;
      this.image = profile.image;
    },
    handleFileChange(e) {
      const files = e.target.files;
      if (!files.length) return; // 檔案不存在就回傳空值
      const imageURL = window.URL.createObjectURL(files[0]);
      this.image = imageURL;
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      // TODO: 將資料透過 API 傳送到後端伺服器...
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    }
  },
  created() {
    const { id } = this.$route.params;
    this.fetchProfile(id);
  }
};
</script>