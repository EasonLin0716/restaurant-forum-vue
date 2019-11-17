<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">{{ restaurant.description }}</p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{name: 'restaurant', params: {id: restaurant.id }}"
            >Show</router-link>

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="removeFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >移除最愛</button>
            <button
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  restaurants: [
    {
      id: 11,
      name: "Haley Trantow",
      tel: "(919) 824-7063 x83066",
      address: "86902 Yost Parks",
      opening_hours: "08:00",
      description: "Nam ipsum magnam quia.\r\nCulpa voluptate ducimus un",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.89406888977074",
      viewCounts: 1197,
      createdAt: "2019-07-30T16:24:55.435Z",
      updatedAt: "2019-11-15T20:25:54.425Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-09-15T07:49:43.737Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 11,
            createdAt: "2019-11-15T12:54:16.808Z",
            updatedAt: "2019-11-15T12:54:16.808Z"
          }
        },
        {
          id: 11,
          name: "parag",
          email: "p@mail.com",
          password:
            "$2a$10$a6Ce2r46Xd1iFF4EyXJu3uyCQE3jpEq2uy0ex.qG3ihcXMxmL0Tyu",
          isAdmin: null,
          image: null,
          createdAt: "2019-10-07T09:03:32.408Z",
          updatedAt: "2019-10-07T09:03:32.408Z",
          Favorite: {
            UserId: 11,
            RestaurantId: 11,
            createdAt: "2019-10-07T09:07:04.095Z",
            updatedAt: "2019-10-07T09:07:04.095Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 2
    },
    {
      id: 32,
      name: "Eriberto Zboncak V",
      tel: "(626) 794-3858 x2457",
      address: "372 Reinger Shores",
      opening_hours: "08:00",
      description: "Veritatis non ratione temporibus impedit et id ess",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.817524543311094",
      viewCounts: 21,
      createdAt: "2019-07-30T16:24:55.440Z",
      updatedAt: "2019-09-09T15:36:12.862Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 32,
            createdAt: "2019-08-05T09:07:29.998Z",
            updatedAt: "2019-08-05T09:07:29.998Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 18,
      name: "Esther Herzog",
      tel: "497-524-7986",
      address: "218 Cummings Station",
      opening_hours: "08:00",
      description: "Quis amet sint et libero unde.\nInventore et incidu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.71540496895199",
      viewCounts: 1,
      createdAt: "2019-07-30T16:24:55.436Z",
      updatedAt: "2019-10-03T09:29:33.975Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-09-15T07:49:43.737Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 18,
            createdAt: "2019-11-16T17:35:30.947Z",
            updatedAt: "2019-11-16T17:35:30.947Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 14,
      name: "Miss Reilly Gibson",
      tel: "(122) 940-8546",
      address: "5145 Donnelly Ville",
      opening_hours: "08:00",
      description: "omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.48910140868465",
      viewCounts: 241,
      createdAt: "2019-07-30T16:24:55.435Z",
      updatedAt: "2019-11-16T15:27:13.961Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-09-15T07:49:43.737Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 14,
            createdAt: "2019-11-16T15:46:32.381Z",
            updatedAt: "2019-11-16T15:46:32.381Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 46,
      name: "Jasper Mueller",
      tel: "254-159-2190",
      address: "44890 Dominique Wall",
      opening_hours: "08:00",
      description: "dolorem ratione et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.08831513935154",
      viewCounts: 38,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-11-15T20:25:15.912Z",
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-09-15T07:49:43.737Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 46,
            createdAt: "2019-09-16T07:29:15.848Z",
            updatedAt: "2019-09-16T07:29:15.848Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 40,
      name: "Robyn Schroeder",
      tel: "406.132.4400",
      address: "647 Yundt Mountains",
      opening_hours: "08:00",
      description: "Incidunt rerum perspiciatis ut iste ipsum labore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.902129223636363",
      viewCounts: 11,
      createdAt: "2019-07-30T16:24:55.441Z",
      updatedAt: "2019-09-26T04:39:36.312Z",
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-09-15T07:49:43.737Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 40,
            createdAt: "2019-09-13T02:49:22.201Z",
            updatedAt: "2019-09-13T02:49:22.201Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 42,
      name: "Melody Koepp",
      tel: "(774) 342-2533",
      address: "3318 Feeney Hollow",
      opening_hours: "08:00",
      description: "beatae iste alias",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.34426799459621",
      viewCounts: 16,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-11-16T09:03:09.181Z",
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-09-15T07:49:43.737Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 42,
            createdAt: "2019-09-13T02:49:16.478Z",
            updatedAt: "2019-09-13T02:49:16.478Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 1,
      name: "Laurence Reynolds",
      tel: "1-657-067-3756 x9782",
      address: "187 Kirlin Squares",
      opening_hours: "08:00",
      description: "sit est mollitia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887",
      viewCounts: 65,
      createdAt: "2019-07-30T16:24:55.432Z",
      updatedAt: "2019-11-16T09:55:32.077Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-09-15T07:49:43.737Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 1,
            createdAt: "2019-11-16T18:57:18.554Z",
            updatedAt: "2019-11-16T18:57:18.554Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 19,
      name: "Dustin Lynch",
      tel: "1-382-742-2344 x941",
      address: "102 Johnson Camp",
      opening_hours: "08:00",
      description: "Veritatis quae ad id amet. Similique est suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.604747512748677",
      viewCounts: 1625,
      createdAt: "2019-07-30T16:24:55.436Z",
      updatedAt: "2019-11-16T14:40:46.843Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 19,
            createdAt: "2019-08-05T09:07:28.598Z",
            updatedAt: "2019-08-05T09:07:28.598Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 26,
      name: "Zoe Connelly",
      tel: "724-565-0111",
      address: "8718 Nolan Roads",
      opening_hours: "08:00",
      description: "Ipsum aspernatur quis est voluptates maiores quam ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.62937107379864",
      viewCounts: 27,
      createdAt: "2019-07-30T16:24:55.438Z",
      updatedAt: "2019-08-26T10:07:25.048Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
};

export default {
  components: {
    NavTabs
  },
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant;
        }
        return {
          ...restaurant,
          isFavorited: true
        };
      });
    },
    removeFavorite(restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant;
        }
        return {
          ...restaurant,
          isFavorited: false
        };
      });
    }
  }
};
</script>