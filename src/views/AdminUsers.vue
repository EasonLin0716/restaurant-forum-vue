<template>
  <div class="container py-5">
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
            >{{ user.isAdmin ? 'set as user' : 'set as admin' }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";
const dummyData = {
  users: [
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea",
      isAdmin: false,
      image: null,
      createdAt: "2019-11-20T06:25:42.909Z",
      updatedAt: "2019-11-20T06:25:42.909Z"
    },
    {
      id: 4,
      name: "lib8186",
      email: "lib3@example.com",
      password: "$2a$10$rjYLC02gZK3Ry2/.sPFfqeF02C7mQjKc5vDcybqDVlvYSw96lepda",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-20T06:37:12.860Z",
      updatedAt: "2019-11-20T06:48:50.976Z"
    },
    {
      id: 1,
      name: "root1",
      email: "root@example.com",
      password: "$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G",
      isAdmin: true,
      image: null,
      createdAt: "2019-11-20T06:25:42.456Z",
      updatedAt: "2019-11-20T15:18:16.157Z"
    }
  ]
};

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
  components: {
    AdminNav
  },
  data() {
    return {
      users: [],
      currentUser: dummyUser.currentUser
    };
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
    },
    toggleUserRole({ userId, isAdmin }) {
      this.users = this.users.map(user => {
        if (user.id !== userId) return user;
        return {
          ...user,
          isAdmin: !isAdmin
        };
      });
    }
  },
  created() {
    this.fetchUser();
  }
};
</script>