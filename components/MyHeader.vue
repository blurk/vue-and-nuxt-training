<template>
  <header
    class="flex items-center justify-between w-full h-24 px-10 mb-5 bg-gray-900"
  >
    <h1 class="w-2/3 text-5xl font-bold text-left text-white ">
      App
    </h1>
    <ul class="flex items-center justify-around w-1/3">
      <li
        v-for="(link, name) in links"
        :key="name"
        class="px-4 py-2 text-2xl font-medium text-gray-600 transition duration-500 ease-in-out rounded cursor-pointer hover:text-gray-600"
      >
        <nuxt-link :to="link">{{ name.toUpperCase() }}</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style>
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #fff;
}
</style>
