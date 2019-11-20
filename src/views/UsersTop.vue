<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <router-link :to="{name: 'user', params: {id: user.id}}">
          <img :src="user.image | emptyImage" width="140px" height="140px" />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="removeFollowing(user.id)"
          >取消追蹤</button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
          >追蹤</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  users: [
    {
      id: 6,
      name: "cjl19670@aklqo.com",
      email: "cjl19670@aklqo.com",
      password: "$2a$10$mlS72JE7IffnhMTp7HGyfORzvpVrl.0zUNWxveHWo8/OiA.Stl8Ne",
      isAdmin: null,
      image: null,
      createdAt: "2019-08-15T09:10:17.401Z",
      updatedAt: "2019-08-15T09:10:17.401Z"
    },
    {
      id: 7,
      name: "買東西",
      email: "sun@gmail.com",
      password: "$2a$10$PyLZbH.VtrtJbxiteKbKbORiUyI83QF0sqdNCD3ntQh5dq1Nt6N/m",
      isAdmin: null,
      image: null,
      createdAt: "2019-09-08T05:52:45.681Z",
      updatedAt: "2019-09-08T05:52:45.681Z"
    },
    {
      id: 8,
      name: "mark",
      email: "mark@gmail.com",
      password: "$2a$10$uegR/2XVI7S6UIQLlZxg6uQh4rdHZrTINyH7dmjApFueGg6A0LVZO",
      isAdmin: null,
      image: null,
      createdAt: "2019-09-08T05:54:22.376Z",
      updatedAt: "2019-09-08T05:54:22.376Z"
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
      isAdmin: false,
      image: "https://i.imgur.com/Q14p2le.jpg",
      createdAt: "2019-07-30T16:24:55.204Z",
      updatedAt: "2019-09-09T05:34:35.986Z"
    },
    {
      id: 1,
      name: "root test",
      email: "root@example.com",
      password: "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
      isAdmin: true,
      image: "https://i.imgur.com/58ImzMM.png",
      createdAt: "2019-07-30T16:24:54.983Z",
      updatedAt: "2019-09-15T07:49:43.737Z"
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2",
      isAdmin: false,
      image: "https://i.imgur.com/OezkRwO.jpg",
      createdAt: "2019-07-30T16:24:55.422Z",
      updatedAt: "2019-09-15T09:14:03.454Z"
    },
    {
      id: 5,
      name: "123",
      email: "123+v1@gmail.com",
      password: "$2a$10$aFObNZTWYpkh86oGEz647OCCg27GkIEqOBZUzBHttZavLtw2PosJO",
      isAdmin: false,
      image: null,
      createdAt: "2019-08-13T05:01:17.528Z",
      updatedAt: "2019-09-15T09:14:14.189Z"
    },
    {
      id: 9,
      name: "mos",
      email: "user6@example.com",
      password: "$2a$10$5mMHAYpCwz6gF0NPnZZdA.h8jbH2zIfvhErYNTZ9DXcss4G6ifmv2",
      isAdmin: null,
      image: null,
      createdAt: "2019-09-15T11:44:58.101Z",
      updatedAt: "2019-09-15T11:44:58.101Z"
    },
    {
      id: 10,
      name: "bb",
      email: "bb@example.com",
      password: "$2a$10$UHkAELuG7LYywkEfWD83POeZsgSaVfKHedxHmwS9YuBgMETMx8Kcy",
      isAdmin: null,
      image: null,
      createdAt: "2019-09-26T10:31:54.665Z",
      updatedAt: "2019-09-26T10:31:54.665Z"
    },
    {
      id: 4,
      name: "123",
      email: "123@gmail.com",
      password: "$2a$10$3DgQkLtWS7ud3ewuWdmRuOiFhRsgcE1SzOYAzo4/wV.rOWP3rNcRC",
      isAdmin: false,
      image: null,
      createdAt: "2019-08-13T05:00:15.406Z",
      updatedAt: "2019-09-30T11:49:25.356Z"
    },
    {
      id: 11,
      name: "parag",
      email: "p@mail.com",
      password: "$2a$10$a6Ce2r46Xd1iFF4EyXJu3uyCQE3jpEq2uy0ex.qG3ihcXMxmL0Tyu",
      isAdmin: null,
      image: null,
      createdAt: "2019-10-07T09:03:32.408Z",
      updatedAt: "2019-10-07T09:03:32.408Z"
    },
    {
      id: 12,
      name: "eason",
      email: "eason@example.com",
      password: "$2a$10$vY3NIexoMkSUI.4ph6Y8teakUPKo7jN1lWhKkJooyVeGMEiNc7CyW",
      isAdmin: null,
      image: "https://i.imgur.com/nbHsOOs.jpg",
      createdAt: "2019-11-14T05:50:54.996Z",
      updatedAt: "2019-11-14T05:52:02.830Z"
    }
  ]
};

export default {
  name: "UsersTop",
  components: {
    NavTabs
  },
  filters: {
    emptyImage(src) {
      if (!src) {
        return "http://via.placeholder.com/300x300?text=No+Image";
      }
      return src;
    }
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    fetchTopUsers() {
      this.users = dummyData.users;
    },
    addFollowing(userId) {
      this.users = this.users.map(user => {
        if (user.id !== userId) {
          return user;
        }
        return {
          ...user,
          isFollowed: true
        };
      });
    },
    removeFollowing(userId) {
      this.users = this.users.map(user => {
        if (user.id !== userId) {
          return user;
        }
        return {
          ...user,
          isFollowed: false
        };
      });
    }
  }
};
</script>