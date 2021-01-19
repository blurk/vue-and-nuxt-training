<template>
  <transition name="modal">
    <div
      class="fixed top-0 left-0 grid w-full h-full bg-black bg-opacity-75 modal-container z-1 place-items-center"
    >
      <slot name="form"></slot>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.modal-container {
  background: rgba(0, 0, 0, 0.8);
}
</style>
