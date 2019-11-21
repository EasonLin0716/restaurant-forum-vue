<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import authorizationAPI from './../apis/authorization'
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit(e) {
      authorizationAPI
        .signIn({
          email: this.email,
          password: this.password
        })
        .then(response => {
          // 取得 API 請求後的資料
          const { data } = response
          // 將 token 存放在 localStorage 內
          localStorage.setItem('token', data.token)
          // 成功登入後轉址到餐聽首頁
          this.$router.push('/restaurants')
        })
    }
  }
}
</script>
