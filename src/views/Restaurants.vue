<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantNavPills :categories="categories" />

    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantNavPills from "./../components/RestaurantsNavPills";

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
      viewCounts: 5,
      createdAt: "2019-07-30T16:24:55.435Z",
      updatedAt: "2019-11-14T06:52:24.875Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 21,
      name: "Clovis Mayert",
      tel: "1-292-930-4113 x0577",
      address: "3255 Streich Inlet",
      opening_hours: "08:00",
      description: "Nihil occaecati consectetur explicabo sint nobis b",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.579240610126313",
      viewCounts: 6,
      createdAt: "2019-07-30T16:24:55.436Z",
      updatedAt: "2019-08-04T17:14:28.400Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 13,
      name: "Curt Corkery",
      tel: "377-916-6821 x9397",
      address: "3757 Alfonzo Corner",
      opening_hours: "08:00",
      description: "enim",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.39164947251193",
      viewCounts: 1,
      createdAt: "2019-07-30T16:24:55.435Z",
      updatedAt: "2019-10-03T09:25:54.492Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-09-26T15:11:56.408Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 6,
      name: "Clair Herzog",
      tel: "868-946-9602 x92653",
      address: "65909 Marcelo Lock",
      opening_hours: "08:00",
      description: "Magni enim similique et doloribus fugit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.15023188933482",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.434Z",
      updatedAt: "2019-08-25T07:50:39.498Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 9,
      name: "Susan Johnston",
      tel: "260-837-0348 x3437",
      address: "0802 Tillman Crossing",
      opening_hours: "08:00",
      description: "Aspernatur aliquam totam pariatur ut mollitia odio",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.270646115002016",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.434Z",
      updatedAt: "2019-08-25T07:50:57.817Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 4,
      name: "Odessa Larkin",
      tel: "516-154-3810 x11365",
      address: "1044 Dayana Gardens",
      opening_hours: "08:00",
      description: "Similique eum laborum molestiae. Temporibus natus ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.38474595344819",
      viewCounts: 1,
      createdAt: "2019-07-30T16:24:55.433Z",
      updatedAt: "2019-09-09T14:18:42.390Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-09-26T15:11:56.408Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 10,
      name: "Howell Towne",
      tel: "(221) 302-7497 x511",
      address: "0858 Koss Via",
      opening_hours: "08:00",
      description: "laboriosam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.054925465974634",
      viewCounts: 2,
      createdAt: "2019-07-30T16:24:55.434Z",
      updatedAt: "2019-08-26T10:14:20.978Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
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
      viewCounts: 2,
      createdAt: "2019-07-30T16:24:55.436Z",
      updatedAt: "2019-09-07T16:22:46.020Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: true,
      isLiked: false
    },
    {
      id: 22,
      name: "Mr. Lavonne Grimes",
      tel: "841.933.1636",
      address: "298 Albin Road",
      opening_hours: "08:00",
      description: "Quia eum eum sapiente sint distinctio eveniet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.93265026937894",
      viewCounts: 3,
      createdAt: "2019-07-30T16:24:55.437Z",
      updatedAt: "2019-09-09T14:18:52.056Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-09-26T15:11:56.408Z"
      },
      isFavorited: false,
      isLiked: false
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
      viewCounts: 1,
      createdAt: "2019-07-30T16:24:55.435Z",
      updatedAt: "2019-10-03T09:26:14.221Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    }
  ],
  categories: [
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 1,
      name: "中式料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-09-08T08:51:28.715Z"
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-09-26T15:11:56.408Z"
    },
    {
      id: 31,
      name: "新疆料理",
      createdAt: "2019-09-26T19:58:57.874Z",
      updatedAt: "2019-09-26T19:58:57.874Z"
    }
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.categories = dummyData.categories;
      this.categoryId = dummyData.categoryId;
      this.currentPage = dummyData.page;
      this.restaurants = dummyData.restaurants;
      this.totalPage = dummyData.totalPage.length;
    }
  }
};
</script>