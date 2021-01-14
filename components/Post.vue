<template>
  <div
    class="container w-1/5 m-4 overflow-hidden bg-white shadow-2xl rounded-xl"
  >
    <div class="w-full image-container">
      <img :src="post.image" alt="post image" class="w-full h-full loader" />
    </div>
    <h3 class="px-3 py-6 text-xl font-bold text-center">{{ post.title }}</h3>
    <div class="flex items-center justify-around w-full actions bg-teal">
      <nuxt-link
        :to="`posts/${post.id}`"
        class="flex-1 block w-1/5 px-2 py-2 mx-2 text-center text-white transition duration-500 ease-in-out bg-gray-900 rounded-full cursor-pointer text-md hover:text-gray-600"
        >View
      </nuxt-link>
      <button
        class="flex-1 block w-1/5 px-2 py-2 mx-2 text-center text-white transition duration-500 ease-in-out bg-gray-900 rounded-full cursor-pointer text-md hover:text-gray-600"
        @click="$emit('edit')"
      >
        Edit
      </button>
      <button
        class="flex-1 block w-1/5 px-2 py-2 mx-2 text-center text-white transition duration-500 ease-in-out bg-gray-900 rounded-full cursor-pointer text-md hover:text-gray-600"
        @click="handleRemove(post.id)"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      isDetail: this.$route.params.id
    };
  },
  methods: {
    handleRemove: function(currentId) {
      const isRemove = confirm("Confirm Remove?");
      if (!isRemove) return;
      this.$store.dispatch("posts/deletePost", currentId);
    }
  }
};
</script>

<style scoped>
.container {
  height: 400px;
}
.image-container {
  height: 60%;
}
.actions {
  height: 20%;
}
</style>
