<template>
  <div>
    <button
      class="block px-4 py-2 mx-2 text-xl font-medium text-center text-white transition duration-500 ease-in-out bg-gray-900 rounded-full shadow-lg cursor-pointer hover:text-gray-600 bottom-2 btn-add"
      @click="showModal = true"
    >
      ADD
    </button>
    <div
      v-if="allPosts.length === 0"
      class="text-3xl text-center text-gray-500"
    >
      There aren't any post here yet 🥺
    </div>
    <div v-else class="flex flex-wrap justify-center w-full">
      <!-- POSTS -->
      <post
        v-for="post of allPosts"
        :key="post.id"
        :post="post"
        @edit="handleEdit(post.id, post)"
      />
    </div>
    <!-- MODAL -->
    <my-modal v-if="showModal" @close="showModal = false">
      <post-form
        :isEditing="isEditing"
        @close="
          showModal = false;
          isEditing = false;
        "
        :currentPost="currentEditPost"
      />
    </my-modal>
  </div>
</template>

<script>
import MyModal from "~/components/MyModal.vue";
import Post from "~/components/Post.vue";
import PostForm from "~/components/PostForm.vue";

export default {
  components: { Post, PostForm, MyModal },
  data() {
    return {
      isEditing: false,
      showModal: false,
      currentEditPost: null
    };
  },
  methods: {
    handleEdit: function(id, post) {
      this.currentEditPost = post;
      this.isEditing = true;
      this.showModal = true;
    }
  },
  mounted() {
    //Can only access the DOM when mounted 🙉
    this.$store.dispatch("posts/fetchPosts");
  },
  computed: {
    allPosts() {
      return this.$store.getters["posts/allPosts"];
    }
  }
};
</script>

<style>
.btn-add {
  position: fixed;
  bottom: 2rem;
  right: 0rem;
}
.modal {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
}
</style>
