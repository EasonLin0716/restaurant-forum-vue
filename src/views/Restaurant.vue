<template>
  <div class="container py-5">
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
/* eslint-disable */
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

const dummyData = {
  restaurant: {
    id: 1,
    name: "Laurence Reynolds",
    tel: "1-657-067-3756 x9782",
    address: "187 Kirlin Squares",
    opening_hours: "08:00",
    description: "sit est mollitia",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887",
    viewCounts: 39,
    createdAt: "2019-07-30T16:24:55.432Z",
    updatedAt: "2019-11-15T02:51:55.444Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    FavoritedUsers: [],
    LikedUsers: [
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
        Like: {
          UserId: 1,
          RestaurantId: 1,
          createdAt: "2019-07-30T16:25:58.629Z",
          updatedAt: "2019-07-30T16:25:58.629Z"
        }
      }
    ],
    Comments: [
      {
        id: 1,
        text: "Sed dolores labore.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-07-30T16:24:55.451Z",
        updatedAt: "2019-07-30T16:24:55.451Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z"
        }
      },
      {
        id: 51,
        text: "Quas accusamus sint blanditiis enim eveniet aliquam vel.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2019-07-30T16:24:55.452Z",
        updatedAt: "2019-07-30T16:24:55.452Z",
        User: {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-09-15T07:49:43.737Z"
        }
      },
      {
        id: 101,
        text: "Ipsa vitae voluptas.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-07-30T16:24:55.453Z",
        updatedAt: "2019-07-30T16:24:55.453Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z"
        }
      }
    ]
  },
  isFavorited: false,
  isLiked: true
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          image: data.restaurant.image,
          openingHours: data.restaurant.opening_hours,
          tel: data.restaurant.tel,
          address: data.restaurant.address,
          description: data.restaurant.description,
          isFavorited: data.isFavorited,
          isLiked: data.isLiked
        };
        this.restaurantComments = data.restaurant.Comments;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      });
    }
  }
};
</script>