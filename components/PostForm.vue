<template>
  <div class="relative w-1/3 px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-xl">
    <form @submit.prevent="handleForm" class="w-full ">
      <!-- TITLE INPUT -->
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="title">
          Title
        </label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Post title"
          v-model="formData.title"
          required
        />
      </div>
      <!-- CONTENT INPUT -->
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="content">
          Content
        </label>
        <textarea
          class="w-full h-32 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="content"
          type="text"
          placeholder="Post content"
          v-model="formData.content"
          required
        />
      </div>
      <!-- IMAGE INPUT -->
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="image">
          Image</label
        >
        <input
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="image"
          type="text"
          placeholder="Put your image link here"
          v-model="formData.image"
          required
        />
      </div>
      <!-- SUBMIT -->
      <button
        type="submit"
        class="block w-full px-4 py-2 mt-4 font-medium text-center text-white transition duration-500 ease-in-out bg-gray-900 rounded cursor-pointer text-md hover:text-gray-600"
      >
        {{ isEditing ? "UPDATE" : "ADD" }}
      </button>
    </form>
    <button
      class="text-4xl font-bold text-black btn-close"
      @click="$emit('close')"
    >
      &times;
    </button>
  </div>
</template>

<script>
import isImageLink from "../utils/checkImageLink";
export default {
  props: {
    currentId: { type: String, required: false },
    currentTitle: {
      type: String,
      required: false,
      default: ""
    },
    currentContent: {
      type: String,
      required: false,
      default: ""
    },
    currentImage: {
      type: String,
      required: false,
      default: ""
    },
    isEditing: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      formData: {
        title: this.isEditing ? this.currentTitle : "",
        content: this.isEditing ? this.currentContent : "",
        image: this.isEditing ? this.currentImage : ""
      }
    };
  },
  methods: {
    handleForm: function() {
      const { title, content, image } = this.formData;

      if (!isImageLink(image)) {
        alert("Image is not a valid string!");
        return;
      }

      if (!this.isEditing) {
        this.$store.dispatch("posts/addPost", { title, content, image });
      } else {
        let id = this.currentId;
        this.$store.dispatch("posts/updatePost", {
          id,
          title,
          content,
          image
        });
      }

      this.formData.title = "";
      this.formData.content = "";
      this.formData.image = "";

      this.$emit("close");
    }
  }
};
</script>

<style>
textarea[id="content"] {
  resize: none;
}
.btn-close {
  position: absolute;
  top: 0;
  right: 5%;
}
</style>
