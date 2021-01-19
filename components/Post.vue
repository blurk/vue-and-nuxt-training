<template>
  <div class="container m-4 overflow-hidden bg-white shadow-2xl rounded-xl">
    <div class="w-full image-container p-4 overflow-hidden">
      <img :src="image" alt="post image" class="w-full h-full loader rounded" />
    </div>
    <h3 class="px-3 py-6 text-xl font-bold text-center">{{ title }}</h3>
    <div class="flex items-center justify-around w-full actions bg-teal">
      <nuxt-link
        :to="`posts/${id}`"
        class="flex-1 block w-1/5 p-2 mx-2 text-center text-white transition duration-500 ease-in-out bg-gray-900 rounded-full cursor-pointer text-md hover:text-gray-600"
        ><font-awesome-icon :icon="['fa', 'eye']" title="detail" />
      </nuxt-link>
      <button
        class="flex-1 block w-1/5 p-2 mx-2 text-center text-white transition duration-500 ease-in-out bg-gray-900 rounded-full cursor-pointer text-md hover:text-gray-600"
        @click="$emit('edit')"
      >
        <font-awesome-icon :icon="['fa', 'pen']" title="update" />
      </button>
      <button
        class="flex-1 block w-1/5 p-2 mx-2 text-center text-white transition duration-500 ease-in-out bg-gray-900 rounded-full cursor-pointer text-md hover:text-gray-600"
        @click="handleRemove(id)"
      >
        <font-awesome-icon :icon="['fa', 'trash']" title="delete" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: ""
    },

    title: {
      type: String,
      required: true,
      default: ""
    },

    image: {
      type: String,
      required: true,
      default: ""
    }
  },
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
  width: 250px;
}
.image-container {
  height: 60%;
}
.actions {
  height: 20%;
}
</style>
