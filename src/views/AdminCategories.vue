<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input v-model="newCategoryName" type="text" class="form-control" placeholder="新增餐廳類別..." />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="createCategory"
            :disabled="isProcessing"
          >新增</button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">{{ category.id }}</th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">{{ category.name }}</div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span v-show="category.isEditing" class="cancel" @click="handleCancel(category.id)">✕</span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >Edit</button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })"
            >Save</button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import AdminNav from "@/components/AdminNav";
import uuid from "uuid/v4";
import adminApi from "./../apis/admin";
import { Toast } from "./../utils/helpers";
const dummyData = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z"
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z"
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z"
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z"
    }
  ]
};

export default {
  components: {
    AdminNav
  },
  data() {
    return {
      newCategoryName: "",
      categories: [],
      isProcessing: false
    };
  },
  created() {
    this.fetchCategories();
  },
  updated() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const {
          data: { categories },
          statusText
        } = await adminApi.categories.get();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.categories = categories.map(category => ({
          ...category,
          isEditing: false
        }));
      } catch (error) {
        Toast.fire({
          type: "warning",
          title: "無法取得類別資料，請稍後再試"
        });
      }
    },
    async createCategory() {
      // TODO: 透過 API 告知伺服器欲新增的餐廳類別...
      try {
        if (!this.newCategoryName) {
          Toast.fire({
            type: "warning",
            title: "請填寫類別名稱"
          });
        }
        this.isProcessing = true;
        const { data, statusText } = await adminApi.categories.create({
          name: this.newCategoryName
        });
        console.log(data);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.categories.push({
          ...data.category,
          isEditing: false
        });
        Toast.fire({
          type: "SweetAlert",
          title: "建立成功！"
        });
        this.isProcessing = false;
        this.newCategoryName = "";
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          type: "warning",
          title: "無法建立餐廳類別，請稍後再試"
        });
      }
    },
    deleteCategory(categoryId) {
      // TODO: 透過 API 告知伺服器欲刪除的餐廳類別

      this.categories = this.categories.filter(
        category => category.id !== categoryId
      );
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) return category;
        // 如果迴圈中的 category.id 是欲修改的 categoryId 則改變 isEditing 的值
        return {
          ...category,
          nameCached: category.name,
          isEditing: !category.isEditing
        };
      });
    },
    updateCategory({ categoryId, name }) {
      // TODO: 透過 API 去向伺服器更新餐廳類別名稱
      this.toggleIsEditing(categoryId);
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) {
          return category;
        }

        // 將原本的類別名稱還回去
        return {
          ...category,
          name: category.nameCached
        };
      });
      this.toggleIsEditing(categoryId);
    }
  }
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>