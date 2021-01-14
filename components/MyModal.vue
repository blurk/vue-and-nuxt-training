<template>
  <transition name="modal">
    <div
      class="modal-container w-full h-full z-1 fixed top-0 left-0 bg-black bg-opacity-75 grid place-items-center"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      body: this.$refs.body
    };
  }
};
</script>

<style>
.modal-container {
  background: rgba(0, 0, 0, 0.8);
}
</style>
