<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";
const dummyData = {
  restaurants: [
    {
      id: 67,
      name: "1681111",
      tel: "",
      address: "",
      opening_hours: "",
      description: "",
      image: null,
      viewCounts: null,
      createdAt: "2019-09-15T11:23:22.460Z",
      updatedAt: "2019-09-15T11:33:49.998Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 47,
      name: "Beverly Yundt",
      tel: "099-398-9865 x7776",
      address: "27001 Ike Well",
      opening_hours: "08:00",
      description:
        "Quibusdam ut natus officia porro. Quis eum explicabo architecto sint repudiandae unde. Sunt magni quibusdam ipsa et impedit esse occaecati. Et nemo quaerat saepe delectus. Autem dignissimos corporis sed voluptates suscipit quia fuga. Dolorum ea suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.588878866397906",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 49,
      name: "Russ Kertzmann",
      tel: "087-274-1881",
      address: "6601 Lura Lodge",
      opening_hours: "08:00",
      description: "sed",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
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
      viewCounts: 37,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-09-15T08:50:04.423Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-09-26T15:11:56.408Z"
      }
    },
    {
      id: 50,
      name: "Mrs. Wellington Lehner",
      tel: "792-886-2864 x53152",
      address: "4185 Cartwright Green",
      opening_hours: "08:00",
      description: "aspernatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.977654953966386",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 48,
      name: "Lucie McDermott",
      tel: "(087) 019-9323 x4728",
      address: "218 Bennett Street",
      opening_hours: "08:00",
      description: "omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.899925023303915",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 43,
      name: "Carrie Robel V",
      tel: "455.357.0399 x356",
      address: "33531 Mayert Fall",
      opening_hours: "08:00",
      description:
        "Quos illum dolorem laboriosam temporibus incidunt non nihil.\nPerspiciatis iusto cumque possimus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.74175407974987",
      viewCounts: 13,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-10-03T09:57:48.018Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
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
      viewCounts: 12,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-09-15T08:47:06.852Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-09-26T15:11:56.408Z"
      }
    },
    {
      id: 44,
      name: "Sonny Funk",
      tel: "093-689-0372",
      address: "908 Kassulke Landing",
      opening_hours: "08:00",
      description:
        "Asperiores sequi doloribus. Alias corporis praesentium quas amet. Ad et delectus amet ea reiciendis. Perspiciatis aliquid sapiente doloremque. Ut hic reiciendis velit voluptates atque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.97383668164223",
      viewCounts: 2,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-10-03T09:30:23.290Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-09-26T15:11:56.408Z"
      }
    },
    {
      id: 45,
      name: "Luther Hickle",
      tel: "477-667-6528 x320",
      address: "79381 Bradtke Manor",
      opening_hours: "08:00",
      description:
        "Esse qui rerum et occaecati quia quo molestiae. Consequuntur rem iste doloribus minus esse ea voluptas atque. Dolore distinctio tempore expedita atque unde aliquam laudantium.\n \rQuaerat est ut. Nulla dolore a error eaque voluptatem quo. Laborum quis reiciendis in ipsa dolores dolor exercitationem itaque deserunt. Rerum ut ab sequi consequatur quae nulla. Consequatur nam aut voluptate amet qui omnis. Voluptatem commodi assumenda quisquam consequatur magni quod repellat ut dolore.\n \rRem nesciunt quia adipisci debitis distinctio est. Odit voluptas autem repellendus commodi a quas voluptatum. At quia modi ut ea earum consequatur facere recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.10379900896436",
      viewCounts: 1,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-09-09T14:20:54.212Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    }
  ],
  comments: [
    {
      id: 172,
      text: "test 1",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2019-10-03T10:43:55.617Z",
      updatedAt: "2019-10-03T10:43:55.617Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 170,
      text: "test",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2019-10-03T10:34:24.356Z",
      updatedAt: "2019-10-03T10:34:24.356Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 169,
      text: "test",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2019-10-03T10:25:35.298Z",
      updatedAt: "2019-10-03T10:25:35.298Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 168,
      text: "test",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2019-10-03T10:25:00.505Z",
      updatedAt: "2019-10-03T10:25:00.505Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 166,
      text: "qwe",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2019-10-03T10:03:05.068Z",
      updatedAt: "2019-10-03T10:03:05.068Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 165,
      text: "test",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2019-10-03T10:01:21.119Z",
      updatedAt: "2019-10-03T10:01:21.119Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 162,
      text: null,
      UserId: 1,
      RestaurantId: null,
      createdAt: "2019-09-27T14:03:10.413Z",
      updatedAt: "2019-09-27T14:03:10.413Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 161,
      text: null,
      UserId: 1,
      RestaurantId: null,
      createdAt: "2019-09-27T14:03:03.210Z",
      updatedAt: "2019-09-27T14:03:03.210Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 160,
      text: null,
      UserId: 1,
      RestaurantId: null,
      createdAt: "2019-09-27T14:00:43.256Z",
      updatedAt: "2019-09-27T14:00:43.256Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 125,
      text: "Laudantium minima aliquam.",
      UserId: 2,
      RestaurantId: 25,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
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
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    }
  ]
};
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments;
    }
  }
};
</script>