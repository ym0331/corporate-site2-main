<template>
  <v-carousel cycle hide-delimiters :show-arrows="false" height="auto">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/img/mainvisual1.png",
        },
        {
          src: "/img/mainvisual2.png",
        },
        {
          src: "/img/mainvisual3.png",
        },
      ],
    };
  },
};
</script>