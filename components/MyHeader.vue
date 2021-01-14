<template>
  <header
    class="flex items-center justify-between px-10 mb-5 w-full bg-gray-900 h-24"
  >
    <h1 class="text-5xl text-left w-2/3 text-white text-left font-bold ">
      App
    </h1>
    <ul class="flex items-center justify-around w-1/3">
      <li
        v-for="(link, name) in links"
        :key="name"
        class="text-2xl py-2 px-4 font-medium rounded text-white cursor-pointer hover:text-gray-600 transition duration-500 ease-in-out"
      >
        <nuxt-link :to="link">{{ name.toUpperCase() }}</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: { Home: "/", Posts: "/posts", About: "/about" }
    };
  }
};
</script>

<style></style>
