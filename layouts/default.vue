<template>
  <div>
    <MyHeader :links="{ Home: '/', Posts: '/posts', About: '/about' }" />
    <Nuxt />
  </div>
</template>

<style>
body {
  background: #eee;
}
.loader {
  animation: color-change 2s linear infinite alternate both;
}

@-webkit-keyframes color-change {
  0% {
    background: #19dcea;
  }
  100% {
    background: #b22cff;
  }
}
@keyframes color-change {
  0% {
    background: #19dcea;
  }
  100% {
    background: #b22cff;
  }
}
</style>
