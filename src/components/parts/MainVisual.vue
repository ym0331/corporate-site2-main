<template>
<img src="/img/mainvisual1.jpg" class="main">
  <!-- <v-carousel cycle hide-delimiters :show-arrows="false" class="mainvosual">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel> -->
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/img/mainvisual1.jpg",
        },
        {
          src: "/img/mainvisual2.jpg",
        },
        {
          src: "/img/mainvisual3.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.main {
  height: 100vh;
  width: 100%;
 overflow: hidden;
}
</style>