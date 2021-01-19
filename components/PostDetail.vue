<template>
  <div class="grid mt-5 place-items-center">
    <!--Card 1-->
    <div class="flex w-2/3 overflow-hidden rounded shadow-lg">
      <img :src="image" alt="post image" class="w-1/3 loader" />
      <div class="w-2/3">
        <div class="px-6 py-4">
          <div class="mb-2 text-3xl font-bold">{{ title }}</div>
          <p class="mb-4 text-2xl leading-10 text-gray-700">
            {{ content }}
          </p>
        </div>
        <div class="px-3 pt-4 pb-2">
          <span
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
            >Created At: {{ createdAt }}</span
          >
          <span
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
            >Updated At: {{ updatedAt }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    content: {
      type: String,
      required: true,
      default: ""
    },
    image: {
      type: String,
      required: true,
      default: ""
    },
    createdAt: {
      type: String,
      required: true,
      default: ""
    },
    updatedAt: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>

<style></style>
