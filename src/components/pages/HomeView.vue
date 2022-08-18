<template>
  <div class="home">
    <!-- <HedderMenu /> -->
    <!-- <router-link to="/contactArea">contactArea</router-link> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ContentsArea />
  </div>
</template>

<script>
// @ is an alias to /src
// import HedderMenu from '@/components/templates/HedderMenu.vue'
import ContentsArea from "@/components/templates/ContentsArea.vue";

export default {
  name: "HomeView",
  components: {
    // HedderMenu,
    ContentsArea,
  },
};
</script>

<style scoped>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>